import { Route, Routes } from 'react-router-dom';
import ContactPage from './pages/Contact/ContactPage';
import './App.css';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/Contact" element={<ContactPage />} />
      </Routes>



    </>
  );
}

export default App;
