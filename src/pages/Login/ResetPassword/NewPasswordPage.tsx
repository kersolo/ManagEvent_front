import { yupResolver } from "@hookform/resolvers/yup";
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import ButtonDefault from "../../../components/ButtonDefault";
import { InputDefault } from "../../../components/InputDefault";
import { NewPasswordFormSchema } from "../../../services/schemas/NewPasswordFormSchema";
import {
  NewPasswordForm,
  Token,
  UserId,
} from "../../../services/types/ResetPasswordPagesType";

export default function NewPasswordPage() {
  const navigate = useNavigate();
  const { token } = useParams<Token>();
  const [isTokenValid, setIsTokenValid] = useState(true);
  const [userId, setuserId] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<NewPasswordForm>({
    resolver: yupResolver(NewPasswordFormSchema),
  });

  useEffect(() => {
    const getUserFromToken = async (token: string | undefined) => {
      try {
        const response: AxiosResponse = await axios.post("/user", {
          token: token,
        });
        const responseData: UserId = response.data;
        setuserId(responseData.id);
        setIsTokenValid(true);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log(error.status);
          console.error(error.response);
        } else {
          console.error(error);
        }
      }
    };
    getUserFromToken(token);
  }, [token]);

  const onSubmit = async () => {
    console.log("pass : ", watch("password"));
    console.log(userId);

    // A DECOMMENTER AU CABLAGE
    //
    //   const response = await axios.put(`/user/${userId}`, {
    //     password: watch("password"),
    //   });
    //   if (response.status === 200) {
    // modale ("Votre mot de passe a bien été modifié") + bouton vers page de connexion
    navigate("/login");
    //   }
    // };
  };

  return isTokenValid ? (
    <div className="flex h-[calc(100vh-60px)] items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col text-center gap-4 mx-large md:w-3/4 max-w-lg md:mx-auto border-dp px-large pt-12 pb-16"
      >
        <h1 className="h1-size mb-12">
          Entrez votre nouveau <br /> mot de passe
        </h1>

        <InputDefault
          label="Nouveau mot de passe"
          name="password"
          type="password"
          register={register}
          errors={errors}
          className="py-6"
        />
        <InputDefault
          label="Confirmer le nouveau mot de passe"
          name="confirmPassword"
          type="password"
          register={register}
          errors={errors}
          className="py-6"
        />
        <ButtonDefault type="submit" className="mt-6 mb-2">
          Valider
        </ButtonDefault>
        <ButtonDefault
          onClick={() => navigate("/Login/login")}
          variant="secondary"
        >
          Annuler
        </ButtonDefault>
      </form>
    </div>
  ) : (
    <h1 className="h1-size mt-32">
      Lien invalide. Veuillez recommencer la procédure
    </h1>
  );
}
