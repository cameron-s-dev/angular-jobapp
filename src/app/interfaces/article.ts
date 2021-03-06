export interface JobList {
  id: string;
  jobId: string;
  companyName: string;
  title: string;
  jobImageUrls: string[];
  workPlace: string;
  occupation: string;
  salary: string;
  workTime: string;
}

export interface DetailJob extends JobList {
  label: string[];
  date: Date;
  companyContent: string;
  welfare: string;
  createAt: Date;
}

export interface AttentionJob {
  jobId: string;
  recruitmentImg: string;
  companyName: string;
  workPlace: string;
  salary: string;
}

export interface NewJob {
  companyName: string;
  title: string;
  workPlace: string;
}

export interface DamiJob {
  postId: string;
  title: string;
  workTime: string;
  holiday: string;
  welfare: string;
  overview: string;
  label: string[];
  company: string;
  salary: {
    min: number;
    max: number;
  };
  occupation: string;
  workPlace: string;
}
