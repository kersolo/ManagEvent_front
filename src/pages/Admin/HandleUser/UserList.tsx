
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faPencil } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react";
import ButtonDefault from "../../../components/ButtonDefault";
import { Dialog, DialogBody, DialogHeader, Input } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


enum UserRoleEnum {
    volunteer = "Volunteer",
    admin = "admin",
    superAdmin = "superAdmin",
}

const dataSchema = yup.object({
    firstname: yup.string().required("Ce champ est obligatoire").min(1, "1 caractère minimum"),
    lastname: yup.string().required("Ce champ est obligatoire").min(1, "1 caractère minimum"),
    nickname: yup.string().required("Ce champ est obligatoire").min(1, "1 caractère minimum")
})

export interface User {
    firstname: string,
    lastname: string,
    nickname: string,
    role?: UserRoleEnum,
    avatarPath?: string
}

export default function UserList() {

    // const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(!open);
    }
    // }
    const [users, setUsers] = useState<User[]>([
        {
            firstname: 'Al',
            lastname: 'Pacino',
            nickname: 'Corleone',

        },
        {
            firstname: 'Tupac',
            lastname: 'Shahur',
            nickname: '2 Pac',

        }
    ]);


        const { register, handleSubmit, reset, formState: { errors } } =
        useForm<User>({
        resolver: yupResolver(dataSchema),
        });
    
        const onSubmit = (data: User): void => {
            console.log('A soumettre')
            reset()
        }
    
    function cancelUpdate() {
        reset()
        handleOpen();
    }
    /*   useEffect(() => {
           const loadUsers = async () => {
               const response = await getUser();
               setUsers(response);
           };
           loadUsers();
       }, []); */

    return (
        <>
            <h1 className=" font-bold text-center text-xl mt-10">Espace Admin </h1>
            <h2 className=" font-bold text-center text-md mt-10">Liste des Utilisateurs :</h2>
            <div className=" flex justify-center  rounded-md mt-5 mb-5 relative">
                <input type="text" placeholder="Recherche par nom" className="px-10 text-black" />
                <FontAwesomeIcon title="Voir la tache" icon={faSearch} className=" absolute text-black top-1 ms-60" />
            </div>
            {/*-------------------*/}
            {users.length ? (<div className="text-white mt-5">
                <div className="flex justify-center">
                    <ul className=""> {users.map((user, index) => (
                        <div key={index} className="flex mt-3 items-center  border border-orange-300 p-2 gap-1 rounded-lg " >
                            <div className=" ms-0  mx-20 px-10">
                                <Link to="" title="">{user.firstname} {user.lastname}<br />{user.nickname}</Link>
                            </div>
                            <div className="flex gap-5 mx-auto me-0 px-3">
                                {/*{user.role}*/}
                                <FontAwesomeIcon title="Modifier l'utilisateur" icon={faPencil} onClick={handleOpen} className="cursor-pointer" />
                            </div>
                        </div>
                    ))}
                    </ul>
                </div>
            </div>) : (<p className="text-center text-md mt-10 text-orangeDP ">Aucun Utilisateur inscrit</p>)}
            {/**  ---------Modale -------------------------------------- */}
            <Dialog
                className="gap-3"
                open={open}
                handler={handleOpen}
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0.9, y: -100 },
                }}
            >
                <DialogHeader>  <h1 className="mx-auto text-white mt-3 text-xl font-bold">Modifier un utilisateur</h1></DialogHeader>
                <DialogBody >
                    <form onSubmit={handleSubmit(onSubmit)} className=" gap-3">
                        <div className="">
                            <div className="mb-3">
                                <Input type="text" label="nom" name="firstname" />
                                <small className="text-sm text-red-500">{errors.firstname?.message}</small>
                            </div>
                            <div className=" mb-3">
                                <Input type="text" label="prenom" name="lastname" />
                                <small className="text-sm text-red-500">{errors.lastname?.message}</small>
                            </div>
                            <div className=" mb-3">
                                <Input type="text" label="pseudonyme" name="nickname" />
                                <small className="text-sm text-red-500">{errors.nickname?.message}</small>
                            </div>
                            <div>
                                <ButtonDefault type="submit" value="submit" className="mb-3">Valider</ButtonDefault>
                                <ButtonDefault type="reset" value="reset" className="" onClick={cancelUpdate}>Annuler</ButtonDefault>
                            </div>
                        </div>
                    </form>
                </DialogBody>
            </Dialog>
        </>
    )
}


