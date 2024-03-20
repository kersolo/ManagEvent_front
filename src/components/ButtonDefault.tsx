import { Button } from "@material-tailwind/react";
import { PropsWithChildren } from "react";

type Variant = "primary" | "secondary" | "tertiary" | "delete";

type ButtonDefaultProps = PropsWithChildren<{
  variant?: Variant;
  type?: "submit";
}>;

export default function ButtonDefault({
  children,
  variant = "primary",
  type,
}: ButtonDefaultProps) {
  let buttonTheme;
  switch (variant) {
    default:
      buttonTheme = "bg-orangeDP text-darkBlueDP hover:bg-darkOrangeDP";
      break;
    case "secondary":
      buttonTheme =
        "bg-darkBlueDP text-orangeDP border-2 border-orangeDP hover:border-darkOrangeDP hover:text-darkOrangeDP";
      break;
    case "tertiary":
      buttonTheme =
        "bg-darkBlueDP text-orangeDP underline underline-offset-4 hover:bg-mediumBlueDP";
      break;
    case "delete":
      buttonTheme = "bg-redDP text-white hover:bg-darkRedDP";
      break;
  }

  return (
    <Button
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
      fullWidth={true}
      className={`capitalize text-xl ${buttonTheme}`}
      type={type}
    >
      {children}
    </Button>
  );
}
