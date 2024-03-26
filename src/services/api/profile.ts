import { profileFaker, profilesFaker } from "../../pages/Profil/profilFaker";

export async function getUserProfile() {
  try {
    const data = await profileFaker;

    //const { data } = await axios.get("/message");
    return data;
  } catch (err) {
    console.log("ERROR");
    console.log(err);
  }
}

export async function getProfileById(id: string) {
  try {
    const data = profilesFaker.filter(
      (fakeProfile) => fakeProfile.id === id
    )[0];
    // REMPLACER par requete get sur profile/:id
    //
    // const {data} = await axios.get(`/profile/${id}`)
    // return data
    //
    return data;
  } catch (error) {
    console.log(error);
  }
}
