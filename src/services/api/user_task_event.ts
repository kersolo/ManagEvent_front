import { user_task_event_Faker } from '../../pages/Events/user_task_event_Faker';

export async function getuser_task_event() {
  try {
    const data = await user_task_event_Faker;

    //const { data } = await axios.get("/user_task_event");
    return data;
  } catch (err) {
    console.log('ERROR');
    console.log(err);
  }
}
