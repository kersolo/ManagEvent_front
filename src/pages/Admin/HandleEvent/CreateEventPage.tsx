import { yupResolver } from "@hookform/resolvers/yup";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import ButtonDefault from "../../../components/ButtonDefault";
import DatePickerDefault from "../../../components/DatePicker";
import { InputDefault } from "../../../components/InputDefault";
import { TextareaDefault } from "../../../components/TextareaDefault";
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
