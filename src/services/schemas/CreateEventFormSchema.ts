import * as yup from "yup";

export const CreateEventFormSchema = yup.object({
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
