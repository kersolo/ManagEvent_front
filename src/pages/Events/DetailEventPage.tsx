import { useEffect, useState } from 'react';
import { getuser_task_event } from '../../services/api/user_task_event';
import TaskEvent from '../../components/TaskEvent';

// import { useNavigate } from 'react-router-dom';

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
      id: number;
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
  const [value, setValue] = useState<number | null>(null);
  // const navigate = useNavigate();

  useEffect(() => {
    const loadEvent = async () => {
      const response = await getuser_task_event();

      setUserTaskEvents(response);
    };
    loadEvent();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value === null) {
      alert('Veuillez choisir une tâche pour cet évènement');
    } else {
      console.log(value);
      // navigate('/EVENT_DEVPUNK-65');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
  };

  return (
    <>
      {userTaskEvents?.map((userTaskEvent, index) => (
        <TaskEvent
          userTaskEvent={userTaskEvent}
          key={index}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          value={value}
        />
      ))}
    </>
  );
}
