import { FieldErrors, UseFormSetError, UseFormSetValue } from "react-hook-form";
import { CreateEventFormType } from "../CreateEventPage";

export type DatePIckerDefaultPropsType = {
  errors: FieldErrors<CreateEventFormType>;
  setError: UseFormSetError<CreateEventFormType>;
  setValue: UseFormSetValue<CreateEventFormType>;
};
