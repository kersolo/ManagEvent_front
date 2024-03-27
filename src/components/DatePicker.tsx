import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { DatePIckerDefaultPropsType } from "../services/types/components-types/DatePickerDefault";

export default function DatePickerDefault({
  errors,
  setError,
  setValue,
}: DatePIckerDefaultPropsType) {
  const [dateRange, setDateRange] = useState<(Date | null)[]>([null, null]);
  const [startDate, endDate] = dateRange;
  return (
    <>
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
    </>
  );
}
