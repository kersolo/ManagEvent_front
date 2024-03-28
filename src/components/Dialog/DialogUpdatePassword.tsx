import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Dialog, DialogHeader, DialogBody } from '@material-tailwind/react';
import ButtonDefault from '../ButtonDefault';
import { InputDefault } from '../InputDefault';
import { getUsersId } from '../../services/api/user';
import close_icon from '../../assets/close_icon.svg';

export type Inputs = {
  actualPassword: string;
  newPassword: string;
  confirmNewPassword: string;
};
export type UserProps = {
  id: number;
  email: string;
  password: string;
  role: string;
};

export function DialogUpdatePassword() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<UserProps[] | undefined>([]);
  const handleOpen = () => setOpen(!open);

  useEffect(() => {
    const loadUser = async () => {
      const response = await getUsersId();
      setUser(response);
    };
    loadUser();
  }, []);

  const userPassword = user?.map((user) => user.password);
  const goodPassword = userPassword && userPassword[0];

  const schema = yup
    .object({
      actualPassword: yup
        .string()
        .required('Le mot de passe est requis')
        .oneOf([goodPassword!], "Ceci n'est pas votre mot de passe actuel"),
      newPassword: yup
        .string()
        .required('Le mot de passe est requis')
        .min(8, 'Le mot de passe doit contenir au moins 8 caractères')
        .matches(
          RegExp('(.*[a-z].*)'),
          'Votre mot de passe doit contenir au moins une miniscule'
        )
        .matches(
          RegExp('(.*[A-Z].*)'),
          'Votre mot de passe doit contenir au moins une majuscule'
        )
        .matches(
          RegExp('(.*\\d.*)'),
          'Votre mot de passe doit contenir au moins un chiffre'
        )
        .matches(
          RegExp('[!@#$%^&*(),.?":{}|<>]'),
          'Votre mot de passe doit contenir au moins un caracteère special'
        ),
      confirmNewPassword: yup
        .string()
        .required('La confirmation du mot de passe est requise')
        .oneOf([yup.ref('newPassword')], 'Le mot de passe ne correspond pas')
        .matches(
          RegExp('(.*[a-z].*)'),
          'Votre mot de passe doit contenir au moins une miniscule'
        )
        .matches(
          RegExp('(.*[A-Z].*)'),
          'Votre mot de passe doit contenir au moins une majuscule'
        )
        .matches(
          RegExp('(.*\\d.*)'),
          'Votre mot de passe doit contenir au moins un chiffre'
        )
        .matches(
          RegExp('[!@#$%^&*(),.?":{}|<>]'),
          'Votre mot de passe doit contenir au moins un caracteère special'
        )
    })

    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<Inputs>({
    resolver: yupResolver(schema)
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (goodPassword === data.actualPassword) {
      const newPassword = {
        password: data.newPassword
      };
      console.log('data:', newPassword);
    }

    // postUser(newPassword);
    handleOpen();
  };

  const handleResetForm = () => {
    reset();
    handleOpen();
  };

  return (
    <>
      <ButtonDefault
        className="mt-5 mb-5"
        variant="secondary"
        onClick={handleOpen}
      >
        Modifier mot de passe
      </ButtonDefault>

      <Dialog open={open} handler={handleResetForm}>
        <button onClick={handleOpen} className="flex justify-end mr-3 mt-3">
          <img src={close_icon} alt="" />
        </button>
        <div className="flex flex-col items-center gap-6">
          <DialogHeader>Modifier mot de passe</DialogHeader>
          <DialogBody>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col justify-center gap-6 w-72"
              action=""
              aria-label="Inscription"
            >
              <InputDefault
                label="Mot de passe actuel"
                name="actualPassword"
                type="password"
                register={register}
                errors={errors}
              />
              <InputDefault
                label="Nouveau mot de passe"
                name="newPassword"
                type="password"
                register={register}
                errors={errors}
              />
              <InputDefault
                label="Confirmer le nouveau mot de passe"
                name="confirmNewPassword"
                type="password"
                register={register}
                errors={errors}
              />
              <ButtonDefault type="submit">Valider</ButtonDefault>
              <ButtonDefault variant="secondary" onClick={handleResetForm}>
                Annuler
              </ButtonDefault>
            </form>
          </DialogBody>
        </div>
      </Dialog>
    </>
  );
}
