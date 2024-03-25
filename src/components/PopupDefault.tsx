
import React from "react";
import {Dialog,DialogHeader,DialogBody,} from "@material-tailwind/react";
import ButtonDefault from "./ButtonDefault";

interface PopupProps {
  buttonText: string;
  dialogTitle: string;
  dialogBody: string;
}
 
  const PopupDefault = ({buttonText, dialogTitle, dialogBody}: PopupProps) => {
  const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => setOpen(!open);
 
  return (
    <>
      <ButtonDefault onClick={handleOpen}>
        {buttonText}
      </ButtonDefault>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>{dialogTitle}</DialogHeader>
        <DialogBody>{dialogBody}</DialogBody>
        
      </Dialog>
    </>
  );
}