import { yupResolver } from "@hookform/resolvers/yup";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import ButtonDefault from "../../../components/ButtonDefault";
import DatePickerDefault from "../../../components/DatePickerDefault";
import { InputDefault } from "../../../components/InputDefault";
import { TextareaDefault } from "../../../components/TextareaDefault";
import { CreateEventFormType } from "../../../services/types/CreateEventPage";

import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dialog, Input, Option, Select } from "@material-tailwind/react";
import { useState } from "react";

const CreateEventFormSchema = yup.object({
  title: yup.string().required("Veuillez remplir ce champ"),
  startDate: yup.date().required(""),
  endDate: yup.date().required("Veuillez remplir ce champ"),
  adress: yup.string().required("Veuillez remplir ce champ"),
  description: yup.string().required("Veuillez remplir ce champ"),
  tasks: yup
    .array()
    .of(
      yup.object().shape({
        id: yup.number().required(),
        name: yup.string().required(),
      })
    )
    .min(1, "Veuillez ajouter au moins une tâche"),
});

export default function CreateEventPage() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  const navigate = useNavigate();

  const [tasks, setTasks] = useState<any[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    setError,
  } = useForm<CreateEventFormType>({
    resolver: yupResolver(CreateEventFormSchema),
  });

  const onSubmit = (data: CreateEventFormType) => {
    console.log(tasks);
    setValue("tasks", tasks);
    console.log(data);
    // post sur /events avec body = data
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 mx-large w-80 sm:w-96 m-auto my-12 md:my-16"
    >
      <h1 className="h1-size mb-4">Créer un événement</h1>
      <InputDefault
        label="Nom"
        name="title"
        type="text"
        register={register}
        errors={errors}
      />
      <DatePickerDefault
        errors={errors}
        setError={setError}
        setValue={setValue}
      />
      <InputDefault
        label="Adresse"
        name="adress"
        type="text"
        register={register}
        errors={errors}
      />
      <TextareaDefault
        label="Description"
        name="description"
        register={register}
        errors={errors}
      />
      <p>Aucune tâche associée à cet événement</p>
      <ButtonDefault
        variant="tertiary"
        className="mb-6"
        onClick={handleOpen}
        //open modale ajout tâche
      >
        Ajouter une tâche
      </ButtonDefault>
      <Dialog open={open} handler={handleOpen} size="xs" className="rounded-xl">
        <form className="flex flex-col gap-4 bg-darkBlueDP border-dp p-large text-white">
          <div className="flex justify-end">
            <FontAwesomeIcon
              icon={faXmark}
              className="hover:cursor-pointer"
              onClick={handleOpen}
            />
          </div>
          <h2 className="h2-size text-center mb-4">
            Ajout d'une tâche à l'événement
          </h2>
          <Select label="Choisir une tache" className="text-white">
            <Option>Task 1</Option>
            <Option>Task 2</Option>
          </Select>
          <Input
            type="number"
            label="Choisir un nombre de bénévoles nécessaires"
            onFocus={(e) => (e.target.value = "1")}
            min={1}
            className="bg-darkBlueDP border-dp text-white p-2 "
          />
          <div className="flex flex-col gap-4 my-8">
            <ButtonDefault
              onClick={() => {
                const newTask = { name: "task1", volunteersNeeded: 3 };
                setTasks([...tasks, newTask]);
                console.log(tasks);
                handleOpen();
              }}
            >
              Valider
            </ButtonDefault>
            <ButtonDefault variant="secondary" onClick={handleOpen}>
              Annuler
            </ButtonDefault>
          </div>
        </form>
      </Dialog>
      <ButtonDefault type="submit" variant="primary">
        Valider
      </ButtonDefault>
      <ButtonDefault
        onClick={() => navigate("/admin/events")}
        variant="secondary"
      >
        Annuler
      </ButtonDefault>
    </form>
  );
}
