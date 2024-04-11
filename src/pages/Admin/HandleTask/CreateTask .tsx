import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import {
  Dialog,
  DialogHeader,
  DialogBody,

  Input,
  Textarea,
} from "@material-tailwind/react";
import { useState } from "react";
import { taskList } from "./TaskList";
import ButtonDefault from "../../../components/ButtonDefault";

interface PropTask {
  onSubmit: (values: taskList) => void;
}

const dataSchema = yup.object({
  nom: yup.string().required("Ce champ est obligatoire").min(1, "1 caractère minimum"),
  description: yup.string().required("Ce champ est obligatoire").min(1, "1 caractère minimum"),
})

export default function CreateTask(props: PropTask) {


  const { onSubmit } = props;
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  const [defaultValues] = useState<taskList>(
    {
      nom: "",
      description: "",
    }
  )

  const { register, handleSubmit, formState: { errors } } = useForm<taskList>({
    defaultValues,
    resolver: yupResolver(dataSchema),
  });
  //console.log(errors);

  return (

    <div className="mt-10 sm:w-6/12 md:w-5/12 lg:w-4/12 xl:w-3/12 mx-auto" >
      <ButtonDefault onClick={handleOpen} >
        Créer
      </ButtonDefault>
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader>Its a simple dialog.</DialogHeader>
        <DialogBody >
          <form onSubmit={handleSubmit(onSubmit)} className=" gap-3">
            <div className="">
              <h2 className="">Créer une tache</h2>
              <div className="">
                <Input {...register("nom")} type="text" label="nom" name="nom" />
                <small className="text-sm text-red-500">{errors.nom?.message}</small>
                <Textarea {...register("description")} label="description" name="description" />
                <small className="text-sm text-red-500">{errors.description?.message}</small>
              </div>
              <div>
                <ButtonDefault type="submit" value="Submit" className="mb-3" /*onClick={handleOpen}*/ >Valider</ButtonDefault>
                <ButtonDefault type="reset" value="Reset" /*onClick={handleOpen}*/  >Annuler</ButtonDefault>
              </div>
            </div>
          </form>
        </DialogBody>
      </Dialog>

    </div>

  )
}
