import { eventDataFaker } from "../fakers/eventsFaker";
import { eventsFaker } from '../../pages/Events/eventsFaker';

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


export async function getevent() {
  try {
    const data = await eventsFaker;

    //const { data } = await axios.get("/event");
    return data;
  } catch (err) {
    console.log('ERROR');
    console.log(err);
  }
}

export async function getEventId() {
  try {
    const data = await eventsFaker;
    const dataId = data.filter((event) => event.id === 1);

    //const { data } = await axios.get("/profile/id");
    return dataId;
  } catch (err) {
    console.log('ERROR');
    console.log(err);
  }
}
