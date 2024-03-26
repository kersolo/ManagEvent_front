import { Button } from "@material-tailwind/react";
import { ButtonDefaultProps } from "../services/types/components-types/ButtonType";

// Doc Composant Bouton :

// - Le composant est conçu pour prendre toute la largeur de son parent.
//   (Pour changer sa largeur, vous pouvez par exemple le mettre dans une div avec une largeur définie)
// - Utilisez la props "variant" avec la valeur "primary", "secondary", "tertiary" ou "delete", pour appliquer l'un des 4 styles de boutons de la maquette.
// - Le composant accepte également tous les attributs html d'un <button> : onClick, type:'submit', etc...
// - Utiliser la props "className" uniquement pour les autres cas de figure.

export default function ButtonDefault({
  children,
  variant = "primary",
  className,
  type,
  onClick,
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
      fullWidth={true}
      className={`capitalize text-lg rounded-xl ${buttonTheme} ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </Button>
  );
}
