import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import ButtonDefault from "../../components/ButtonDefault";
export default function ResetPassPage() {
  const navigate = useNavigate();

  type Input = {
    email: string;
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>();

  // A DECOMMENTER AU CABLAGE :

  // const postData = async ({ email }: { email: string }): Promise<void> => {
  //   try {
  //     const response = await axios.post("/auth/resetPass", {
  //       email: { email },
  //     });
  //     console.log(response);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const onSubmit: SubmitHandler<Input> = async (data) => {
    console.log(data);
    // const response = await postData(data);
    // if (response.status === succes) {
    navigate("/login/check-email");
    // }
  };

  // en attente de postData, prévoir d'afficher un spinner avec un state isLoading

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
        <label htmlFor="email" className="px-small">
          Email
        </label>
        <input
          type="email"
          className="w-full h-12 p-small border-dp bg-darkBlueDP"
          {...register("email", { required: true })}
        />
        {errors.email ? (
          <small className="text-redDP p-1">Veuillez renseigner ce champ</small>
        ) : (
          <small className="h-6"></small>
        )}
        <ButtonDefault type="submit" className="mt-small">
          Valider
        </ButtonDefault>
      </form>
    </div>
  );
}
