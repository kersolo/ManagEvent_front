import { eventsFaker } from '../../pages/Events/eventsFaker';

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
