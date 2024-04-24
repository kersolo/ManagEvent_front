import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import closeEvent from "../../assets/closeEvent.svg";
import openEvent from "../../assets/openEvent.svg";
import EventCardList from "../../components/EventCardList";

export default function EventsPage() {
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
    <div className="flex flex-col md:w-2/3 m-large md:my-16 md:mx-auto gap-4 ">
      <div className="flex justify-between">
        <p className="mb-4">Date du jour : {today}</p>
        <Link to="/event/calendar">
          <FontAwesomeIcon icon={faCalendarDays} size="xl" />
        </Link>
      </div>
      <EventCardList />
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
