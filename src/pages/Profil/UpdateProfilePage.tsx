import { InputDefault } from '../../components/InputDefault';
import ButtonDefault from '../../components/ButtonDefault';
import { SubmitHandler, useForm } from 'react-hook-form';
import { getUserProfileId, putPorfileUser } from '../../services/api/profile';
import { useNavigate } from 'react-router-dom';
import { DialogDeleteUser } from '../../components/Dialog/DialogDeleteUser';
import { DialogUpdatePassword } from '../../components/Dialog/DialogUpdatePassword';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { DialogUpdateAvatar } from '../../components/Dialog/DialogUpdateAvatar';
import BackPreviousPage from '../../components/BackPreviousPage';

export interface ProfileInfosProps {
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
  } = useForm<ProfileInfosProps>();

  const { data: userProfile } = useQuery({
    queryKey: ['userProfile'],
    queryFn: () => getUserProfileId(),
    staleTime: 0
  });

  const add = useMutation({
    mutationFn: (body: ProfileInfosProps) => putPorfileUser(body),
    onSuccess: (newUserProfile) => {
      const updatedTodos = [newUserProfile];

      queryClient.setQueryData(['userProfile'], updatedTodos);
    }
  });

  const onSubmit: SubmitHandler<ProfileInfosProps> = (data) => {
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

  return (
    <>
      <BackPreviousPage path="/profile" />
      {userProfile?.map((infos, index) => (
        <div key={index} className="flex flex-col items-center gap-14 mt-10 ">
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
              </form>
              <DialogDeleteUser handleDelete={handleDelete} />
            </div>
          </>
        </div>
      ))}
    </>
  );
}
