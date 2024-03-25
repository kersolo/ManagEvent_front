import axios from 'axios';
import { usersFaker } from '../../pages/SignUp/usersFaker';

export async function getUsers() {
  try {
    const data = usersFaker;
    //const { data } = await axios.get("/user");
    return data;
  } catch (err) {
    console.log('ERROR');
    console.log(err);
  }
}
export async function getUsersId() {
  try {
    const data = usersFaker;
    const dataId = data.filter((user) => user.id === 1);
    //const { data } = await axios.get("/user");
    return dataId;
  } catch (err) {
    console.log('ERROR');
    console.log(err);
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function postUser(newUser: any) {
  try {
    const { data } = await axios.put(`/user`, newUser);
    return data;
  } catch (err) {
    console.log('ERROR');
    console.log(err);
  }
}
