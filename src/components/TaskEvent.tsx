import { Typography } from '@material-tailwind/react';
import ButtonDefault from './ButtonDefault';
import { userTaskEventPropsType } from '../pages/Events/DetailEventPage';
import RadioDefault from './RadioDefault';
import EventDetail from './EventDetail';

export type TestComponentPropsType = {
  userTaskEvent: userTaskEventPropsType;
  handleSubmit: (e: React.FormEvent) => void;
  handleChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  value: number | null;
};

export default function TaskEvent({
  userTaskEvent,
  handleSubmit,
  handleChange,
  value
}: TestComponentPropsType) {
  const { task_event } = userTaskEvent;
  const { tasks } = task_event;

  return (
    <>
      <div className="flex flex-col gap-7 items-center text-center mt-8 w-3/4 m-auto ">
        {userTaskEvent.statut === 'open' && (
          <>
            <EventDetail userTaskEvent={userTaskEvent} />
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
                      id={task.title}
                      checked={value === task.id}
                      onChange={handleChange}
                      label={task.title}
                      taskInfos={task}
                    />
                  ))}
                </div>
              </div>
              <ButtonDefault type="submit">Je participe</ButtonDefault>
            </form>
          </>
        )}
        {userTaskEvent.statut === 'close' && (
          <>
            <EventDetail userTaskEvent={userTaskEvent} />
            <ButtonDefault variant="disabled">Je participe</ButtonDefault>
          </>
        )}
      </div>
    </>
  );
}
