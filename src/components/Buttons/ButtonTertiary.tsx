import { Button } from "@material-tailwind/react";
interface ButtonProps {
  children: string;
}

export default function ButtonTertiary({ children }: ButtonProps) {
  return (
    <Button
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
      fullWidth={true}
      className="bg-darkBlueDP text-orangeDP text-md underline hover:bg-darkOrangeDP"
    >
      {children}
    </Button>
  );
}
