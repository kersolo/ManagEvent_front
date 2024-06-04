import { Card, CardBody, Typography } from '@material-tailwind/react';
import closeEvent from '../assets/closeEvent.svg';
import openEvent from '../assets/openEvent.svg';
import { EventType } from './EventCardList';

export type CardEventPropsType = {
  dateStart: string;
  events: EventType[] | undefined;
};

export default function CardEvent({ dateStart, events }: CardEventPropsType) {
  return (
    <Card className="border-dp mb-small">
      <CardBody className="mb-2">
        {dateStart}

        {events?.map(
          (sameEvent, index) =>
            new Date(sameEvent.startDate).toLocaleDateString() ===
              String(dateStart) && (
              <div key={index} className="flex justify-center">
                <Typography variant="h5" className="text-center mr-5 ">
                  {sameEvent.title}
                </Typography>
                {sameEvent.status === 'Incomplete' && (
                  <img src={openEvent} alt="" />
                )}
                {sameEvent.status === 'Complete' && (
                  <img src={closeEvent} alt="" />
                )}
              </div>
            )
        )}
      </CardBody>
    </Card>
  );
}
