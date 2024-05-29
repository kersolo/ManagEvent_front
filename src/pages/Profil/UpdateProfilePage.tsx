import { InputDefault } from '../../components/InputDefault';
import ButtonDefault from '../../components/ButtonDefault';
import { SubmitHandler, useForm } from 'react-hook-form';
import { putPorfileUser } from '../../services/api/profile';
import { useNavigate } from 'react-router-dom';
import { DialogDeleteUser } from '../../components/Dialog/DialogDeleteUser';
import { DialogUpdatePassword } from '../../components/Dialog/DialogUpdatePassword';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { DialogUpdateAvatar } from '../../components/Dialog/DialogUpdateAvatar';
import BackPreviousPage from '../../components/BackPreviousPage';
import { getUser } from '../../services/api/user';

interface ProfileInfosPropsInterface {
  firstname: string;
  lastname: string;
  nickname: string;
  email: string;
}

export default function UpdateProfilePage() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ProfileInfosPropsInterface>();

  const {
    data: userProfile,
    isLoading,
    isError
  } = useQuery<UserWithIncludesInterface | undefined>({
    queryKey: ['userProfile'],
    queryFn: () => getUser(),
    staleTime: 0
  });

  const add = useMutation({
    mutationFn: (body: ProfileInfosPropsInterface) => putPorfileUser(body),
    onSuccess: (newUserProfile: any) => {
      const updatedTodos = [newUserProfile];

      queryClient.setQueryData(['userProfile'], updatedTodos);
    }
  });

  const onSubmit: SubmitHandler<ProfileInfosPropsInterface> = (data) => {
    const UpdateProfile = {
      firstname: data.firstname,
      lastname: data.lastname,
      nickname: data.nickname,
      email: data.email
    };
    console.log('UpdateProfile:', UpdateProfile);
    // putPorfileUser(UpdateProfile);
    add.mutate(UpdateProfile);
  };

  const handleDelete = () => {
    // deleteUser(id)
    console.log('Votre compte a bien été supprimé');
    navigate('/');
  };

  return isLoading ? (
    <p>Loader</p>
  ) : isError ? (
    <p>Une erreur s'est produite</p>
  ) : (
    <>
      <BackPreviousPage path="/profile" />

      <div className="flex flex-col items-center gap-14 mt-10 ">
        <>
          <div className="flex flex-col gap-3">
            <div className="flex justify-center mb-10 ">
              <DialogUpdateAvatar />
            </div>
            <DialogUpdatePassword />
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col justify-center gap-4"
              action=""
            >
              <InputDefault
                label="Votre Prénom"
                name="firstname"
                type="text"
                defaultValue={userProfile?.profile.firstname}
                register={register}
                errors={errors}
              />
              <InputDefault
                label="Votre Nom"
                name="lastname"
                type="text"
                defaultValue={userProfile?.profile.lastname}
                register={register}
                errors={errors}
              />
              <InputDefault
                label="Votre Pseudo"
                name="nickname"
                type="text"
                defaultValue={userProfile?.profile.nickname}
                register={register}
                errors={errors}
              />
              <InputDefault
                label="Votre email"
                name="email"
                type="email"
                defaultValue={userProfile?.email}
                register={register}
                errors={errors}
              />

              <ButtonDefault type="submit">
                Valider les modifications
              </ButtonDefault>
            </form>
            <DialogDeleteUser handleDelete={handleDelete} />
          </div>
        </>
      </div>
    </>
  );
}
