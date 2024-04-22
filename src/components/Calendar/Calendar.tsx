import allLocales from "@fullcalendar/core/locales-all.js";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import { CalendarPropsType } from "../../services/types/components-types/CalendarType";
import "./Calendar.css";

export default function Calendar(events: CalendarPropsType) {
  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      editable={true}
      weekends={true}
      firstDay={1}
      events={events}
      height={"80vh"}
      buttonText={{ today: "⏎" }}
      headerToolbar={{
        start: "today",
        center: "title",
        end: "prevYear,prev,next,nextYear",
      }}
      eventColor="#ff9c06"
      eventTextColor="#2e3461"
      dayMaxEvents={true}
      locales={allLocales}
      locale={"fr"}
    />
  );
}
