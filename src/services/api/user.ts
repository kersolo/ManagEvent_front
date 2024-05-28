import axios from 'axios';
import { usersFaker } from '../../pages/SignUp/usersFaker';
import { LoginForm } from '../interfaces/LoginForm';
import { useApi } from '../hooks/useApi';

const api = useApi();

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
    const { data } = await api.post('auth/register', newUser);
    // const data = usersFaker.push(newUser);
    return data;
  } catch (err) {
    console.log('ERROR');
    console.log(err);
  }
}
export async function loginUser(values: LoginForm) {
  try {
    const { data } = await api.post('auth/login', values);

    // const data = usersFaker.push(newUser);
    return data;
  } catch (err) {
    console.log('ERROR');
    console.log(err);
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function deleteUser(id: any) {
  try {
    const { data } = await axios.delete(`/user`, id);
    return data;
  } catch (err) {
    console.log('ERROR');
    console.log(err);
  }
}
