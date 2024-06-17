import {
    Dialog,
    DialogHeader,
    DialogBody,
    Textarea,
} from "@material-tailwind/react";
import ButtonDefault from "../../../components/ButtonDefault";
import { InputDefault } from "../../../components/InputDefault";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { Task } from "./TaskList";
//import { Dispatch, SetStateAction } from "react";


const dataSchema = yup.object({
    nom: yup.string().required("Ce champ est obligatoire").min(1, "1 caractère minimum"),
    description: yup.string().required("Ce champ est obligatoire").min(1, "1 caractère minimum"),
})


interface PropsTaskList {
    handleOpen: () => void,
    open: boolean,
    tasks: Task[],
    setTasks: (tasks: Task[]) => void;
    //setTasks: Dispatch<SetStateAction<Task[]>>

}


export default function ModalCreateTask(props: PropsTaskList) {

    const { handleOpen, open, tasks, setTasks } = props;
    const { register, handleSubmit, reset, formState: { errors } } =
        useForm<Task>({
            resolver: yupResolver(dataSchema),
        });

    const onSubmit = (data: Task): void => {
        const newTask = {
            nom: data.nom,
            description: data.description,
        }
        setTasks([newTask, ...tasks]);
        reset()
        handleOpen();
    }

    function cancelTask() {
        reset()
        handleOpen();
    }

    return (
        <>
            <ButtonDefault onClick={handleOpen} className="w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mx-auto">
                Créer une tâche
            </ButtonDefault>
            <Dialog
                className="gap-3"
                open={open}
                handler={handleOpen}
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0.9, y: -100 },
                }}
            >
                <DialogHeader> <h1 className="mx-auto text-white mt-3 text-xl font-bold">Créer une tache</h1></DialogHeader>
                <DialogBody >
                    <form onSubmit={handleSubmit(onSubmit)} className=" gap-3">
                        <div className="mt-5">
                            <div className="">
                                <InputDefault
                                    register={register} type="text" label="nom" name="nom" />
                                <small className="text-sm text-red-500">{errors.nom?.message}</small>
                            </div>
                            <div className="mt-4">
                                <Textarea {...register("description")}
                                    color="orange" label="description" name="description" className="text-white" />
                                <small className="text-sm text-red-500">{errors.description?.message}</small>
                            </div>
                            <div>
                                <ButtonDefault type="submit" value="submit" className="mb-3">Valider</ButtonDefault>
                                <ButtonDefault type="reset" value="reset" onClick={cancelTask}>Annuler</ButtonDefault>
                            </div>
                        </div>
                    </form>
                </DialogBody>
            </Dialog>
        </>
    )
}
