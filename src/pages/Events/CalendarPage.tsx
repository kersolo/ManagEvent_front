import Calendar from "../../components/Calendar/Calendar";

export default function CalendarPage() {
  const events = [
    { title: "Evénement 1", date: "2024-04-10" },
    { title: "Evénement 2", date: "2024-04-10" },
    { title: "Evénement 3", date: "2024-04-10" },
    { title: "Evénement 4", date: "2024-04-10" },
  ];

  return (
    <div className="bg-darkBlueDP md:w-2/3 m-large md:my-16 md:mx-auto">
      <Calendar events={events} />
    </div>
  );
}
