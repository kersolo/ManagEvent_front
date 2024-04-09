import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import NavBarAdmin from "./components/NavBar/NavBarAdmin";
import ContactPage from "./pages/Contact/ContactPage";
import CheckEmailPage from "./pages/Login/CheckEmailPage";
import ResetPassPage from "./pages/Login/ResetPassPage";
import UpdateProfilePage from "./pages/Profil/UpdateProfilePage";
import SignUpPage, { NewUserProps } from "./pages/SignUp/SignUpPage";
import Login from "./pages/Login/Login"
import Contact from './pages/ContctUs/Contact';
import Homepage from './pages/Home/Homepage';

import { getUsers } from "./services/api/user";

import TaskList from "./pages/Admin/HandleTask/TaskList";

export default function App() {
    // checking route path to display NavBar or NavBarAdmin
    const { pathname } = useLocation();
    const isAdminPath = new RegExp("^/admin");
    const isPanelAdmin = pathname.match(isAdminPath);
    //

    // ajouter la logique pour que ce state varie en fonction du rôle du User connecté
    const [isAdmin] = useState(false);

   


    const [users, setUsers] = useState<NewUserProps[] | undefined>([]);

    function handleSubmitUser(newUser: NewUserProps): void {
        setUsers([...(users as []), newUser]);
    }

    useEffect(() => {
        const loadUser = async () => {
            const response = await getUsers();
            setUsers(response);
        };
        loadUser();
    }, []);

    return (
        <>
            {isPanelAdmin ? <NavBarAdmin /> : <NavBar isAdmin={isAdmin} />}
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/login/reset-pass" element={<ResetPassPage />} />
                <Route path="/login/check-email" element={<CheckEmailPage />} />
                <Route path="/admin/liste-des-taches" element={<TaskList />} />
                <Route path="/admin/liste-des-taches" element={<TaskList />} /> 
                <Route
                    path="/inscription"
                    element={<SignUpPage handleSubmitUser={handleSubmitUser} />}
                />
                <Route path="/profile/modifications" element={<UpdateProfilePage />} />
                <Route path="/se-connecter" element={<Login />} />
                <Route path="/contactez-nous" element={<Contact />} />
            </Routes>
        </>
    );
}
