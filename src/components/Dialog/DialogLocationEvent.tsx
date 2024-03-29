import React from 'react';
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter
} from '@material-tailwind/react';
import close_icon from '../../assets/close_icon.svg';
import ButtonDefault from '../ButtonDefault';
import location_icon from '../../assets/location_icon.svg';

export type DialogLocationEventPropsType = {
  event: {
    title: string;
    date_start: string;
    date_end: string;
    location: string;
    description: string;
    status: string;
  };
};

export function DialogLocationEvent({ event }: DialogLocationEventPropsType) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <button type="button" onClick={handleOpen}>
        <img src={location_icon} alt="" />
      </button>
      <Dialog open={open} handler={handleOpen}>
        <button onClick={handleOpen} className="flex justify-end mr-3 mt-3">
          <img src={close_icon} alt="" />
        </button>
        <div className="flex flex-col items-center gap-6">
          <DialogHeader>{event.title}</DialogHeader>
          <DialogBody>Indiquer l'adresse complete du lieu</DialogBody>
          <DialogFooter>
            <ButtonDefault onClick={handleOpen}>
              Retour à l'évènement
            </ButtonDefault>
          </DialogFooter>
        </div>
      </Dialog>
    </>
  );
}
