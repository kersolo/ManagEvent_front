import { useEffect, useState } from "react";
import { getevent } from "../services/api/event";
import CardEvent from "./CardEvent";

export type EventType = {
  id: number;
  title: string;
  date_start: string;
  date_end: string;
  location: string;
  description: string;
  status: string;
};

export default function EventCardList() {
  const [events, setEvents] = useState<EventType[] | undefined>([]);
  const eventDate = [...new Set(events?.map((event) => event.date_start))];

  useEffect(() => {
    const loadEvents = async () => {
      const response = await getevent();
      setEvents(response);
    };
    loadEvents();
  }, []);

  return (
    <div className="mt-small">
      {eventDate?.map((event, index) => (
        <CardEvent key={index} event={event} events={events} />
      ))}
    </div>
  );
}
