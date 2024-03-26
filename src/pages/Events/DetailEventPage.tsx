import { useEffect, useState } from 'react';
import { getEventId } from '../../services/api/event';
import { Typography } from '@material-tailwind/react';
import nextIcon from '../../assets/nextIcon.svg';

export type EventProps = {
  id: number;
  title: string;
  date_start: string;
  date_end: string;
  location: string;
  description: string;
  status: string;
};

export default function DetailEventPage() {
  const [events, setEvents] = useState<EventProps[] | undefined>([]);

  useEffect(() => {
    const loadEvent = async () => {
      const response = await getEventId();
      setEvents(response);
    };
    loadEvent();
  }, []);

  return (
    <>
      {events?.map((event, index) => (
        <div key={index} className="flex flex-col items-center ">
          <Typography variant="h1">{event.title}</Typography>
          <div className="border-t border-b border-orangeDP  ">
            <div className="flex gap-5">
              <Typography variant="paragraph">{event.date_start}</Typography>
              <img src={nextIcon} alt="" />
              <Typography variant="paragraph">{event.date_end}</Typography>
            </div>
            <Typography className="text-center" variant="paragraph">
              {event.location}
            </Typography>
            {/* <Typography variant="paragraph">{event.description}</Typography> */}
          </div>
        </div>
      ))}
    </>
  );
}
