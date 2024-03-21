import { Textarea } from '@material-tailwind/react';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

type TextareaDefaultProps<T extends FieldValues> = {
  label: string;
  name: Path<T>;
  value?: string;
  defaultValue?: string;
  register: UseFormRegister<T>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors?: any;
  className?: string;
};

export function TextareaDefault<T extends FieldValues>({
  label,
  name,
  register,
  errors,
  value,
  defaultValue,
  className
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
