import { Typography } from '@material-tailwind/react';
import nextIcon from '../assets/nextIcon.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import location_icon from '../assets/location_icon.svg';
import { EventDetailInterface } from '../services/interfaces/DetailEventInterface';
import { dayDate } from '../services/utils/DateDayFrFormat';

export type EventDetailPropsType = {
  taskEvent: EventDetailInterface;
};

export default function EventDetail({ taskEvent }: EventDetailPropsType) {
  const [showComponent, setShowComponent] = useState(false);
  const buttonNameClose = 'voir plus';
  const buttonNameOpen = 'voir moins';

  const handleClick = () => {
    setShowComponent(!showComponent);
  };

  const location_google_maps = taskEvent.adress.replace(' ', '+');

  const startDate = dayDate(taskEvent.startDate);
  const endDate = dayDate(taskEvent.endDate);

  return (
    <>
      <Typography variant="h2">{taskEvent.title}</Typography>
      <>
        <div className="border-t border-b border-orangeDP pt-7 flex flex-col gap-5 pb-7">
          <div className="flex gap-5 justify-center">
            <Typography variant="paragraph">{startDate}</Typography>
            <img src={nextIcon} alt="" />
            <Typography variant="paragraph">{endDate}</Typography>
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
            {taskEvent.adress}
          </Typography>
          {taskEvent.description.length > 100 ? (
            <>
              {showComponent ? (
                <>
                  <Typography variant="paragraph">
                    {taskEvent.description}
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
                    {taskEvent.description}
                  </Typography>
                  <button className="text-lightBlueDP" onClick={handleClick}>
                    {buttonNameClose}
                  </button>
                </>
              )}
            </>
          ) : (
            <Typography variant="paragraph">{taskEvent.description}</Typography>
          )}

          {taskEvent.status === 'Complete' && (
            <Typography className="mb-5 mt-7" variant="paragraph">
              Cet évènement est complet !
            </Typography>
          )}
        </div>
      </>
    </>
  );
}
