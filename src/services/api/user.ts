import { usersFaker } from "../../pages/SignUp/usersFaker";

export async function getUsers() {
  try {
    const data = usersFaker;
    //const { data } = await axios.get("/message");
    return data;
  } catch (err) {
    console.log("ERROR");
    console.log(err);
  }
}
