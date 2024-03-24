import { Input, Checkbox, Typography } from "@material-tailwind/react";
import ButtonDefault from "../../components/ButtonDefault";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup"
import { useState } from "react";
import { LoginForm } from "../../services/interfaces/LoginForm";



const dataSchema = yup.object({
    email: yup.string().email("Votre e-mail n'est pas valide").required("Ce champ est obligatoire"),
    password: yup.string()
        .required()
        .min(8, "Ve mot de passe doit contenir minimum 8 caractères")
        .matches(RegExp('(.*[a-z].*)'), 'Votre mot de passe doit contenir au moins une miniscule')
        .matches(RegExp('(.*[A-Z].*)'), 'Votre mot de passe doit contenir au moins une majuscule')
        .matches(RegExp('(.*\\d.*)'), 'Votre mot de passe doit contenir au moins un chiffre')
        .matches(RegExp('[!@#$%^&*(),.?":{}|<>]'), 'Votre mot de passe doit contenir au moins un caracteère special !@#$%^&*(),.?":{}|<>'),
    checkbox: yup.boolean(),
})

export default function Login() {

    const [form, setForm] = useState<LoginForm>({
        email: "",
        password: "",
        checkbox: false
    });


    const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>({
        defaultValues: form,
        resolver: yupResolver(dataSchema),
    });

    //console.log(errors);
    const onSubmit = (values: LoginForm) => {
        console.log(values);
    }

    return (
        <>
            <div className="">
                <form className=" p-5" onSubmit={handleSubmit(onSubmit)} >
                    <div className="sm:w-full md:w-4/5 md:mx-auto lg:w-3/5 lg:mx-auto xl:w-2/5 xl:mx-auto xxl:w-1/5 xxl:mx-auto border-2 border-orange-300 rounded p-6">
                        <h2 className="mb-3 flex justify-center">Connexion</h2>
                        <div className="mb-1 flex flex-col gap-3">
                            <Input {...register("email",)} label="Votre Email" type="email" name="email" />
                            <small className="text-sm text-red-500">{errors.email?.message}</small>
                            <Input  {...register("password")} type="password" label="Mot de passe" name="mot de passe" />
                            <small className="text-sm text-red-500">{errors.password?.message}</small>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-1">
                            <div className="">
                                <Checkbox type="checkbox"  {...register("checkbox")} label="Se souvenir de moi" name="checkbox" /><br />
                                <small className="text-sm text-red-500">{errors.checkbox?.message}</small>
                            </div>
                            <div className=" mb-3">
                                <Link to="" className="font-medium text-gray-900">  Mot de passe oublié? </Link>
                            </div>
                        </div>
                        <ButtonDefault type="submit">Se connecter</ButtonDefault>
                        <div>
                            <Typography color="gray" className="mt-4 text-center font-normal">
                                Vous n'avez pas de compte?
                                <Link to="" className="font-medium text-gray-900">Inscrivez-vous</Link>
                            </Typography>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
