import { task_event_Faker } from '../fakers/task_event_Faker';

export async function get_task_event() {
  try {
    const data = await task_event_Faker;

    //const { data } = await axios.get("/task_event");
    return data;
  } catch (err) {
    console.log('ERROR');
    console.log(err);
  }
}
