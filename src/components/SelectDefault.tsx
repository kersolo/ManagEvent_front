import { Select } from '@material-tailwind/react';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

type SelectDefaultProps<T extends FieldValues> = {
  label: string;
  name: Path<T>;
  value?: string;
  defaultValue?: string;
  register: UseFormRegister<T>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors?: any;
};

export function SelectDefault<T extends FieldValues>({
  label,
  name,
  register,
  onChange,
  errors,
  value,
  defaultValue
}: SelectDefaultProps<T>) {
  return (
    <div className="w-72">
      <Select
        children={undefined}
        {...(register(name), { onChange: onChange })}
        label={label}
        name={name}
        value={value}
        defaultValue={defaultValue}
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        {/* Les options seront dans le .map ou children */}

        {/* {datas.map((data) => (
          <>
            <Option value={data} key={data.id}>
              {data.blabla}
            </Option>
          </>
        ))} */}
      </Select>
      {errors && <p>{errors[name]?.message}</p>}
    </div>
  );
}
