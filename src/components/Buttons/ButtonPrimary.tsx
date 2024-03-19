import { Button } from "@material-tailwind/react";
interface ButtonDefaultProps {
  children: string;
  variant?: "filled" | "outlined" | "gradient" | "text";
}

export default function ButtonPrimary({ children }: ButtonDefaultProps) {
  return (
    <Button
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
      fullWidth={true}
      className="bg-orangeDP text-darkBlueDP text-md hover:bg-darkOrangeDP"
    >
      {children}
    </Button>
  );
}
