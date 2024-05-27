import { Typography } from '@material-tailwind/react';
import ButtonDefault from './ButtonDefault';
import EventDetail from './EventDetail';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Pencil from '../assets/pencil.svg';
import { DialogUnsubscribeEvent } from './Dialog/DialogUnsubscribeEvent';
import { DetailEventInterface } from '../services/interfaces/DetailEventInterface';
import FormRadioButton from './FormRadioButton';
import { UserTaskEventInterface } from '../services/interfaces/UserTaskEventInterface';

export type TaskEventPropsType = {
  taskEvent: DetailEventInterface;
  handleSubmit: (e: React.FormEvent) => void;
  handleChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  value: number | null;
  users: UserTaskEventInterface[] | undefined;
  toParticipe: UserTaskEventInterface | undefined;
};

export default function TaskEvent({
  taskEvent,
  handleSubmit,
  handleChange,
  value,
  users,
  toParticipe
}: TaskEventPropsType) {
  const { task_id, event_id } = taskEvent;
  const navigate = useNavigate();
  const [showTaskChoose, setShowTaskChoose] = useState(true);

  const handleShowTaskChoose = () => {
    setShowTaskChoose(false);
  };

  const handleDelete = () => {
    // delete_user_task_event(toParticipe?.user_id);
    // const updateTaskEvent = {
    //   volunteers_number: 3 + 1 //4:previousValue
    // };
    navigate('/events');
  };

  return (
    <>
      <div className="flex flex-col gap-7 items-center text-center mt-8 w-3/4 m-auto">
        {toParticipe ? (
          <>
            <Typography variant="lead">
              Vous êtes inscrit à l'évènement :
            </Typography>
            <EventDetail taskEvent={taskEvent} />
            {showTaskChoose ? (
              <>
                <div>
                  <p className="underline">Votre mission</p>
                  <div className="flex gap-3 mt-3 justify-center ">
                    <p>
                      {users
                        ?.filter(
                          (event) => event.user_id === toParticipe.user_id
                        )
                        .map((event) => event.task_id.title)}
                    </p>
                    <img src={Pencil} alt="" onClick={handleShowTaskChoose} />
                  </div>
                </div>
                <DialogUnsubscribeEvent handleDelete={handleDelete} />
                <ButtonDefault onClick={() => navigate('/events')}>
                  Retour à l'accueil
                </ButtonDefault>
              </>
            ) : (
              <FormRadioButton
                handleSubmit={handleSubmit}
                task_id={task_id}
                value={value}
                handleChange={handleChange}
              />
            )}
          </>
        ) : (
          <>
            {event_id.status === 'open' && (
              <>
                <EventDetail taskEvent={taskEvent} />
                <FormRadioButton
                  handleSubmit={handleSubmit}
                  task_id={task_id}
                  value={value}
                  handleChange={handleChange}
                />
              </>
            )}
            {event_id.status === 'close' && (
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
