import { Card, CardBody, Typography } from '@material-tailwind/react';
import openEvent from '../assets/openEvent.svg';
import closeEvent from '../assets/closeEvent.svg';
import { EventType } from './EventCardList';

export type CardEventPropsType = {
  event: EventType;
};

export default function CardEvent({ event }: CardEventPropsType) {
  return (
    <Card className="border-dp m-large">
      <CardBody>
        <Typography color="white" className="mb-2">
          {event.date_start}
        </Typography>

        <div className="flex justify-center">
          <Typography variant="h5" className="text-center mr-5 ">
            {event.title}
          </Typography>
          {event.status === 'open' && <img src={openEvent} alt="" />}
          {event.status === 'close' && <img src={closeEvent} alt="" />}
        </div>
      </CardBody>
    </Card>
  );
}
