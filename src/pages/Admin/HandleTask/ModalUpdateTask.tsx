import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Task } from './TaskList';
import { Dialog, DialogBody, DialogHeader, Textarea } from '@material-tailwind/react';
import ButtonDefault from '../../../components/ButtonDefault';
import { InputDefault } from '../../../components/InputDefault';

interface ModalUpdateTaskProps {
    defaultValues?: Task;
    onSubmit: (data: Task) => void;
    isModalOpen: boolean;
    openModal: (task: Task) => void;
    closeModal: () => void;
}

const dataSchema = yup.object({
    nom: yup.string().required("Ce champ est obligatoire").min(1, "1 caractère minimum"),
    description: yup.string().required("Ce champ est obligatoire").min(1, "1 caractère minimum"),
})


const ModalUpdateTask: React.FC<ModalUpdateTaskProps> = ({ defaultValues, onSubmit, isModalOpen, openModal, closeModal }) => {
    const { register, handleSubmit, formState: { errors } } = useForm<Task>({
        resolver: yupResolver(dataSchema),
        defaultValues
    });

    const onSubmitHandler: SubmitHandler<Task> = (data) => {
        onSubmit(data);
    };

    return (
        <>
            <Dialog
                className="gap-3"
                open={isModalOpen}
                handler={openModal}
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0.9, y: -100 },
                }}
            >
                <DialogHeader> <h1 className="mx-auto text-white mt-3 text-xl font-bold">Modifier une tâche</h1></DialogHeader>
                <DialogBody >
                    <form onSubmit={handleSubmit(onSubmitHandler)} className=" gap-3">
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
                            <ButtonDefault type="submit" value="submit" className="mb-3">Valider</ButtonDefault>
                        </div>
                    </form>
                    <ButtonDefault type="reset" value="reset" onClick={closeModal}>Fermer</ButtonDefault>
                </DialogBody>
            </Dialog>
        </>
    );
};

export default ModalUpdateTask;


