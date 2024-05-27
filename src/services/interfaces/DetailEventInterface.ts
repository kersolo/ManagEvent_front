export interface DetailEventInterface {
  volunteers_number: number;
  event_id: {
    id: number;
    title: string;
    date_start: string;
    date_end: string;
    location: string;
    description: string;
    status: string;
  };
  task_id: {
    id: number;
    name: string;
    description: string;
    skill_name: string;
  }[];
}
