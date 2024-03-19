import { Select } from '@material-tailwind/react';

interface SelectDefaultProps {
  label: string;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: any;
}

export function SelectDefault({ label, name, register }: SelectDefaultProps) {
  return (
    <div className="w-72">
      <Select
        label={label}
        name={name}
        {...register(name)}
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        children={undefined}
      >
        {/* Les options seront dans le .map */}

        {/* {datas.map((data) => (
          <>
            <Option value={data} key={data.id}>
              {data.blabla}
            </Option>
          </>
        ))} */}
      </Select>
    </div>
  );
}
