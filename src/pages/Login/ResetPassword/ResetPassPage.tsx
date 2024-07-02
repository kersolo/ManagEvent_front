import { yupResolver } from "@hookform/resolvers/yup";
import { Spinner } from "@material-tailwind/react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import ButtonDefault from "../../../components/ButtonDefault";
import { InputDefault } from "../../../components/InputDefault";
import { postEmailToResetPassword } from "../../../services/api/auth";
import { ResetPassFormSchema } from "../../../services/schemas/ResetPasswordFormSchema";
import { ResetPasswordForm } from "../../../services/types/ResetPasswordPagesType";

export default function ResetPassPage() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm<ResetPasswordForm>({
    resolver: yupResolver(ResetPassFormSchema),
  });

  const onSubmit: SubmitHandler<ResetPasswordForm> = async (data) => {
    setIsLoading(true);
    try {
      await postEmailToResetPassword(data.email);
    } catch (error: any) {}
    setIsLoading(false);
    navigate("/login/check-email");
  };

  return (
    <div className="flex h-[calc(100vh-60px)] items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col mx-large mb-24 md:w-3/4 max-w-lg md:mx-auto border-dp px-large pt-12 pb-16"
      >
        <div className="flex flex-col justify-center items-center text-center ">
          <h1 className="h1-size mb-12">
            Réinitialisation <br /> du mot de passe
          </h1>
          <p className="mb-12">
            Un lien pour réinitialiser votre mot de passe <br />
            vous sera communiqué par mail.
          </p>
        </div>
        <InputDefault
          label={"Votre email"}
          name={"email"}
          type={"email"}
          register={register}
          errors={errors}
          onChange={() => clearErrors()}
        />

        {isLoading ? (
          <ButtonDefault
            variant="disabled"
            className="mt-small flex justify-center"
            isRipple={false}
          >
            <Spinner
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            />
          </ButtonDefault>
        ) : (
          <ButtonDefault type="submit" className="mt-small">
            Valider
          </ButtonDefault>
        )}
      </form>
    </div>
  );
}
