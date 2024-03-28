import { Typography } from '@material-tailwind/react';
import nextIcon from '../assets/nextIcon.svg';
import { userTaskEventPropsType } from '../pages/Events/DetailEventPage';

export type EventDetailPropsType = {
  userTaskEvent: userTaskEventPropsType;
};

export default function EventDetail({ userTaskEvent }: EventDetailPropsType) {
  const { task_event } = userTaskEvent;
  const { event } = task_event;
  return (
    <>
      <Typography variant="h1">{event.title}</Typography>
      <>
        <div className="border-t border-b border-orangeDP pt-7 flex flex-col gap-5 pb-7">
          <div className="flex gap-5 justify-center">
            <Typography variant="paragraph">{event.date_start}</Typography>
            <img src={nextIcon} alt="" />
            <Typography variant="paragraph">{event.date_end}</Typography>
          </div>
          <Typography className="text-center" variant="paragraph">
            {event.location}
          </Typography>
          <Typography
            className="h-12 text-ellipsis overflow-hidden"
            variant="paragraph"
          >
            {event.description}
          </Typography>
          {userTaskEvent.statut === 'close' && (
            <Typography className="mb-5 mt-7" variant="paragraph">
              Cet évènement est complet !
            </Typography>
          )}
        </div>
      </>
    </>
  );
}
