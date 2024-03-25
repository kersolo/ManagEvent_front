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
        case "primary":
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
            buttonTheme = "bg-red-500 text-white hover:bg-red-700";
            break;
    }

    return (
        <Button
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            fullWidth={true}
            className={`capitalize text-md ${buttonTheme}`}
            type={type}
        >
            {children}
        </Button>
    );
}
