import { useEffect, useState } from "react";
import { getEventsByUserIdForProfilePage } from "../../services/api/profile";

type EventProfileType = {
  date: Date;
  title: string;
};

export default function ProfileEvents({ id }: { id: string }) {
  const [events, setEvents] = useState<EventProfileType[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getEventsByUserIdForProfilePage(id);
        if (response) {
          setEvents(response);
        } else {
          console.log("Profile not found");
        }
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [id]);

  return (
    <div className="flex flex-col gap-4 md:gap-6">
      {events.map((event, index) => (
        <div key={index} className="border-dp p-small">
          <p className="text-sm md:text-lg">
            {event.date.toLocaleDateString()}
          </p>
          <h3 className="h3-size text-center mb-2 md:mb-4">{event.title}</h3>
        </div>
      ))}
    </div>
  );
}
