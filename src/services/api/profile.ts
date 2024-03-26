import { ProfileInfosProps } from '../../pages/Profil/UpdateProfilePage';
import { profileFaker } from '../../pages/Profil/profilFaker';

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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function putPorfileUser(updateProfile: any) {
  try {
    // const { data } = await axios.put(`/profile`, UpdateProfile);
    const data = profileFaker.filter((user) => user.id === 1);
    const newUserProfile = data.fill(updateProfile);

    console.log(newUserProfile);
    return newUserProfile;
  } catch (err) {
    console.log('ERROR');
    console.log(err);
  }
}
