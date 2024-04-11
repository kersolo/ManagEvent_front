export interface TaskInterface {
  id: number;
  name: string;
  description?: string;
}

export interface TaskCreateEventInterface {
  taskName: string;
  volunteerNumber: number;
}
