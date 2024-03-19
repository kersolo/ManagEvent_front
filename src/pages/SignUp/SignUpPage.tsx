import { SubmitHandler, useForm } from 'react-hook-form';
import { InputDefault } from '../../components/InputDefault';
import { Link } from 'react-router-dom';
import { Typography } from '@material-tailwind/react';

export type Inputs = {
  email: string;
  password: string;
};

export default function SignUpPage() {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log('data:', data);

  return (
    <div className="flex flex-col items-center gap-14 mt-10 ">
      <Typography
        variant="h1"
        color="black"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        S'inscrire
      </Typography>
      <div className="border rounded-lg border-gray-800 p-6">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-center gap-6"
          action=""
          aria-label="Inscription"
        >
          <InputDefault
            label="Votre Email"
            name="email"
            type="text"
            register={register}
          />
          <InputDefault
            label="Mot de passe"
            name="password"
            type="password"
            register={register}
          />
          <InputDefault
            label="Confirmer le mot de passe"
            name="password"
            type="password"
            register={register}
          />
          {/* Le boutton sera remplacé une fois les boutons génériques créé */}
          <button type="submit">M'inscrire</button>
        </form>
        <div className="flex justify-between mt-6">
          <p>Déjà un compte ?</p>
          <Link className="text-light-blue-600" to="/connexion">
            Se connecter
          </Link>
        </div>
      </div>
    </div>
  );
}
