import { Input, Checkbox, Typography } from "@material-tailwind/react";
import ButtonDefault from "../../components/ButtonDefault";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";


export default function Login() {

    const { register, handleSubmit, /*formState: { errors } */} = useForm({
        defaultValues: {
            email: '',
            password:''
        }
    });

   // console.log(errors);
   const onSubmit = (values)=> {
        console.log(values);
    }

    return (
        <>
            <div className="flex justify-center mt-10">Login</div>
            <div>
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 mx-auto" onSubmit={handleSubmit(onSubmit)} >
                    <div className="mb-1 flex flex-col gap-6 ">
                        <Input {... register("email")} label="Votre Email" type="email" name="email"/>
                        <Input {... register("password")}  label="Mot de passe" type="password" name="mot de passe"/>
                    </div>
                    <div className="mb-1 flex flex-col m-auto">
                        <Checkbox label="Se souvenir de moi"/>
                        <Link to="" className="font-medium text-gray-900">  Mot de passe oublié? </Link>         
                    </div>
                  

                    <ButtonDefault type="submit">
                        Se connecter
                    </ButtonDefault>
                    <div>
                        <Typography color="gray" className="mt-4 text-center font-normal">
                            Vous n'avez pas de compte?
                            <Link to="" className="font-medium text-gray-900">
                                Inscrivez-vous
                            </Link>
                        </Typography>
                    </div>

                </form>
            </div>
        </>
    )
}
