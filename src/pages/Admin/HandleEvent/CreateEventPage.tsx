import { yupResolver } from "@hookform/resolvers/yup";
import "react-datepicker/dist/react-datepicker.css";
import { useFieldArray, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import ButtonDefault from "../../../components/ButtonDefault";
import DatePickerDefault from "../../../components/DatePickerDefault";
import { InputDefault } from "../../../components/InputDefault";
import { TextareaDefault } from "../../../components/TextareaDefault";
import { CreateEventFormType } from "../../../services/types/CreateEventPage";

import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dialog, Input } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getTasksNames } from "../../../services/api/task";

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
        taskName: yup.string().required(),
        volunteerNumber: yup.number().required().min(1),
      })
    )
    .min(1, "Veuillez ajouter au moins une tâche"),
});

export default function CreateEventPage() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  const { data: tasks } = useQuery({
    queryKey: ["tasks"],
    queryFn: () => getTasksNames(),
    staleTime: 0,
  });

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    setError,
    clearErrors,
  } = useForm<CreateEventFormType>({
    resolver: yupResolver(CreateEventFormSchema),
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "tasks",
  });

  const onSubmit = (data: CreateEventFormType) => {
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
      {errors && (
        <small className="text-red-600 ml-small">
          {errors.tasks?.root?.message}
        </small>
      )}
      <ButtonDefault
        variant="tertiary"
        className="mb-6"
        onClick={() => {
          append({ taskName: "", volunteerNumber: 0 });
          handleOpen();
        }}
      >
        Ajouter une tâche
      </ButtonDefault>

      <Dialog
        open={open}
        handler={() => {
          remove(fields.length - 1);
          handleOpen();
        }}
        size="xs"
        className="rounded-xl"
      >
        <form className="flex flex-col gap-4 bg-darkBlueDP border-dp p-large text-white">
          <div className="flex justify-end">
            <FontAwesomeIcon
              icon={faXmark}
              className="hover:cursor-pointer"
              onClick={() => {
                remove(fields.length - 1);
                handleOpen();
              }}
            />
          </div>
          <h2 className="h2-size text-center mb-4">
            Ajout d'une tâche à l'événement
          </h2>
          <select
            id="taskName"
            {...register(`tasks.${fields.length - 1}.taskName`)}
            className="border-dp p-2 bg-darkBlueDP"
          >
            {tasks?.map((task, index) => (
              <option key={index} value={task.name} className="capitalize">
                {task.name}
              </option>
            ))}
          </select>

          <Input
            {...register(`tasks.${fields.length - 1}.volunteerNumber`)}
            type="number"
            label="Choisir un nombre de bénévoles nécessaires"
            onFocus={(e) => (e.target.value = "1")}
            min={1}
            className="bg-darkBlueDP border-dp text-white p-2 "
          />
          <div className="flex flex-col gap-4 my-8">
            <ButtonDefault
              onClick={() => {
                handleOpen();
                clearErrors("tasks");
              }}
            >
              Valider
            </ButtonDefault>
            <ButtonDefault
              variant="secondary"
              onClick={() => {
                remove(fields.length - 1);
                handleOpen();
              }}
            >
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
