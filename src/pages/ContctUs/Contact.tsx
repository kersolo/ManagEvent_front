import { Input, Checkbox, Textarea } from "@material-tailwind/react";
import ButtonDefault from "../../components/ButtonDefault";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup"
import { useState } from "react";
import { ContactForm } from "../../services/interfaces/ContactForm";


const dataSchema = yup.object({
    nom: yup.string().required("Ce champ est obligatoire").min(1, "1 caractère minimum"),
    prenom: yup.string().required("Ce champ est obligatoire").min(1, "1 caractère minimum"),
    email: yup.string().email("Votre e-mail n'est pas valide").required("Ce champ est obligatoire"),
    message: yup.string().required("Ce champ est obligatoire").min(10, "message très court, 10 caractères minimum"),
    checkbox: yup.boolean(),
})

export default function Contact() {

    const [form, setForm] = useState<ContactForm>({
        nom: "",
        prenom: "",
        email: "",
        message: "",
        checkbox: false,
    });

    const { register, handleSubmit, formState: { errors } } = useForm<ContactForm>({
        defaultValues: form,
        resolver: yupResolver(dataSchema),
    });

    //console.log(errors);
    const onSubmit = (values: ContactForm) => {
        console.log(values);
    }

    return (
        <>
            <div className= "flex flex-col justify-items-center ">
                <div className=" mt-10">
                <form className=" p-5" onSubmit={handleSubmit(onSubmit)} >
                    <div className="sm:w-full md:w-7/12 md:mx-auto lg:w-4/12 lg:mx-auto border-2 border-orange-300 rounded p-6 mt-10">
                        <h2 className="mb-3 flex justify-center">Contactez-nous</h2>
                        <div className="mb-1 flex flex-col gap-3">
                            <Input  {...register("nom")} type="text" label="nom" name="nom" />
                            <small className="text-sm text-red-500">{errors.nom?.message}</small>
                            <Input  {...register("prenom")} type="text" label="prenom" name="prenom" />
                            <small className="text-sm text-red-500">{errors.prenom?.message}</small>
                            <Input {...register("email",)} label="Votre Email" type="email" name="email" />
                            <small className="text-sm text-red-500">{errors.email?.message}</small>
                            <Textarea  {...register("message")} label="message" name="message" />
                            <small className="text-sm text-red-500">{errors.message?.message}</small>
                        </div>
                        <Checkbox type="checkbox" {...register("checkbox")} label="Acceptez les conditions" name="checkbox" /><br />
                        <small className="text-sm text-red-500">{errors.checkbox?.message}</small>
                        <ButtonDefault type="submit">Envoyer</ButtonDefault>
                    </div>
                </form>
                </div>
               
            </div>
        </>
    )
}
