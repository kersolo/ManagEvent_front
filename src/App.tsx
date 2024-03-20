import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Home/Homepage';
import Login from "./pages/Login/Login"
import SignUp from './pages/SignUp/SignUp';

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Se-connecter" element={<Login />} />
        <Route path="/S'inscrire" element={<SignUp />} />
   
      </Routes>
  
  );
}

export default App;
