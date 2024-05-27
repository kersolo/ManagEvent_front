import { Typography } from '@material-tailwind/react';
import nextIcon from '../assets/nextIcon.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import location_icon from '../assets/location_icon.svg';
import { DetailEventInterface } from '../services/interfaces/DetailEventInterface';

export type EventDetailPropsType = {
  taskEvent: DetailEventInterface;
};

export default function EventDetail({ taskEvent }: EventDetailPropsType) {
  const { event_id } = taskEvent;

  const [showComponent, setShowComponent] = useState(false);
  const buttonNameClose = 'voir plus';
  const buttonNameOpen = 'voir moins';

  const handleClick = () => {
    setShowComponent(!showComponent);
  };

  const location_google_maps = event_id.location.replace(' ', '+');

  return (
    <>
      <Typography variant="h2">{event_id.title}</Typography>
      <>
        <div className="border-t border-b border-orangeDP pt-7 flex flex-col gap-5 pb-7">
          <div className="flex gap-5 justify-center">
            <Typography variant="paragraph">{event_id.date_start}</Typography>
            <img src={nextIcon} alt="" />
            <Typography variant="paragraph">{event_id.date_end}</Typography>
          </div>
          <Typography className="flex gap-5 m-auto" variant="paragraph">
            <Link
              target="_blank"
              to={`https://www.google.com/maps/search/?api=1&query=${location_google_maps}`}
            >
              <button type="button">
                <img src={location_icon} alt="" />
              </button>
            </Link>
            {event_id.location}
          </Typography>
          {event_id.description.length > 100 ? (
            <>
              {showComponent ? (
                <>
                  <Typography variant="paragraph">
                    {event_id.description}
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
                    {event_id.description}
                  </Typography>
                  <button className="text-lightBlueDP" onClick={handleClick}>
                    {buttonNameClose}
                  </button>
                </>
              )}
            </>
          ) : (
            <Typography variant="paragraph">{event_id.description}</Typography>
          )}

          {event_id.status === 'close' && (
            <Typography className="mb-5 mt-7" variant="paragraph">
              Cet évènement est complet !
            </Typography>
          )}
        </div>
      </>
    </>
  );
}
