import { useEffect, useState } from 'react';
import TaskEvent from '../../components/TaskEvent';
import { get_task_event } from '../../services/api/task_event';
import BackPreviousPage from '../../components/BackPreviousPage';
import { useParams } from 'react-router-dom';
import { DetailEventInterface } from '../../services/interfaces/DetailEventInterface';
import { UserTaskEventInterface } from '../../services/interfaces/UserTaskEventInterface';
import { get_user_task_event } from '../../services/api/user_task_event';
// import { useNavigate } from 'react-router-dom';

export default function DetailEventPage() {
  const [taskEvents, setTaskEvents] = useState<
    DetailEventInterface[] | undefined
  >([]);
  const [users, setUsers] = useState<UserTaskEventInterface[] | undefined>([]);
  const [value, setValue] = useState<number | null>(null);
  // const navigate = useNavigate();
  const eventId = useParams();
  const taskEventId = taskEvents?.filter(
    (el) => el.event_id.id === Number(eventId.id)
  );

  const USER_ID = 2; // id user connecté
  const toParticipe = users?.find(
    (user) =>
      user.user_id.id === USER_ID &&
      user.event_id.id === taskEventId?.map((el) => el.event_id.id)[0]
  );

  useEffect(() => {
    const loadEvent = async () => {
      const response = await get_task_event();
      const response2 = await get_user_task_event();

      setTaskEvents(response);
      setUsers(response2);
    };
    loadEvent();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value === null) {
      alert('Veuillez choisir une tâche pour cet évènement');
    } else {
      const newUserTaskEvent = {
        user_id: 1, // 1:token_User
        event_id: 1, // 1:id de l'URL
        task_id: value
      };
      const UpdateUserTaskEvent = {
        task_id: value
      };
      const updateTaskEvent = {
        volunteers_number: 4 - 1 //4:previousValue
      };
      if (toParticipe) {
        console.log(UpdateUserTaskEvent);
      } else {
        console.log(newUserTaskEvent);
        console.log(updateTaskEvent);
      }
      // postUser_task_event(newUserTaskEvent);
      // navigate('/EVENT_DEVPUNK-65');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
  };

  return (
    <>
      <BackPreviousPage path="/events" />
      {taskEventId?.map((taskEvent, index) => (
        <TaskEvent
          taskEvent={taskEvent}
          key={index}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          value={value}
          users={users}
          toParticipe={toParticipe}
        />
      ))}
    </>
  );
}
