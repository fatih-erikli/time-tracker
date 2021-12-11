import { useState, useEffect, ChangeEvent, ChangeEventHandler, useMemo } from "react";

import { useLocalStorageState } from "./hooks/useLocalStorage";
import {
  fetchWorkLogEntries,
  removeIndexDbStore,
  updateWorkLogEntry,
  createWorkLogEntry,
  hashWorkLogEntries,
} from "./services/work-log";
import {
  createLocalShareableURL,
  deleteLocalShareableURL,
  fetchLocalShareableUrls,
  fetchShareableURL,
  requestShareableURL,
  updateLocalShareableURL,
  updateRemoteShareableURL,
} from "./services/shareable-urls";
import { Error, ShareableURL, WorkLogEntries } from "./types";
import { generateUniqueID, isValidUUIDKey } from "./utils";

import Time from "./components/Time";
import DateFilter from "./components/DateFilter";
import Textarea from "./components/Textarea";

import "./App.css";

let __timerInstance: NodeJS.Timeout;

type AppProps = {
  workLogEntriesFetcher?: Function;
  shareableUrlsFetcher?: Function;
};

function App({ workLogEntriesFetcher, shareableUrlsFetcher }: AppProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [seconds, setSeconds] = useLocalStorageState("seconds", 0, Number);
  const [isRunning, setIsRunning] = useLocalStorageState(
    "isRunning",
    false,
    Boolean
  );
  const [projectName, setProjectName] = useLocalStorageState("projectName", "");
  const [workLogEntries, setWorkLogEntries] = useState<WorkLogEntries>([]);
  const [currentWorkLogEntriesHash, setCurrentWorkLogEntriesHash] = useState<string|null>(null);
  const [currentLinkKey, setCurrentLinkKey] = useState<string|null>(null);
  const [shareableUrls, setShareableUrls] = useState<Array<ShareableURL>>([]);
  const [notes, setNotes] = useLocalStorageState("notes", "");
  const [ratePerHour, setRatePerHour] = useLocalStorageState(
    "ratePerHour",
    0,
    Number
  );
  const [currency, setCurrency] = useLocalStorageState("currency", "USD");
  const [currentEditingEntry, setCurrentEditingEntry] = useState<string | null>(
    null
  );
  const [currentEditingField, setCurrentEditingField] = useState<string | null>(
    null
  );
  const [showFilterBar, setShowFilterBar] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);
  const [isCreateShareableURLInProgress, setIsCreateShareableURLInProgress] =
    useState(false);
  const loadFile: ChangeEventHandler = (event: ChangeEvent) => {
    setError(null);
    if (!event.target) {
      return;
    }
    const files = (event.target as HTMLInputElement).files;
    if (!files) {
      return;
    }
    const reader = new FileReader();
    reader.onload = async (event) => {
      if (!event.target) {
        return;
      }
      let dump;
      try {
        dump = JSON.parse(event.target.result as any);
      } catch (e) {
        setError("Provide a valid JSON file.");
        return;
      }
      const { entries } = dump;
      for (const entry of entries) {
        await createWorkLogEntry(entry, entry.key);
      }
      setInfo("Database loaded successfully.");
      await loadWorkLogEntries();
    };
    reader.readAsText(files[0]);
  };

  const exportDatabases = async () => {
    const workLogEntries = await fetchWorkLogEntries();

    const stringifiedJSONDump = JSON.stringify({
      entries: workLogEntries,
    });

    const element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(stringifiedJSONDump)
    );
    element.setAttribute("download", "work-log-database.json");
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };
  const loadWorkLogEntries = useMemo(() => (
    workLogEntriesFetcher ||
    (async (linkKey: string) => {
      setIsLoading(true);
      if (linkKey) {
        const remoteShareableURL: ShareableURL = await fetchShareableURL(linkKey);
        setWorkLogEntries(remoteShareableURL.worklog);
      } else {
        const entries = await fetchWorkLogEntries(linkKey);
        setWorkLogEntries(entries);
      }
      setIsLoading(false);
    })
  ), [workLogEntriesFetcher]);
  const loadShareableUrls = useMemo(() => (
    shareableUrlsFetcher ||
    (async () => {
      const shareableUrls = await fetchLocalShareableUrls();
      setShareableUrls(shareableUrls);
    })
  ), [shareableUrlsFetcher]);
  useEffect(() => {
    setCurrentWorkLogEntriesHash(hashWorkLogEntries(workLogEntries));
  }, [workLogEntries]);
  useEffect(() => {
    if (isRunning) {
      localStorage.setItem("seconds", seconds);
      localStorage.setItem("isRunning", isRunning);
    } else {
      localStorage.removeItem("isRunning");
    }
    if (seconds === 0) {
      localStorage.removeItem("seconds");
    }
    document
      .querySelector("link[rel='icon']")
      ?.setAttribute(
        "href",
        isRunning && seconds > 0 ? "favicon-animated.ico" : "favicon.ico"
      );
  }, [isRunning, seconds]);
  useEffect(() => {
    if (isRunning) {
      __timerInstance = setTimeout(() => {
        setSeconds(seconds + 1);
      }, 1000);
    }
    return () => {
      if (__timerInstance) {
        clearTimeout(__timerInstance);
      }
    };
  });
  const processSaveButton = async () => {
    const date = new Date();
    await createWorkLogEntry({
      key: generateUniqueID(),
      dateCreation: new Date().toJSON(),
      projectName,
      seconds,
      notes,
      date: [date.getFullYear(), date.getMonth(), date.getDate()],
    });
    setNotes("");
    setIsRunning(false);
    setSeconds(0);
    if (__timerInstance) {
      clearTimeout(__timerInstance);
    }
    await loadWorkLogEntries();
  };
  const processLogEntryEdit = async () => {
    const currentWorkLogEntry = workLogEntries.find(
      (entry) => entry.key === currentEditingEntry
    );
    if (currentWorkLogEntry && currentEditingEntry) {
      await updateWorkLogEntry(currentWorkLogEntry, currentEditingEntry);
    }
    setCurrentEditingEntry(null);
  };
  const resetCurrentDatabase = async () => {
    await removeIndexDbStore();
    await loadWorkLogEntries();
  };
  const totalSeconds = workLogEntries.reduce(
    (left, right) => left + right.seconds,
    0
  );
  const createShareableURL = async () => {
    const contentHash = hashWorkLogEntries(workLogEntries);
    const urlKey = generateUniqueID();
    setIsCreateShareableURLInProgress(true);
    const remoteShareableURL: ShareableURL | Error = await requestShareableURL(
      workLogEntries,
      contentHash,
      urlKey
    );
    if (remoteShareableURL.isCreated) {
      createLocalShareableURL(
        remoteShareableURL.worklog,
        remoteShareableURL.key,
        remoteShareableURL.contentHash,
        remoteShareableURL.dateCreation,
        remoteShareableURL.dateModification,
        remoteShareableURL.viewCount
      );
    } else {
      setInfo("A link for the current state of the work log already exists.");
    }
    loadShareableUrls();
    setIsCreateShareableURLInProgress(false);
  };
  useEffect(() => {
    const linkKey = window.location.hash.slice(1);
    const isValidLinkKey = isValidUUIDKey(linkKey);

    if (isValidLinkKey) {
      setCurrentLinkKey(linkKey);
    }

    if (loadWorkLogEntries) {
      if (isValidLinkKey) {
        loadWorkLogEntries(linkKey);
      } else {
        loadWorkLogEntries();
      }
    }

    if (loadShareableUrls) {
      loadShareableUrls();
    }
  }, [loadShareableUrls, loadWorkLogEntries]);
  const pushChanges = async (urlKey: string) => {
    const document = await updateRemoteShareableURL(urlKey, workLogEntries, currentWorkLogEntriesHash as string);
    await updateLocalShareableURL(urlKey, document.contentHash, document.dateModification as string, document.viewCount);
    loadShareableUrls();
  };
  const deleteLink = (urlKey: string) => {
    deleteLocalShareableURL(urlKey);
    loadShareableUrls();
  };
  return (
    <div id="container">
      <h3 id="logo"><a href="/">Time tracker</a></h3>
      {currentLinkKey && (
        <h2>Currently viewing the work log with the key {currentLinkKey}</h2>
      )}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{}}>
          <label htmlFor={"project-id"}>Project</label>
          <input
            id={"project-id"}
            type={"text"}
            value={projectName}
            onChange={(event) => setProjectName(event.target.value)}
          />
        </div>
        <Time seconds={seconds} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <label htmlFor="notes">Notes</label>
        <textarea
          id="notes"
          value={notes}
          onChange={(event) => setNotes(event.target.value)}
          rows={4}
        ></textarea>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "left",
          gap: 5,
          marginTop: 5,
        }}
      >
        <button
          onClick={() => {
            if (__timerInstance) {
              clearTimeout(__timerInstance);
            }

            setIsRunning(!isRunning);
          }}
        >
          {isRunning ? "Pause" : seconds === 0 ? "Start" : "Continue"}
        </button>
        {seconds > 0 && !isRunning && (
          <button
            onClick={() => {
              setSeconds(0);
            }}
          >
            Reset
          </button>
        )}
        {seconds > 0 && (
          <button onClick={() => processSaveButton()}>Save</button>
        )}
      </div>
      <h3>Work log</h3>
      <table>
        <thead>
          <tr>
            <th className={"table-header-project"}>Project</th>
            <th className={"table-header-time"}>Time</th>
            <th className={"table-header-date"}>
              <a
                href="#filter-bar"
                onClick={(event) => {
                  event.preventDefault();
                  setShowFilterBar(!showFilterBar);
                }}
              >
                Date
              </a>
              {showFilterBar && <DateFilter />}
            </th>
            <th className={"table-header-description"}>Description</th>
          </tr>
        </thead>
        <tbody>
          {isLoading && (
            <tr>
            <td colSpan={4}>Loading.</td>
            </tr>
          )}
          {!isLoading && workLogEntries.length === 0 && (
            <tr>
              <td colSpan={4}>No data.</td>
            </tr>
          )}
          {workLogEntries.map((entry) => (
            <tr key={entry.key}>
              <td
                style={{
                  verticalAlign: "top",
                }}
              >
                {entry.projectName}
              </td>
              <td
                style={{
                  verticalAlign: "top",
                }}
              >
                <Time seconds={entry.seconds} />
              </td>
              <td
                className={"date-cell"}
                onClick={() => {
                  setCurrentEditingEntry(entry.key);
                  setCurrentEditingField("date");
                }}
                style={{
                  cursor: "pointer",
                }}
              >
                {currentEditingEntry &&
                currentEditingEntry === entry.key &&
                currentEditingField === "date" ? (
                  <>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: 2,
                      }}
                    >
                      {entry.date.map((number, index) => (
                        <input
                          onChange={(event) => {
                            setWorkLogEntries(
                              workLogEntries.map((entry) =>
                                entry.key === currentEditingEntry
                                  ? {
                                      ...entry,
                                      date: entry.date.map(
                                        (number, numberIndex) =>
                                          index === numberIndex
                                            ? Number(event.target.value)
                                            : number
                                      ),
                                    }
                                  : entry
                              )
                            );
                          }}
                          style={{
                            width: index === 0 ? "60%" : "20%",
                          }}
                          value={number}
                          key={index}
                        />
                      ))}
                    </div>
                    <button
                      onClick={processLogEntryEdit}
                      style={{ width: "60%", marginTop: 3 }}
                    >
                      Save
                    </button>
                  </>
                ) : (
                  (([year, month, day]) => (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                      }}
                    >
                      <span className={"date-separator"}>{year}</span>/
                      <span className={"date-separator"}>{month + 1}</span>/
                      <span className={"date-separator"}>{day}</span>
                    </div>
                  ))(entry.date)
                )}
              </td>
              <td
                onClick={() => {
                  setCurrentEditingEntry(entry.key);
                  setCurrentEditingField("notes");
                }}
                style={{
                  verticalAlign: "top",
                  cursor: "pointer",
                }}
              >
                {currentEditingEntry &&
                currentEditingEntry === entry.key &&
                currentEditingField === "notes" ? (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Textarea
                      onChange={(event: ChangeEvent) => {
                        setWorkLogEntries(
                          workLogEntries.map((entry) =>
                            entry.key === currentEditingEntry
                              ? { ...entry, notes: (event.target as any).value }
                              : entry
                          )
                        );
                      }}
                      value={entry.notes}
                    />
                    <button
                      onClick={processLogEntryEdit}
                      style={{ width: "20%", marginTop: 3 }}
                    >
                      Save
                    </button>
                  </div>
                ) : (
                  <div
                    style={{
                      whiteSpace: "break-spaces",
                    }}
                  >
                    {entry.notes}
                  </div>
                )}
              </td>
            </tr>
          ))}
          {(
            <>
              <tr className={"total"}>
                <td>Total</td>
                <td>
                  <Time seconds={totalSeconds} />
                </td>
                <td
                  rowSpan={2}
                  style={{ verticalAlign: "bottom", textAlign: "center" }}
                >
                  Todays date
                  {((date) => (
                    <div
                      style={{
                        display: "flex",
                        width: "200",
                        justifyContent: "space-around",
                      }}
                    >
                      <span className={"date-separator"}>
                        {date.getFullYear()}
                      </span>
                      /
                      <span className={"date-separator"}>
                        {date.getMonth() + 1}
                      </span>
                      /
                      <span className={"date-separator"}>{date.getDate()}</span>
                    </div>
                  ))(new Date())}
                </td>
                <td style={{ verticalAlign: "top" }}></td>
              </tr>
              <tr className={"total-payment"}>
                <td></td>
                <td>
                  Rate per hour
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: 3,
                      marginTop: 3,
                    }}
                  >
                    <input
                      type={"number"}
                      value={ratePerHour}
                      style={{ width: "60%" }}
                      onChange={(event) => setRatePerHour(event.target.value)}
                    />
                    <select
                      style={{ width: "40%" }}
                      onChange={(event) => setCurrency(event.target.value)}
                      value={currency}
                      name={"currency"}
                    >
                      {["USD", "TL", "EUR"].map((currency) => (
                        <option key={currency}>{currency}</option>
                      ))}
                    </select>
                  </div>
                </td>
                <td colSpan={1} style={{}}>
                  Payment in total
                  <div style={{ fontSize: "2rem" }}>
                    {Number((totalSeconds / 60 / 60) * ratePerHour).toFixed(2)}
                    {{ USD: "$", EUR: "€", TL: "TL" }[currency as string]}
                  </div>
                </td>
              </tr>
            </>
          )}
        </tbody>
      </table>
      <h3>Load a database</h3>
      <p>
        <input onChange={loadFile} type={"file"} />
      </p>
      <h3>Export current database</h3>
      <p
        style={{
          display: "flex",
          gap: 5,
        }}
      >
        <button
          onClick={(event) => {
            event.preventDefault();
            exportDatabases();
          }}
        >
          <span>Export</span>
        </button>
        <button
          disabled={isCreateShareableURLInProgress}
          onClick={() => createShareableURL()}
        >
          {isCreateShareableURLInProgress
            ? "Creating a shareable url..."
            : "Create a shareable URL of database"}
        </button>
      </p>
      {shareableUrls.length > 0 && (
        <table>
          <thead>
            <tr>
              <th style={{ width: '25%' }}>Key</th>
              <th style={{ width: '25%' }}>Hash</th>
              <th style={{ width: '25%' }}>Last modification</th>
              <th style={{ width: '10%' }}>Views</th>
              <th style={{ width: '15%' }}></th>
            </tr>
          </thead>
          <tbody>
            {shareableUrls.map((shareableUrl) => (
              <tr key={shareableUrl.key}>
                <td><a target="_blank" rel="noreferrer" href={`#${shareableUrl.key}`}>Open link in new window</a></td>
                <td>
                  <div style={{display: 'flex', padding: 0}}>
                  <span title={shareableUrl.contentHash} className="long-hash">{shareableUrl.contentHash}</span>
                  </div>
                </td>
                <td>{new Date(shareableUrl.dateModification || shareableUrl.dateCreation).toLocaleString('en-US', { timeZone: 'UTC' })}</td>
                <td>{shareableUrl.viewCount}</td>
                <td>
                  <div style={{display: 'flex', gap: 3}}>
                  <button disabled={shareableUrl.contentHash === currentWorkLogEntriesHash} onClick={() => pushChanges(shareableUrl.key)} title="Push changes to the shared link">Sync...</button>
                  <button onClick={() => deleteLink(shareableUrl.key)} title="Delete the current link">Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {error && <p className={"error"}>{error}</p>}
      {info && <p className={"info"}>{info}</p>}
      <h3>Reset current database</h3>
      <p>
        <button
          onClick={() => {
            if (
              window.confirm(
                "Are you really sure to reset the current database?"
              )
            ) {
              resetCurrentDatabase();
            }
          }}
        >
          <span>Reset</span>
        </button>
      </p>
      <footer>
        Fatih Erikli, MIT Licensed, 2021.
        <br />
        Source code available on{" "}
        <a
          style={{ color: "gray" }}
          target={"blank"}
          href="https://github.com/fatih-erikli/time-tracker"
        >
          github
        </a>
        .
      </footer>
    </div>
  );
}

export default App;