import { useEffect, useState } from 'react';
import TaskEvent from '../../components/TaskEvent';
import { get_task_event } from '../../services/api/task_event';
import BackPreviousPage from '../../components/BackPreviousPage';
import { useParams } from 'react-router-dom';
import {
  DetailEventInterface,
  EventDetailInterface
} from '../../services/interfaces/DetailEventInterface';
import { UserTaskEventInterface } from '../../services/interfaces/UserTaskEventInterface';
import { get_user_task_event } from '../../services/api/user_task_event';
import { useQuery } from '@tanstack/react-query';
import { getEvents } from '../../services/api/event';
import { getUser } from '../../services/api/user';
// import { useNavigate } from 'react-router-dom';

export default function DetailEventPage() {
  const {
    data: events,
    isPending,
    isError,
    error
  } = useQuery<EventDetailInterface[]>({
    queryKey: ['events'],
    queryFn: () => getEvents(),
    staleTime: 0
  });

  const [taskEvents, setTaskEvents] = useState<
    DetailEventInterface[] | undefined
  >([]);
  const [user, setUser] = useState<UserWithIncludesInterface | undefined>();
  const [value, setValue] = useState<number | null>(null);
  // const navigate = useNavigate();
  const eventId = useParams();
  const taskEventId = events?.filter(
    (event) => event.id === Number(eventId.id)
  );

  const toParticipe = taskEventId
    ?.map((el) => el.userTaskEvent.map((el) => el.userId)[0])
    .find((el) => el === user?.id);

  useEffect(() => {
    const loadEvent = async () => {
      const response = await get_task_event();
      const response2 = await getUser();

      setTaskEvents(response);
      setUser(response2);
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
          user={user}
          toParticipe={toParticipe}
        />
      ))}
    </>
  );
}
