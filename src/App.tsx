import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignUpPage from './pages/SignUp/SignUpPage';

function App() {
  return (
    <div className="bg-darkBlueDP h-lvh p-10">
      <Routes>
        <Route path="/inscription" element={<SignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
