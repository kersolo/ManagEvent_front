import { Button } from "@material-tailwind/react";
interface ButtonProps {
  children: string;
}

export default function ButtonPrimary({ children }: ButtonProps) {
  return (
    <Button
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
      fullWidth={true}
      className="bg-darkBlueDP text-orangeDP text-md border-2 border-orangeDP hover:border-darkOrangeDP hover:text-darkOrangeDP"
    >
      {children}
    </Button>
  );
}
