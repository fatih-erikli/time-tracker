export type WorkLogEntry = {
  key: string;
  projectName: string;
  notes: string;
  seconds: number;
  date: Array<number>;
  dateCreation: Date;
};

export type WorkLogEntries = Array<WorkLogEntry>;
