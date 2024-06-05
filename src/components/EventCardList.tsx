import { useQuery } from "@tanstack/react-query";
import { getEvents } from "../services/api/event";
import CardEvent from "./CardEvent";

export type EventType = {
  id: number;
  title: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
  status: string;
};
type EventsByDate = {
  date: string;
  events: EventType[];
};

export default function EventCardList() {
  const {
    data: events,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["events"],
    queryFn: () => getEvents(),
    staleTime: 0,
  });

  const transformEvents = (events: EventType[]): EventsByDate[] => {
    events.forEach(
      (event) => (event.startDate = event.startDate.split("T")[0])
    );
    const groupedEvents = events.reduce(
      (acc: EventsByDate[], currentEvent: EventType) => {
        const dateToExtend = acc.find((e) => e.date === currentEvent.startDate);
        if (acc.length !== 0 && dateToExtend) {
          dateToExtend.events.push(currentEvent);
        } else
          acc.push({ date: currentEvent.startDate, events: [currentEvent] });
        return acc;
      },
      []
    );
    console.log(groupedEvents);
    return groupedEvents;
  };

  if (isPending) return <div>Loading...</div>;

  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div className="mt-small">
      {transformEvents(events).map((group, index) => (
        <CardEvent key={index} group={group} />
      ))}
    </div>
  );
}
