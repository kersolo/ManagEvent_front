import axios from 'axios';

import { profileFaker } from '../../pages/Profil/profilFaker';
import { ProfileInfosProps } from '../../pages/Profil/UpdateProfilePage';

export async function getUserProfile() {
  try {
    const data = await profileFaker;

    //const { data } = await axios.get("/profile");
    return data;
  } catch (err) {
    console.log('ERROR');
    console.log(err);
  }
}
export async function getUserProfileId() {
  try {
    const data = await profileFaker;
    const dataId = data.filter((profile) => profile.id === 1);

    //const { data } = await axios.get("/profile");
    return dataId;
  } catch (err) {
    console.log('ERROR');
    console.log(err);
  }
}

export async function putPorfileUser(UpdateProfile: ProfileInfosProps) {
  try {
    const { data } = await axios.put(`/profile`, UpdateProfile);
    return data;
  } catch (err) {
    console.log('ERROR');
    console.log(err);
  }
}
