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
  // ATTENTION : si l'évènement à lieu du 22 au 23, start doit être égal à 22 mais end doit être égal à 24 pour que l'affichage soit correct
  // (end doit donc être égal à startEnd + 1)
  status: "open" | "close";
}
