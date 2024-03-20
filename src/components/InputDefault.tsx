import { Input } from '@material-tailwind/react';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

type InputDefaultProps<T extends FieldValues> = {
  label: string;
  name: Path<T>;
  type: string;
  register: UseFormRegister<T>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors?: any;
};

export function InputDefault<T extends FieldValues>({
  label,
  name,
  type,
  register,
  errors
}: InputDefaultProps<T>) {
  return (
    <div className="w-72">
      <Input
        {...register(name)}
        label={label}
        name={name}
        type={type}
        crossOrigin={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      />
      {errors && <p>{errors[name]?.message}</p>}
    </div>
  );
}
