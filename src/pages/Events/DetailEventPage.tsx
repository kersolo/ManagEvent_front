import { useEffect, useState } from 'react';
import TaskEvent from '../../components/TaskEvent';
import BackPreviousPage from '../../components/BackPreviousPage';
import { useParams } from 'react-router-dom';
import { EventDetailInterface } from '../../services/interfaces/DetailEventInterface';
import { useQuery } from '@tanstack/react-query';
import { getEvents } from '../../services/api/event';
import { getUser } from '../../services/api/user';
import { createUserTaskEvent } from '../../services/api/user_task_event';

export default function DetailEventPage() {
  const { data: events } = useQuery<EventDetailInterface[] | undefined>({
    queryKey: ['events'],
    queryFn: () => getEvents(),
    staleTime: 0
  });

  const [user, setUser] = useState<UserWithIncludesInterface | undefined>();
  const [value, setValue] = useState<number | null>(null);
  const eventId = useParams();
  const taskEventId = events?.filter(
    (event) => event.id === Number(eventId.id)
  );

  const toParticipe = taskEventId?.map((el) =>
    el.userTaskEvent
      .map((el) => el.userId)
      .map((el) => el)
      .find((el) => el === user?.id)
  );

  useEffect(() => {
    const loadEvent = async () => {
      const response2 = await getUser();
      setUser(response2);
    };
    loadEvent();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newUserTaskEvent = {
      userId: user?.id,
      eventId: taskEventId![0].id,
      taskId: value
    };

    if (value === null) {
      alert('Veuillez choisir une tâche pour cet évènement');
    } else if (toParticipe![0] !== undefined) {
      // deleteUserTaskEvent(taskEventId![0].id);
      // createUserTaskEvent(newUserTaskEvent);
      alert('je particpe');
    } else {
      createUserTaskEvent(newUserTaskEvent);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
  };

  return (
    <>
      <BackPreviousPage path="/events" />
      {taskEventId?.map((event, index) => (
        <TaskEvent
          event={event}
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
