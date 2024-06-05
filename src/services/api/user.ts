import axios from "axios";
import { usersFaker } from "../fakers/usersFaker";
import { useApi } from "../hooks/useApi";
import { LoginForm } from "../interfaces/LoginForm";

const api = useApi();

export async function getUsers() {
  try {
    const data = usersFaker;
    //const { data } = await axios.get("/user");
    return data;
  } catch (err) {
    console.log("ERROR");
    console.log(err);
  }
}
export async function getUsersId() {
  try {
    const data = usersFaker;
    const dataId = data.filter((user) => user.id === 1);
    // //const { data } = await axios.get("/user");
    // const { data } = await api.get(`users/${id}`);
    // return data;
    return dataId;
  } catch (err) {
    console.log("ERROR");
    console.log(err);
  }
}

export async function getUser() {
  try {
    const { data } = await api.get(`users`);
    return data.data;
  } catch (error) {
    return error;
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function postUser(newUser: any) {
  try {
    const { data } = await api.post("auth/register", newUser);
    return data;
  } catch (error) {
    return error;
  }
}
export async function loginUser(values: LoginForm) {
  try {
    const { data } = await api.post("auth/login", values);
    return data.data;
  } catch (error) {
    return error;
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function deleteUser(id: any) {
  try {
    const { data } = await axios.delete(`/user`, id);
    return data;
  } catch (err) {
    console.log("ERROR");
    console.log(err);
  }
}
