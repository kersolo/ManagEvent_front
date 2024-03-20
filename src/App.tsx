import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Home/Homepage';
import ContactUs from './pages/ContctUs/ContactUs';
import Login from "./pages/Login/Login"
import SignUp from './pages/SignUp/SignUp';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Se-connecter" element={<Login />} />
        <Route path="/S'inscrire" element={<SignUp />} />
        <Route path="/Contactez-nous" element={<ContactUs />} />
      </Routes>
    </>
  );
}

export default App;
