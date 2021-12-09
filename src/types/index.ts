export type WorkLogEntry = {
  key: string;
  projectName: string;
  notes: string;
  seconds: number;
  date: Array<number>;
  dateCreation: string;
};

export type WorkLogEntries = Array<WorkLogEntry>;
