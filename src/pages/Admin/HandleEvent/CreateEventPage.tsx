import DatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import ButtonDefault from "../../../components/ButtonDefault";
import { InputDefault } from "../../../components/InputDefault";
import { TextareaDefault } from "../../../components/TextareaDefault";

import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import { CreateEventFormType } from "../../../services/types/CreateEventPage";

const CreateEventFormSchema = yup.object({
  title: yup.string().required("Veuillez remplir ce champ"),
  startDate: yup.date().required(""),
  endDate: yup.date().required("Veuillez remplir ce champ"),
  adress: yup.string().required("Veuillez remplir ce champ"),
  description: yup.string().required("Veuillez remplir ce champ"),
});

export default function CreateEventPage() {
  const navigate = useNavigate();
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
    console.log(data);
    // post sur /events avec body = data
  };

  const [dateRange, setDateRange] = useState<(Date | null)[]>([null, null]);
  const [startDate, endDate] = dateRange;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 mx-large w-96 m-auto my-12 md:my-16"
    >
      <h1 className="h1-size mb-4">Créer un événement</h1>
      <InputDefault
        label="Nom"
        name="title"
        type="text"
        register={register}
        errors={errors}
      />

      <DatePicker
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        onChange={(update) => {
          setError("endDate", { message: "" });
          setDateRange(update);
          if (update[0] !== null && update[1] !== null) {
            setValue("startDate", update[0]);
            setValue("endDate", update[1]);
          }
        }}
        className="border-dp bg-darkBlueDP text-sm p-3"
        placeholderText="Date de début - Date de fin"
        dateFormat="dd/MM/yyyy"
      />
      {errors && (
        <small className="text-red-600 ml-small">
          {errors["endDate"]?.message}
        </small>
      )}

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
        onClick={
          () => console.log("ajout tâche")
          //open modale ajout tâche
        }
      >
        Ajouter une tâche
      </ButtonDefault>
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
