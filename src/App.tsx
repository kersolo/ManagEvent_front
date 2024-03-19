import { NavLink, Route, Routes } from 'react-router-dom';
import ContactPage from './pages/Contact/ContactPage';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/Contact" element={<ContactPage />} />
      </Routes>
      <nav>
        <NavLink
          to="/Contact">
          Contact
        </NavLink>
      </nav>
      <h1>Hello world !!!</h1>
    </>
  );
}

export default App;
