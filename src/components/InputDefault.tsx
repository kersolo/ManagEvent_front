import { Input } from '@material-tailwind/react';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

type InputDefaultProps<T extends FieldValues> = {
  label: string;
  name: Path<T>;
  type: string;
  value?: string;
  defaultValue?: string;
  register: UseFormRegister<T>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors?: any;
  className?: string;
};

export function InputDefault<T extends FieldValues>({
  label,
  name,
  type,
  register,
  errors,
  value,
  defaultValue,
  className
}: InputDefaultProps<T>) {
  return (
    <div>
      <Input
        {...register(name)}
        label={label}
        name={name}
        type={type}
        value={value}
        defaultValue={defaultValue}
        className={className}
      />
      {errors && <p className="text-red-600">{errors[name]?.message}</p>}
    </div>
  );
}
