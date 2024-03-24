import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Home/Homepage';
import Login from "./pages/Login/Login"
import Contact from './pages/ContctUs/Contact';


function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/se-connecter" element={<Login />} />
        <Route path="/contactez-nous" element={<Contact/>} />
      </Routes>
  
  );
}

export default App;
