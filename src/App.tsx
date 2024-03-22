import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import NavBarAdmin from "./components/NavBar/NavBarAdmin";
import CheckEmailPage from "./pages/Login/CheckEmailPage";
import ResetPassPage from "./pages/Login/ResetPassPage";

function App() {
  // checking route path to display NavBar or NavBarAdmin
  const { pathname } = useLocation();
  const isAdminPath = new RegExp("^/admin");
  const isPanelAdmin = pathname.match(isAdminPath);
  //

  // ajouter la logique pour que ce state varie en fonction du rôle du User connecté
  const [isAdmin, setIsAdmin] = useState(false);
  ////

  return (
    <>
      {isPanelAdmin ? <NavBarAdmin /> : <NavBar isAdmin={isAdmin} />}
      <Routes>
        <Route path="/" element={""} />
        <Route path="/login/reset-pass" element={<ResetPassPage />}></Route>
        <Route path="/login/check-email" element={<CheckEmailPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
