import { faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Calendar from "../../components/Calendar/Calendar";
import { findAllEventsForCalendar } from "../../services/api/event";

export default function CalendarPage() {
  const { data: eventsForCalendar } = useQuery({
    queryKey: ["events"],
    queryFn: () => findAllEventsForCalendar(),
    staleTime: 0,
  });
  function getToday() {
    const today = new Date();
    return today.toLocaleDateString("fr-FR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }
  const today = getToday();

  return (
    <div className="bg-darkBlueDP md:w-2/3 m-large md:my-16 md:mx-auto">
      <div className="flex justify-between mb-4">
        <p className="mb-4">Date du jour : {today}</p>
        <Link to="/events">
          <FontAwesomeIcon icon={faList} size="xl" />
        </Link>
      </div>
      <Calendar events={eventsForCalendar} />
    </div>
  );
}
