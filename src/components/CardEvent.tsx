import { Card, CardBody, Typography } from "@material-tailwind/react";
import closeEvent from "../assets/closeEvent.svg";
import openEvent from "../assets/openEvent.svg";
import { EventType } from "./EventCardList";

export type CardEventPropsType = {
  event: string;
  events: EventType[] | undefined;
};

export default function CardEvent({ event, events }: CardEventPropsType) {
  return (
    <Card className="border-dp my-small">
      <CardBody>
        <Typography color="white" className="mb-2">
          {event}
        </Typography>
        {events
          ?.filter((sameEvent) => sameEvent.date_start === event)
          .map((sameEvent, index) => (
            <div key={index} className="flex justify-center">
              <Typography variant="h5" className="text-center mr-5 ">
                {sameEvent.title}
              </Typography>
              {sameEvent.status === "open" && <img src={openEvent} alt="" />}
              {sameEvent.status === "close" && <img src={closeEvent} alt="" />}
            </div>
          ))}
      </CardBody>
    </Card>
  );
}
