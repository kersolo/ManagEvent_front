import { useEffect, useState } from 'react';
import TaskEvent from '../../components/TaskEvent';
import { get_task_event } from '../../services/api/task_event';
import BackPreviousPage from '../../components/BackPreviousPage';
// import { useNavigate } from 'react-router-dom';

export type DetailEventPagePropsType = {
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
    name: string;
    description: string;
    skill_name: string;
  }[];
};

export default function DetailEventPage() {
  const [taskEvents, setTaskEvents] = useState<
    DetailEventPagePropsType[] | undefined
  >([]);
  const [value, setValue] = useState<number | null>(null);
  // const navigate = useNavigate();

  useEffect(() => {
    const loadEvent = async () => {
      const response = await get_task_event();

      setTaskEvents(response);
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
        task_event_id: {
          volunteers_number: 4 - 1, // 4:previousValue
          event_id: 1, // 1:id de l'URL
          task_id: value
        }
      };
      console.log(newUserTaskEvent);
      // postUser_task_event(newUserTaskEvent);
      // navigate('/EVENT_DEVPUNK-65');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
  };

  return (
    <>
      <BackPreviousPage path="/event" />
      {taskEvents?.map((taskEvent, index) => (
        <TaskEvent
          taskEvent={taskEvent}
          key={index}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          value={value}
        />
      ))}
    </>
  );
}
