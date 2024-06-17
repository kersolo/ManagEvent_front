import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faSearch, faTrash } from '@fortawesome/free-solid-svg-icons';
//import { faEye } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import ModalCreateTask from "./ModalCreateTask";
import ModalUpdateTask from "./ModalUpdateTask";

export interface Task {
    id?: number,
    nom: string,
    description: string
}

export default function TaskList({ }) {

    const [tasks, setTasks] = useState<Task[]>([
        {
            id: 1,
            nom: 'Buvette',
            description: 'Entretien de la buvette'
        },
        {
            id: 2,
            nom: 'Accueil',
            description: 'Accueillir et orienter les visiteurs'
        },
    ])

    const [selectedTask, setSelectedTask] = useState<Task | null>(null);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);
    const handleOpen = () => {
        setOpen(!open);
    }

    const handleUpdateTask = (updatedTask: Task) => {
        setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
        setSelectedTask(null);
        setIsModalOpen(false);
    };

    function deleteTask(taskId: number | null | undefined): void {
        setTasks(tasks.filter(task => task.id !== taskId))
    }

    const openModal = (task: Task) => {
        setSelectedTask(task);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedTask(null);
        setIsModalOpen(false);
    };

    return (
        <>
            <h1 className=" font-bold text-center text-xl mt-10">Espace Admin </h1>
            <h2 className=" font-bold text-center text-md mt-10">Liste des taches :</h2>
            <div className=" flex justify-center  rounded-md mt-5 mb-5 relative">
                <input type="text" placeholder="Recherche par nom" className="px-10 text-black" />
                <FontAwesomeIcon title="Voir la tache" icon={faSearch} className=" absolute text-black top-1 ms-60" />
            </div>

            <div className="mt-10 w-6/12 mx-auto" >
                <ModalCreateTask handleOpen={handleOpen} open={open} tasks={tasks} setTasks={setTasks} />
            </div>

            {tasks.length ? (<div className="text-white mt-5">
                <div className="flex justify-center">
                    <ul className=""> {tasks.map((task: Task, index: number) => (
                        <li key={index} className="flex mt-3 items-center  border border-orange-300 p-2 gap-1 rounded-lg " >
                            <div className=" w-6/12 p-1 mx-10"><Link to="" title="">{task.nom}</Link></div>
                            <div className="flex gap-5 mx-auto">
                                <FontAwesomeIcon title="Modifier la tache" icon={faPencil} onClick={() => openModal(task)} />
                                <FontAwesomeIcon icon={faTrash} title="Supprimer la tache" onClick={() => deleteTask(task.id)} className="cursor-pointer" />
                            </div>
                        </li>
                    ))}
                    </ul>
                    {isModalOpen && selectedTask && (
                        <div>
                            <div>
                                <ModalUpdateTask defaultValues={selectedTask} onSubmit={handleUpdateTask} openModal={openModal}
                                    closeModal={closeModal} isModalOpen={isModalOpen} />
                            </div>
                        </div>
                    )}
                </div>
            </div>) : (<p className="text-center text-md mt-10 text-orangeDP ">Aucune tache pour l'instant</p>)}
            {/*------------------- */}
            {/*-------------------*/}
        </>
    )
}


