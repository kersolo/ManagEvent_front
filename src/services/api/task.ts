import { taskListFaker } from "../../pages/Admin/HandleEvent/TaskListFaker";

export async function getTasksNames() {
  try {
    const data = taskListFaker;
    // REMPLACER par requete get sur task
    //
    // const {data} = await axios.get(`/task`)
    // return data
    //
    return data;
  } catch (error) {
    console.log(error);
  }
}
