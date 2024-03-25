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
  className?: string;
};

export function SelectDefault<T extends FieldValues>({
  label,
  name,
  register,
  onChange,
  errors,
  value,
  defaultValue,
  className
}: SelectDefaultProps<T>) {
  return (
    <div>
      <Select
        children={undefined}
        {...(register(name), { onChange: onChange })}
        label={label}
        name={name}
        value={value}
        defaultValue={defaultValue}
        className={className}
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
      {errors && <p className="text-red-600">{errors[name]?.message}</p>}
    </div>
  );
}
