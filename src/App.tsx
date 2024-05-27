import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import NavBarAdmin from "./components/NavBar/NavBarAdmin";
import CreateUpdateEventPage from "./pages/Admin/HandleEvent/CreateUpdateEventPage";
import TaskList from "./pages/Admin/HandleTask/TaskList";
import ContactPage from "./pages/Contact/ContactPage";
import Contact from "./pages/ContctUs/Contact";
import CalendarPage from "./pages/Events/CalendarPage";
import DetailEventPage from "./pages/Events/DetailEventPage";
import EventsPage from "./pages/Events/EventsPage";
import Homepage from "./pages/Home/Homepage";
import Login from "./pages/Login/Login";
import CheckEmailPage from "./pages/Login/ResetPassword/CheckEmailPage";
import NewPasswordPage from "./pages/Login/ResetPassword/NewPasswordPage";
import ResetPassPage from "./pages/Login/ResetPassword/ResetPassPage";
import NotificationPage from "./pages/Notification/NotificationPage";
import ProfilePage from "./pages/Profil/ProfilePage";
import UpdateProfilePage from "./pages/Profil/UpdateProfilePage";
import SignUpPage from "./pages/SignUp/SignUpPage";
import Page404 from "./services/utils/Page404";
import PrivateAdminRoute from "./services/utils/PrivateAdminRoute";

export default function App() {
  // checking route path to display NavBar or NavBarAdmin
  const { pathname } = useLocation();
  const isAdminPath = new RegExp("^/admin");
  const isPanelAdmin = pathname.match(isAdminPath);
  //

  // ajouter la logique pour que ce state varie en fonction du rôle du User connecté
  const [isAdmin, setIsAdmin] = useState(true);

  return (
    <>
      {isPanelAdmin ? <NavBarAdmin /> : <NavBar isAdmin={isAdmin} />}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login/reset-pass" element={<ResetPassPage />} />
        <Route path="/login/check-email" element={<CheckEmailPage />} />
        <Route
          path="/login/new-password/:token"
          element={<NewPasswordPage />}
        />
        <Route path="/inscription" element={<SignUpPage />} />
        <Route path="/profile/:id" element={<ProfilePage />} />
        <Route path="/profile/modifications" element={<UpdateProfilePage />} />
        <Route path="/se-connecter" element={<Login />} />
        <Route path="/contactez-nous" element={<Contact />} />
        <Route element={<PrivateAdminRoute />}>
          <Route
            path="/admin/event/create-update/:eventId?"
            element={<CreateUpdateEventPage />}
          />
        </Route>
        <Route path="/admin/liste-des-taches" element={<TaskList />} />
        <Route path="*" element={<Page404 />} />
        <Route path="/NotificationPage" element={<NotificationPage />}></Route>
        <Route path="/event/detail/:id" element={<DetailEventPage />} />
        <Route path="/events" element={<EventsPage isPanelAdmin={false} />} />
        <Route
          path="/events/calendar"
          element={<CalendarPage isPanelAdmin={false} />}
        />
        <Route
          path="/admin/events"
          element={<EventsPage isPanelAdmin={true} />}
        />
        <Route
          path="/admin/events/calendar"
          element={<CalendarPage isPanelAdmin={true} />}
        />
      </Routes>
      <ReactQueryDevtools />
    </>
  );
}
