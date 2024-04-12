import { Typography } from '@material-tailwind/react';
import ButtonDefault from './ButtonDefault';
import { DetailEventPagePropsType } from '../pages/Events/DetailEventPage';
import RadioDefault from './RadioDefault';
import EventDetail from './EventDetail';
import { useEffect, useState } from 'react';
import { get_user_task_event } from '../services/api/user_task_event';
import { useNavigate, useParams } from 'react-router-dom';
import Pencil from '../assets/pencil.svg';
import { DialogUnsubscribeEvent } from './Dialog/DialogUnsubscribeEvent';

export type TaskEventPropsType = {
  taskEvent: DetailEventPagePropsType;
  handleSubmit: (e: React.FormEvent) => void;
  handleChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  value: number | null;
};

export type UserTaskEventType = {
  user_id: number;
  task_event_id: number;
  status: string;
  taskchoose: string;
};

export default function TaskEvent({
  taskEvent,
  handleSubmit,
  handleChange,
  value
}: TaskEventPropsType) {
  const { tasks, event } = taskEvent;
  const [users, setUsers] = useState<UserTaskEventType[] | undefined>([]);
  const id = useParams();
  const toParticipe = users?.find((user) => user.user_id === Number(id.id));
  const navigate = useNavigate();

  useEffect(() => {
    const loadUser = async () => {
      const response = await get_user_task_event();
      setUsers(response);
    };
    loadUser();
  }, []);

  const handleClick = () => {
    navigate('/events');
  };

  const handleDelete = () => {
    // delete_user_task_event(toParticipe?.user_id);
    navigate('/events');
  };

  return (
    <>
      <div className="flex flex-col gap-7 items-center text-center mt-8 w-3/4 m-auto ">
        {toParticipe ? (
          <>
            <EventDetail taskEvent={taskEvent} />
            <div>
              <p className="underline">Votre mission</p>
              <div className="flex gap-3 mt-3 justify-center ">
                <p>
                  {users
                    ?.filter((event) => event.user_id === toParticipe.user_id)
                    .map((event) => event.taskchoose)}
                </p>
                <img src={Pencil} alt="" />
              </div>
            </div>
            <DialogUnsubscribeEvent handleDelete={handleDelete} />
            <ButtonDefault onClick={handleClick}>
              Retour à l'accueil
            </ButtonDefault>
          </>
        ) : (
          <>
            {event.status === 'open' && (
              <>
                <EventDetail taskEvent={taskEvent} />
                <form className="w-full" action="" onSubmit={handleSubmit}>
                  <div className="mb-5 flex flex-col items-center">
                    <Typography
                      className="underline font-normal mb-5"
                      variant="h6"
                    >
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
          </>
        )}
      </div>
    </>
  );
}
