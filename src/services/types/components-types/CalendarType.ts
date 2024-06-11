import { EventForCalendarInterface } from "../../interfaces/EventInterface";

export type CalendarPropsType = {
  events: EventForCalendarInterface[] | undefined;
  isPanelAdmin: boolean;
};
