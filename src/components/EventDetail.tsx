import { Typography } from '@material-tailwind/react';
import nextIcon from '../assets/nextIcon.svg';
import { DetailEventPagePropsType } from '../pages/Events/DetailEventPage';
import { useState } from 'react';
import { DialogLocationEvent } from './Dialog/DialogLocationEvent';

export type EventDetailPropsType = {
  taskEvent: DetailEventPagePropsType;
};

export default function EventDetail({ taskEvent }: EventDetailPropsType) {
  const { event } = taskEvent;

  const [showComponent, setShowComponent] = useState(false);
  const buttonNameClose = 'voir plus';
  const buttonNameOpen = 'voir moins';

  const handleClick = () => {
    setShowComponent(!showComponent);
  };
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

          <Typography className="flex gap-5 m-auto" variant="paragraph">
            <DialogLocationEvent event={event} />
            {event.location}
          </Typography>
          {event.description.length > 100 ? (
            <>
              {showComponent ? (
                <>
                  <Typography variant="paragraph">
                    {event.description}
                  </Typography>
                  <button className="text-lightBlueDP" onClick={handleClick}>
                    {buttonNameOpen}
                  </button>
                </>
              ) : (
                <>
                  <Typography
                    className="h-12 text-ellipsis overflow-hidden "
                    variant="paragraph"
                  >
                    {event.description}
                  </Typography>
                  <button className="text-lightBlueDP" onClick={handleClick}>
                    {buttonNameClose}
                  </button>
                </>
              )}
            </>
          ) : (
            <Typography variant="paragraph">{event.description}</Typography>
          )}

          {event.status === 'close' && (
            <Typography className="mb-5 mt-7" variant="paragraph">
              Cet évènement est complet !
            </Typography>
          )}
        </div>
      </>
    </>
  );
}
