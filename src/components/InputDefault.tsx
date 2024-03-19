import { Input } from '@material-tailwind/react';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';
// import { Inputs } from '../pages/SignUp/SignUpPage';

type InputDefaultProps<T extends FieldValues> = {
  label: string;
  name: Path<T>;
  type: string;
  register: UseFormRegister<T>;
};

export function InputDefault<T extends FieldValues>({
  label,
  name,
  type,
  register
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
    </div>
  );
}
