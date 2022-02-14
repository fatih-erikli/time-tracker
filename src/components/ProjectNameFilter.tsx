import { FC } from "react";
import { WorkLogEntry } from "../types";

const ProjectNameFilter: FC<{
  workLogEntries: WorkLogEntry[];
  onChange: (name: string) => void;
  value: string | null;
}> = ({ workLogEntries, onChange, value }) => {
  const projectNames = new Set([
    ...workLogEntries.map((entry) => entry.projectName),
  ]);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: 3,
      }}
    >
      <select
        value={value || ""}
        onChange={(event) => {
          onChange(event.target.value);
        }}
      >
        <option value=''>Select...</option>
        {Array.from(projectNames).map((projectName) => (
          <option value={projectName} key={projectName}>
            {projectName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProjectNameFilter;
