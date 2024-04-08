import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { InputDefault } from '../../components/InputDefault';
import { Link } from 'react-router-dom';
import { Typography } from '@material-tailwind/react';
import ButtonDefault from '../../components/ButtonDefault';
import { PopupDefault } from  '../../components/PopupDefault';
import {Dialog,DialogHeader,DialogBody,} from "@material-tailwind/react";
import { useState } from 'react';
import React from 'react';

export type NewUserProps = {
  email: string;
  password: string;
  role: string;
};
export type Inputs = {
  email: string;
  password: string;
  confirmPassword: string;
};
interface SignUpPageProps {
  handleSubmitUser: (newUser: NewUserProps) => void;
}

const schema = yup
  .object({
    email: yup
      .string()
      .required("L'email est requis")
      .email('email non valide'),
    password: yup
      .string()
      .required('Le mot de passe est requis')
      .min(8, 'Le mot de passe doit contenir au moins 8 caractères'),
    confirmPassword: yup
      .string()
      .required('La confirmation du mot de passe est requise')
      .oneOf([yup.ref('password')], 'Le mot de passe ne correspond pas')
  })

  .required();

export default function SignUpPage({ handleSubmitUser }: SignUpPageProps) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>({
    resolver: yupResolver(schema)
  });

// state d'ouverture de la modale
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(!open)
  }
// fonction de validation du formulaire
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (!data.email) {
      return;
    }
  
    const newUser = {
      email: data.email,
      password: data.password,
      role: 'volunteer'
    };
    console.log('data:', newUser);
  
    handleSubmitUser(newUser);
    setOpen(true)
  };



  return (

    <div className="flex flex-col items-center gap-14 mt-10 ">
      <Typography variant="h1" color="black">
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
            errors={errors}
          />
          <InputDefault
            label="Mot de passe"
            name="password"
            type="password"
            register={register}
            errors={errors}
          />
          <InputDefault
            label="Confirmer le mot de passe"
            name="confirmPassword"
            type="password"
            register={register}
            errors={errors}
          />

          {/* bouton d'affichage de la modale  */}
          <ButtonDefault type="submit">
            M'inscrire
      </ButtonDefault>
          {/*Modale d'information aprés inscription */}
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Validation de l'inscription</DialogHeader>
        <DialogBody>Votre inscription à été pris en compte. Consulter vos emails pour finaliser l'inscription. </DialogBody>
      </Dialog>
        
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


