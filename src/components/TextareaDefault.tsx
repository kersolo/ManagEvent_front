import { Textarea } from '@material-tailwind/react';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

type TextareaDefaultProps<T extends FieldValues> = {
  label: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors?: any;
};

export function TextareaDefault<T extends FieldValues>({
  label,
  name,
  register,
  errors
}: TextareaDefaultProps<T>) {
  return (
    <div className="w-96">
      <Textarea
        {...register(name)}
        label={label}
        name={name}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      />
      {errors && <p>{errors[name]?.message}</p>}
    </div>
  );
}
