import { Radio } from '@material-tailwind/react';

export type RadioDefaultPropsType = {
  label: string;
  id: string;
};

export default function RadioDefault({ id, label }: RadioDefaultPropsType) {
  return (
    <div className="flex gap-10">
      <Radio id={id} name="type" label={label} />
    </div>
  );
}
