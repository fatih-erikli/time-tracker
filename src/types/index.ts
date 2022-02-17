export type WorkLogEntry = {
  key: string;
  projectName: string;
  notes: string;
  seconds: number;
  date: Array<number>;
  dateCreation: string;
  linkKey?: string;
  isPaid: boolean;
};

export type WorkLogEntries = Array<WorkLogEntry>;

export type ShareableURL = {
  key: string;
  contentHash: string;
  worklog: WorkLogEntries;
  isCreated?: boolean;
  dateCreation: string;
  dateModification?: string;
  viewCount: number;
};

export type Error = {
  error: string;
  isCreated: boolean;
};
