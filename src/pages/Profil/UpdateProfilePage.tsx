import {
  Avatar,
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader
} from '@material-tailwind/react';
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
      email: data.email
    };
    console.log('UpdateProfile:', UpdateProfile);
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <Link to="/profile">
        <div className="flex pt-2">
          <img src={BackIcon} alt="" />
          <p>Retour</p>
        </div>
      </Link>
      <div className="flex flex-col items-center gap-14 mt-10 ">
        {usersProfile?.map((infos) => (
          <>
            <div className="flex">
              <Avatar id="avatar_url" src={infos.avatar_url} alt="avatar_url" />
              <button onClick={handleOpen}>
                <img src={Pencil} alt="" />
              </button>
              <Dialog open={open} handler={handleOpen}>
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                  <DialogHeader>Veuillez Uploader votre image</DialogHeader>
                  <DialogBody>
                    <input type="file" {...register('avatar_url')} />
                  </DialogBody>
                  <DialogFooter>
                    <Button
                      variant="text"
                      color="red"
                      onClick={handleOpen}
                      className="mr-1"
                    >
                      <span>Cancel</span>
                    </Button>
                    <Button
                      type="submit"
                      variant="gradient"
                      color="green"
                      onClick={handleOpen}
                    >
                      <span>Confirm</span>
                    </Button>
                  </DialogFooter>
                </form>
              </Dialog>
            </div>
            <div className="flex flex-col gap-3">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col justify-center gap-4"
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
                <div className="mt-5 mb-5">
                  <ButtonDefault variant="secondary">
                    Modifier mot de passe
                  </ButtonDefault>
                </div>

                <ButtonDefault type="submit">
                  Valider les modifications
                </ButtonDefault>
              </form>
              <ButtonDefault variant="delete">
                Supprimer mon compte
              </ButtonDefault>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
