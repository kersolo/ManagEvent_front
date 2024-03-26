import { Textarea } from "@material-tailwind/react";
import { FieldValues } from "react-hook-form";
import { TextareaDefaultProps } from "../services/types/components-types/TextareaType";

export function TextareaDefault<T extends FieldValues>({
  label,
  name,
  register,
  errors,
  value,
  defaultValue,
  className,
}: TextareaDefaultProps<T>) {
  return (
    <div className="w-96">
      <Textarea
        {...register(name)}
        label={label}
        name={name}
        value={value}
        defaultValue={defaultValue}
        className={className}
      />
      {errors && <p className="text-red-600">{errors[name]?.message}</p>}
    </div>
  );
}
