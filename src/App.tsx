import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import NavBarAdmin from "./components/NavBar/NavBarAdmin";
import CreateUpdateEventPage from "./pages/Admin/HandleEvent/CreateUpdateEventPage";
import ContactPage from "./pages/Contact/ContactPage";
import CheckEmailPage from "./pages/Login/ResetPassword/CheckEmailPage";
import NewPasswordPage from "./pages/Login/ResetPassword/NewPasswordPage";
import ResetPassPage from "./pages/Login/ResetPassword/ResetPassPage";
import ProfilePage from "./pages/Profil/ProfilePage";
import UpdateProfilePage from "./pages/Profil/UpdateProfilePage";
import SignUpPage, { NewUserProps } from "./pages/SignUp/SignUpPage";
import { getUsers } from "./services/api/user";
import Page404 from "./services/utils/Page404";
import PrivateAdminRoute from "./services/utils/PrivateAdminRoute";

export default function App() {
  // checking route path to display NavBar or NavBarAdmin
  const { pathname } = useLocation();
  const isAdminPath = new RegExp("^/admin");
  const isPanelAdmin = pathname.match(isAdminPath);
  //

  // ajouter la logique pour que ce state varie en fonction du rôle du User connecté
  const [isAdmin, setIsAdmin] = useState(false);
  ////

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
        <Route path="/" element={""} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login/reset-pass" element={<ResetPassPage />} />
        <Route path="/login/check-email" element={<CheckEmailPage />} />
        <Route
          path="/login/new-password/:token"
          element={<NewPasswordPage />}
        />
        <Route
          path="/inscription"
          element={<SignUpPage handleSubmitUser={handleSubmitUser} />}
        />
        <Route path="/profile/:id" element={<ProfilePage />} />
        <Route path="/profile/modifications" element={<UpdateProfilePage />} />
        <Route element={<PrivateAdminRoute />}>
          <Route
            path="/admin/event/create-update/:eventId?"
            element={<CreateUpdateEventPage />}
          />
        </Route>

        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}
