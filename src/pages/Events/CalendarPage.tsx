import { faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import closeEvent from "../../assets/closeEvent.svg";
import openEvent from "../../assets/openEvent.svg";
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
    <div className="bg-darkBlueDP md:w-2/3 m-large md:my-8 md:mx-auto">
      <div className="flex justify-between mb-4">
        <p className="mb-4 text-sm sm:text-base">Date du jour : {today}</p>
        <Link to="/events">
          <FontAwesomeIcon icon={faList} size="xl" />
        </Link>
      </div>
      <Calendar events={eventsForCalendar} isAdmin={false} />
      <div className="my-4">
        <p className="flex gap-2">
          <img src={openEvent} alt="" /> Besoin de bénévoles
        </p>
        <p className="flex gap-2">
          <img src={closeEvent} alt="" /> Événement complet
        </p>
      </div>
    </div>
  );
}
