import { Input } from '@material-tailwind/react';

interface InputDefaultProps {
  label: string;
  name: string;
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: any;
}

export function InputDefault({
  label,
  name,
  type,
  register
}: InputDefaultProps) {
  return (
    <div className="w-72">
      <Input
        label={label}
        name={name}
        type={type}
        {...register(name)}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        crossOrigin={undefined}
      />
    </div>
  );
}
