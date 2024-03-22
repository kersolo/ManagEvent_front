import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignUpPage, { NewUserProps } from './pages/SignUp/SignUpPage';
import { useEffect, useState } from 'react';
import { getUsers } from './services/api/user';
import UpdateProfilePage from './pages/Profil/UpdateProfilePage';

function App() {
  const [users, setUsers] = useState<NewUserProps[] | undefined>([]);

  function handleSubmitUser(newUser: NewUserProps): void {
    setUsers([...(users as []), newUser]);
  }

  useEffect(() => {
    const loadUser = async () => {
      const response = await getUsers();
      setUsers(response);
    };
    loadUser();
  }, []);

  return (
    <div>
      <Routes>
        <Route
          path="/inscription"
          element={<SignUpPage handleSubmitUser={handleSubmitUser} />}
        />
        <Route path="/profile/modifications" element={<UpdateProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
