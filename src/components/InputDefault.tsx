import { Input } from "@material-tailwind/react";
import { FieldValues } from "react-hook-form";
import { InputDefaultProps } from "../services/types/components-types/InputType";

export function InputDefault<T extends FieldValues>({
  label,
  name,
  type,
  register,
  errors,
  value,
  defaultValue,
  className,
  onClick,
  onChange,
}: InputDefaultProps<T>) {
  return (
    <>
      <Input
        {...register(name, { onChange: onChange })}
        label={label}
        name={name}
        type={type}
        value={value}
        defaultValue={defaultValue}
        className={className}
        onClick={onClick}
      />
      {errors && (
        <small className="text-red-600 ml-small">{errors[name]?.message}</small>
      )}
    </>
  );
}
