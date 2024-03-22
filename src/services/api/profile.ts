import { profileFaker } from '../../pages/Profil/profilFaker';

export async function getUserProfile() {
  try {
    const data = await profileFaker;

    //const { data } = await axios.get("/message");
    return data;
  } catch (err) {
    console.log('ERROR');
    console.log(err);
  }
}
