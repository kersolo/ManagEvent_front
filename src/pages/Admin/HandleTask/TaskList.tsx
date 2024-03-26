import { useState } from "react"
import ButtonDefault from "../../../components/ButtonDefault";
import { Link } from "react-router-dom";
import { Input, Textarea } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { faPencil } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from "react-router-dom";
import { faEye } from "@fortawesome/free-solid-svg-icons";



interface taskList {
    nom: string,
    description: string
}

const dataSchema = yup.object({
    nom: yup.string().required("Ce champ est obligatoire").min(1, "1 caractère minimum"),
    description: yup.string().required("Ce champ est obligatoire").min(1, "1 caractère minimum"),
})



export default function TaskList() {

    

    const [tasks, setTasks] = useState<taskList[]>([
        { nom: "Buvette", description: " a....." },
        { nom: "Accueil", description: " a....." },
        { nom: "Billeterie", description: " a....." }
    ])

    const { register, handleSubmit, formState: { errors } } = useForm<taskList>({
        defaultValues: {
            nom: "",
            description: "",
        },
        resolver: yupResolver(dataSchema),
    });
    //console.log(errors);
    const onSubmit = (values: taskList) => {
        console.log(values);
        setTasks([values, ...tasks]);
    }

    const navigate = useNavigate();

    return (
        <>
            <div className="text-white">
                <h2>Espace Admin </h2>
                <div>
                    <h3>Liste des taches </h3>
                    <p>Barre de recherche</p>
                </div>
                <div className=" ">
                    <h2>Création d'une tache</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="">
                        <div className="sm:w-7/12 sm:mx-auto md:w-5/12 md:mx-auto lg:w-4/12 lg:mx-auto border-2 xl:w-3/12 xl:mx-auto border-orange-300 rounded p-5">
                            <h2 className="flex justify-center">Créer une tache</h2>
                            <div className="mb-1 flex flex-col gap-1">
                                <Input {...register("nom")} type="text" label="nom" name="nom" />
                                <small className="text-sm text-red-500">{errors.nom?.message}</small>
                                <Textarea {...register("description")} label="description" name="description" />
                                <small className="text-sm text-red-500">{errors.description?.message}</small>
                            </div>
                            <div className="sm:w-8/12 sm:mx-auto md:w-7/12 md:mx-auto lg:w-6/12 lg:mx-auto ">
                                <ButtonDefault type="submit" value="Submit">Valider</ButtonDefault>
                                <ButtonDefault type="reset" value="Reset" >Annuler</ButtonDefault>
                            </div>
                        </div>
                    </form>
                   
                    <ButtonDefault  onClick={() => navigate("/admin/liste-des-taches/créer-une-tache")}>Creer</ButtonDefault>
                   
                   <Link to="/admin/liste-des-taches/créer-une-tache">Créer une tâche</Link>
                </div>
                <div className="flex justify-center ">
                    <ul className=""> {tasks.map((task, index) => (
                        <li key={index} className="flex  mt-3 items-center  border border-orange-300 px-20 p-2 gap-20 rounded-lg" >
                            <Link to="" title="">{task.nom}</Link>
                            <span className="flex gap-3 mx-auto">
                                <FontAwesomeIcon title="Voir la tache" icon={faEye} />
                                <FontAwesomeIcon title="Modifier la tache" icon={faPencil} />
                                <FontAwesomeIcon icon={faTrash} title="Supprimer la tache" />
                            </span>
                        </li>
                    ))}
                    </ul>
                </div>
                {tasks ? "bonjour" : "bonsoir"}
                <p>Aucune tache pour l'instant</p>
            </div>
        </>
    )
}
