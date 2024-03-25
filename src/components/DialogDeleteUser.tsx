import React from 'react';
import { Dialog, DialogHeader, DialogFooter } from '@material-tailwind/react';
import ButtonDefault from './ButtonDefault';

interface DialogDeleteUserProps {
  handleDelete: () => void;
}

export function DialogDeleteUser({ handleDelete }: DialogDeleteUserProps) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <ButtonDefault variant="delete" onClick={handleOpen}>
        Supprimer mon compte
      </ButtonDefault>

      <Dialog className="bg-darkBlueDP" open={open} handler={handleOpen}>
        <DialogHeader className="text-white">
          Êtes vous sur de vouloir supprimer votre compte ?
        </DialogHeader>
        <DialogFooter className="flex flex-col gap-7">
          <ButtonDefault onClick={handleDelete}>Valider</ButtonDefault>
          <ButtonDefault variant="secondary" onClick={handleOpen}>
            Annuler
          </ButtonDefault>
        </DialogFooter>
      </Dialog>
    </>
  );
}
