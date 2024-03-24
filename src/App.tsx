import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Home/Homepage';
import Login from "./pages/Login/Login"


function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/se-connecter" element={<Login />} />
      </Routes>
  
  );
}

export default App;
