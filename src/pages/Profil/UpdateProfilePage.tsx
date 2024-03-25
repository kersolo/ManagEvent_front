import {
  Avatar,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader
} from '@material-tailwind/react';
import { InputDefault } from '../../components/InputDefault';
import ButtonDefault from '../../components/ButtonDefault';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { getUserProfile, putPorfileUser } from '../../services/api/profile';
import Pencil from '../../assets/pencil.svg';
import BackIcon from '../../assets/back-icon.svg';
import { Link, useNavigate } from 'react-router-dom';
import { DialogDeleteUser } from '../../components/Dialog/DialogDeleteUser';
import { DialogUpdatePassword } from '../../components/Dialog/DialogUpdatePassword';

export interface ProfileInfosProps {
  id?: number;
  firstname: string;
  lastname: string;
  nickname: string;
  email: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  avatar_url: any;
}

export default function UpdateProfilePage() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
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
    const file = !data.avatar_url ? data.avatar_url : data.avatar_url[0]?.name;
    const UpdateProfile = {
      firstname: data.firstname,
      lastname: data.lastname,
      nickname: data.nickname,
      email: data.email,
      avatar_url: file
    };
    console.log('UpdateProfile:', UpdateProfile);
    putPorfileUser(UpdateProfile);
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleDelete = () => {
    // axios.delete('/user/id');
    console.log('Votre compte a bien été supprimé');
    navigate('/');
  };

  return (
    <>
      <Link to="/profile">
        <div className="flex pt-2">
          <img src={BackIcon} alt="" />
          <p>Retour</p>
        </div>
      </Link>
      {/* {usersProfile?.filter((user)=>user.id === id)} */}
      {usersProfile
        ?.filter((user) => user.id === 1)
        .map((infos, index) => (
          <div key={index} className="flex flex-col items-center gap-14 mt-10 ">
            <>
              <div className="flex flex-col gap-3">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col justify-center gap-4"
                  action=""
                >
                  <div className="flex justify-center mb-10 ">
                    <Avatar
                      id="avatar_url"
                      src={infos.avatar_url}
                      alt="avatar"
                    />
                    <button onClick={handleOpen}>
                      <img src={Pencil} alt="" />
                    </button>
                    <Dialog
                      className="bg-darkBlueDP"
                      open={open}
                      handler={handleOpen}
                    >
                      <DialogHeader className="text-white">
                        Veuillez Uploader votre image
                      </DialogHeader>
                      <DialogBody>
                        <input {...register('avatar_url')} type="file" />
                      </DialogBody>
                      <DialogFooter>
                        <ButtonDefault onClick={handleOpen}>
                          Valider
                        </ButtonDefault>
                        <ButtonDefault variant="secondary" onClick={handleOpen}>
                          Annuler
                        </ButtonDefault>
                      </DialogFooter>
                    </Dialog>
                  </div>
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
                  <DialogUpdatePassword />
                  {/* <div className="mt-5 mb-5">
                    <ButtonDefault variant="secondary">
                      Modifier mot de passe
                    </ButtonDefault>
                  </div> */}

                  <ButtonDefault type="submit">
                    Valider les modifications
                  </ButtonDefault>
                </form>
                <DialogDeleteUser handleDelete={handleDelete} />
              </div>
            </>
          </div>
        ))}
    </>
  );
}
