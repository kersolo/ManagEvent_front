import allLocales from "@fullcalendar/core/locales-all.js";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import closeEvent from "../../assets/closeEvent.svg";
import openEvent from "../../assets/openEvent.svg";
import { CalendarPropsType } from "../../services/types/components-types/CalendarType";
import "./Calendar.css";

export default function Calendar({ events, isAdmin }: CalendarPropsType) {
  function renderEventContent(eventInfo) {
    return (
      <div className="flex gap-2">
        <img
          src={
            eventInfo.event.extendedProps.status == "open"
              ? openEvent
              : closeEvent
          }
        />
        <p className="hidden sm:block truncate font-bold">
          {eventInfo.event.title}
        </p>
      </div>
    );
  }

  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      editable={isAdmin}
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
      eventContent={renderEventContent}
    />
  );
}
