import { Avatar } from '@material-tailwind/react';
import { InputDefault } from '../../components/InputDefault';
import ButtonDefault from '../../components/ButtonDefault';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { getUserProfile } from '../../services/api/profile';
import Pencil from '../../assets/pencil.svg';
import BackIcon from '../../assets/back-icon.svg';
import { Link } from 'react-router-dom';

interface ProfileInfosProps {
  firstname: string;
  lastname: string;
  nickname: string;
  avatar_url: string;
  email: string;
}

export default function UpdateProfilePage() {
  const [usersProfile, setUsersProfile] = useState<
    ProfileInfosProps[] | undefined
  >([]);

  useEffect(() => {
    const loadUser = async () => {
      const response = await getUserProfile();
      setUsersProfile(response);
    };
    loadUser();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ProfileInfosProps>();

  const onSubmit: SubmitHandler<ProfileInfosProps> = (data) => {
    const UpdateProfile = {
      firstname: data.firstname,
      lastname: data.lastname,
      nickname: data.nickname,
      avatar_url: data.avatar_url,
      email: data.email
    };
    console.log('data:', UpdateProfile);
  };

  return (
    <>
      <Link to="/profile">
        <div className="flex">
          <img src={BackIcon} alt="" />
          <p>Retour</p>
        </div>
      </Link>
      {/* <Link to="/profile">{`${BackIcon} Retour`}</Link> */}
      {/* <Link to="/profile">`${BackIcon} Retour`</Link> */}
      <div className="flex flex-col items-center gap-14 mt-10 ">
        {usersProfile?.map((infos) => (
          <>
            <div className="flex">
              <Avatar
                src={infos.avatar_url}
                alt="avatar"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              />
              <img src={Pencil} alt="" />
            </div>
            <div className="border rounded-lg border-gray-800 p-6">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col justify-center gap-6"
                action=""
              >
                <InputDefault
                  label="Votre Prénom"
                  name="firstname"
                  type="text"
                  defaultValue={infos.firstname}
                  register={register}
                  errors={errors}
                />
                <InputDefault
                  label="Votre Nom"
                  name="lastname"
                  type="text"
                  defaultValue={infos.lastname}
                  register={register}
                  errors={errors}
                />
                <InputDefault
                  label="Votre Pseudo"
                  name="nickname"
                  type="text"
                  defaultValue={infos.nickname}
                  register={register}
                  errors={errors}
                />
                <InputDefault
                  label="Votre email"
                  name="email"
                  type="email"
                  defaultValue={infos.email}
                  register={register}
                  errors={errors}
                />

                <ButtonDefault type="submit">
                  Valider les modifications
                </ButtonDefault>
                <ButtonDefault variant="delete">
                  Supprimer mon compte
                </ButtonDefault>
              </form>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
