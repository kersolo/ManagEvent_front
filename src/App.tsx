import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignUpPage from './pages/SignUp/SignUpPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/inscription" element={<SignUpPage />} />
      </Routes>
    </>
  );
}

export default App;
