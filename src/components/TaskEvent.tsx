import { Typography } from '@material-tailwind/react';
import ButtonDefault from './ButtonDefault';
import EventDetail from './EventDetail';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Pencil from '../assets/pencil.svg';
import { DialogUnsubscribeEvent } from './Dialog/DialogUnsubscribeEvent';
import { EventDetailInterface } from '../services/interfaces/DetailEventInterface';
import FormRadioButton from './FormRadioButton';

export type TaskEventPropsType = {
  event: EventDetailInterface;
  handleSubmit: (e: React.FormEvent) => void;
  handleChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  value: number | null;
  user: UserWithIncludesInterface | undefined;
  toParticipe: any;
};

export default function TaskEvent({
  event,
  handleSubmit,
  handleChange,
  value,
  user,
  toParticipe
}: TaskEventPropsType) {
  const task_id = event.taskEvent.map((el) => el.task);

  const navigate = useNavigate();
  const [showTaskChoose, setShowTaskChoose] = useState(true);

  const handleShowTaskChoose = () => {
    setShowTaskChoose(false);
  };

  const userTaskEvent = user?.userTaskEvent;

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
        {toParticipe[0] !== undefined ? (
          <>
            <Typography variant="lead">
              Vous êtes inscrit à l'évènement :
            </Typography>
            <EventDetail event={event} />
            {showTaskChoose ? (
              <>
                <div>
                  <p className="underline">Votre mission</p>
                  <div className="flex gap-3 mt-3 justify-center ">
                    <p>
                      {userTaskEvent
                        ?.filter((el) => el.event.id === event.id)
                        .map((el) => el.task.name)}
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
            {event.status === 'Incomplete' && (
              <>
                <EventDetail event={event} />
                <FormRadioButton
                  handleSubmit={handleSubmit}
                  task_id={task_id}
                  value={value}
                  handleChange={handleChange}
                />
              </>
            )}
            {event.status === 'Complete' && (
              <>
                <EventDetail event={event} />
                <ButtonDefault variant="disabled">Je participe</ButtonDefault>
              </>
            )}
          </>
        )}
      </div>
    </>
  );
}
