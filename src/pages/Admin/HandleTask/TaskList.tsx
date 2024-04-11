import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPencil } from "@fortawesome/free-solid-svg-icons"

import { faEye } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./TaskList.css";
import CreateTask from "./CreateTask ";

export interface taskList {
    nom: string,
    description: string
}

export default function TaskList(handleOpen, open) {

    const [tasks, setTasks] = useState<taskList[]>([])

    const onSubmit = (values: taskList): void => {
        // console.log(values);
        setTasks([values, ...tasks]);
    }

    return (
        <>
            <h1 className=" font-bold text-center text-xl mt-10">Espace Admin </h1>
            <h2 className=" font-bold text-center text-md mt-10">Liste des taches :</h2>

            <div className=" flex justify-center  rounded-md mt-5 mb-5 relative">
                <input type="text" placeholder="Recherche par nom" className="px-10 text-black" />
                <FontAwesomeIcon title="Voir la tache" icon={faSearch} className=" absolute text-black top-1 ms-60" />
            </div>

            <CreateTask onSubmit={onSubmit} handleOpen={handleOpen} open={open} />
            {tasks.length ? (<div className="text-white mt-5">

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
            </div>) : (<p className="text-center text-md mt-10 text-orangeDP ">Aucune tache pour l'instant</p>)}

        </>
    )
}
