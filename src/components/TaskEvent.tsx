import { Typography } from '@material-tailwind/react';
import ButtonDefault from './ButtonDefault';
import { DetailEventPagePropsType } from '../pages/Events/DetailEventPage';
import RadioDefault from './RadioDefault';
import EventDetail from './EventDetail';

export type TaskEventPropsType = {
  taskEvent: DetailEventPagePropsType;
  handleSubmit: (e: React.FormEvent) => void;
  handleChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  value: number | null;
};

export default function TaskEvent({
  taskEvent,
  handleSubmit,
  handleChange,
  value
}: TaskEventPropsType) {
  const { tasks, event } = taskEvent;

  return (
    <>
      <div className="flex flex-col gap-7 items-center text-center mt-8 w-3/4 m-auto ">
        {event.status === 'open' && (
          <>
            <EventDetail taskEvent={taskEvent} />
            <form className="w-full" action="" onSubmit={handleSubmit}>
              <div className="mb-5 flex flex-col items-center">
                <Typography className="underline font-normal mb-5" variant="h6">
                  Veuillez choisir une mission
                </Typography>
                <div>
                  {tasks.map((task, index) => (
                    <RadioDefault
                      key={index}
                      name="task"
                      value={task.id}
                      id={task.name}
                      checked={value === task.id}
                      onChange={handleChange}
                      label={task.name}
                      taskInfos={task}
                    />
                  ))}
                </div>
              </div>
              <ButtonDefault type="submit">Je participe</ButtonDefault>
            </form>
          </>
        )}
        {event.status === 'close' && (
          <>
            <EventDetail taskEvent={taskEvent} />
            <ButtonDefault variant="disabled">Je participe</ButtonDefault>
          </>
        )}
      </div>
    </>
  );
}
