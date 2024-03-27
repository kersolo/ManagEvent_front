import { Typography } from '@material-tailwind/react';
import nextIcon from '../assets/nextIcon.svg';
import RadioDefault from './RadioDefault';
import ButtonDefault from './ButtonDefault';
import { userTaskEventPropsType } from '../pages/Events/DetailEventPage';

export type TestComponentPropsType = {
  userTaskEvent: userTaskEventPropsType;
  handleSubmit: (e: React.FormEvent) => void;
};

export default function DetailEvent({
  userTaskEvent,
  handleSubmit
}: TestComponentPropsType) {
  const { task_event } = userTaskEvent;
  const { event, tasks } = task_event;

  return (
    <>
      <div className="flex flex-col gap-7 items-center text-center mt-8 w-3/4 m-auto ">
        <Typography variant="h1">{event.title}</Typography>
        {userTaskEvent.statut === 'open' ? (
          <form action="" onSubmit={handleSubmit}>
            <div className="border-t border-b border-orangeDP pt-7 flex flex-col gap-5 pb-7">
              <div className="flex gap-5">
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
            </div>
            <div className="mb-5 mt-7">
              <Typography className="underline font-normal mb-5" variant="h6">
                Veuillez choisir une mission
              </Typography>
              {tasks.map((task, index) => (
                <RadioDefault key={index} id={task.title} label={task.title} />
              ))}
            </div>
            <ButtonDefault type="submit">Je participe</ButtonDefault>
          </form>
        ) : (
          <>
            <div className="border-t border-b border-orangeDP pt-7 flex flex-col gap-5 ">
              <div className="flex gap-5">
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
              <Typography className="mb-5 mt-7" variant="paragraph">
                Cet évènement est complet !
              </Typography>
            </div>

            <ButtonDefault variant="disabled">Je participe</ButtonDefault>
          </>
        )}
      </div>
    </>
  );
}
