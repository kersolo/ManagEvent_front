import { Button } from "@material-tailwind/react";
interface ButtonDefaultProps {
  children: string;
}

export default function ButtonDelete({ children }: ButtonDefaultProps) {
  return (
    <Button
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
      fullWidth={true}
      className="bg-red-500 text-white text-md hover:bg-red-700"
    >
      {children}
    </Button>
  );
}
