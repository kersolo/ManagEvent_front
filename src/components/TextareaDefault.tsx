import { Textarea } from '@material-tailwind/react';

interface TextareaDefaultProps {
  label: string;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: any;
}

export function TextareaDefault({
  label,
  name,
  register
}: TextareaDefaultProps) {
  return (
    <div className="w-96">
      <Textarea
        label={label}
        name={name}
        {...register(name)}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      />
    </div>
  );
}
