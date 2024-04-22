export interface EventInterface {
  id: number;
  title: string;
  date_start: Date;
  date_end: Date;
  location: string;
  description: string;
  status: string;
}

export interface EventDataFaker {
  title: string;
  startDate: Date;
  endDate: Date;
  adress: string;
  description: string;
  tasks: {
    taskName: string;
    volunteerNumber: number;
  }[];
}

export interface EventForCalendarInterface {
  id: string;
  title: string;
  start: Date | string;
  end: Date | string;
  url: string;
  backgroundColor?: string;
  display?: string;
}
