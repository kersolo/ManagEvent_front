import { eventDataFaker } from "../fakers/eventsFaker";

export async function getEventDataForUpdateEventPage(eventId: number) {
  try {
    const data = eventDataFaker[eventId];
    // REMPLACER par requete get sur (user_task_event JOIN events) by user_id
    //
    // const {data} = await axios.get(`/user-task-event/${user_id}`)
    // return data
    //
    return data;
  } catch (error) {
    console.log(error);
  }
}
