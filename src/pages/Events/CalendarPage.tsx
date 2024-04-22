import { useQuery } from "@tanstack/react-query";
import Calendar from "../../components/Calendar/Calendar";
import { findAllEventsForCalendar } from "../../services/api/event";

export default function CalendarPage() {
  const { data: eventsForCalendar } = useQuery({
    queryKey: ["events"],
    queryFn: () => findAllEventsForCalendar(),
    staleTime: 0,
  });

  return (
    <div className="bg-darkBlueDP md:w-2/3 m-large md:my-16 md:mx-auto">
      <Calendar events={eventsForCalendar} />
    </div>
  );
}
