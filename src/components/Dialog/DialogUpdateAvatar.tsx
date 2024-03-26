import { useEffect, useState } from 'react';

import ButtonDefault from '../ButtonDefault';
import {
  Avatar,
  Dialog,
  DialogBody,
  DialogHeader
} from '@material-tailwind/react';
import Pencil from '../../assets/pencil.svg';
import { getUserProfileId, putPorfileUser } from '../../services/api/profile';

import { SubmitHandler, useForm } from 'react-hook-form';

export type TestDialogProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  avatar_url: any;
};

export function DialogUpdateAvatar() {
  const [open, setOpen] = useState(false);

  const [avatar, setAvatar] = useState<TestDialogProps[] | undefined>([]);

  useEffect(() => {
    const loadUser = async () => {
      const response = await getUserProfileId();
      setAvatar(response);
    };
    loadUser();
  }, []);

  const userAvatar = avatar?.map((eee) => eee.avatar_url);
  const goodAvatar = userAvatar && userAvatar[0];

  const { register, handleSubmit } = useForm<TestDialogProps>({});

  const onSubmit: SubmitHandler<TestDialogProps> = (data) => {
    const file = !data.avatar_url ? data.avatar_url : data.avatar_url[0]?.name;
    const newAvatar = {
      avatar_url: file
    };
    console.log('data:', newAvatar);

    putPorfileUser(newAvatar);
  };

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <button className="flex" onClick={handleOpen}>
        <Avatar id="avatar_url" src={goodAvatar} alt="avatar" />
        <img src={Pencil} alt="" />
      </button>

      <Dialog
        className="bg-darkBlueDP p-10 flex flex-col items-center"
        open={open}
        handler={handleOpen}
      >
        <DialogHeader className="text-white">
          Veuillez Uploader votre image
        </DialogHeader>
        <DialogBody>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col justify-center gap-6 w-72"
            action=""
          >
            <input
              {...register('avatar_url')}
              type="file"
              name="avatar_url"
              id="avatar_url"
              accept="image/*"
            />

            <ButtonDefault type="submit" onClick={handleOpen}>
              Valider
            </ButtonDefault>
            <ButtonDefault variant="secondary" onClick={handleOpen}>
              Annuler
            </ButtonDefault>
          </form>
        </DialogBody>
      </Dialog>
    </>
  );
}
