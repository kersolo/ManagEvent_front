import { useEffect, useState } from 'react';
import { getuser_task_event } from '../../services/api/user_task_event';
import DetailEvent from '../../components/DetailEvent';

export type userTaskEventPropsType = {
  user: {
    email: string;
    password: string;
    role: string;
  };
  task_event: {
    volunteers_number: number;
    event: {
      title: string;
      date_start: string;
      date_end: string;
      location: string;
      description: string;
      status: string;
    };
    tasks: {
      title: string;
      description: string;
      skill_name: string;
    }[];
  };
  statut: string;
};

export default function DetailEventPage() {
  const [userTaskEvents, setUserTaskEvents] = useState<
    userTaskEventPropsType[] | undefined
  >([]);

  useEffect(() => {
    const loadEvent = async () => {
      const response = await getuser_task_event();

      setUserTaskEvents(response);
    };
    loadEvent();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Test');
  };

  return (
    <>
      {userTaskEvents?.map((userTaskEvent, index) => (
        <DetailEvent
          userTaskEvent={userTaskEvent}
          key={index}
          handleSubmit={handleSubmit}
        />
      ))}
    </>
  );
}
