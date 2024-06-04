import { useEffect, useState } from 'react';
import { getevent } from '../services/api/event';
import CardEvent from './CardEvent';

export type EventType = {
  id: number;
  title: string;
  startDate: Date;
  endDate: Date;
  location: string;
  description: string;
  status: string;
};

export default function EventCardList() {
  const [events, setEvents] = useState<EventType[] | undefined>([]);
  const eventDate = [
    ...new Set(
      events?.map((event) => new Date(event.startDate).toLocaleDateString())
    )
  ];

  useEffect(() => {
    const loadEvents = async () => {
      const response = await getevent();
      setEvents(response);
    };
    loadEvents();
  }, []);

  return (
    <div className="mt-small">
      {eventDate?.map((dateStart, index) => (
        <CardEvent key={index} dateStart={dateStart} events={events} />
      ))}
    </div>
  );
}
