import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthContext } from './contexts/AuthContext';
// import * as AuthService from './services/authServices';
import Header from './components/Header/';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Create from './components/Create';
// import Edit from './components/Edit';
import MyPets from './components/MyPets';
import Details from './components/Details';
import Logout from './components/Logout';


function App() {

  // const [userInfo, setUserInfo] = useState({ isAuthenticated: false, user: '' });

  // useEffect(() => {
  //   let user = AuthService.getUser();
  //   setUserInfo({
  //     isAuthenticated: Boolean(user),
  //     user: user,
  //   });
  // }, []);

  // const onLogin =( userInfo ) => {
  //   setUserInfo({
  //     isAuthenticated: true,
  //     user: userInfo,
  //   });
  // };

  // const onLogout = ( username ) => {
  //   setUserInfo({
  //     isAuthenticated: false,
  //     user: null,
  //   });
  // };
  
  const [user, setUser] = useState({
    accessToken: null,
    email: '',
    _id: ''
  });

  const onLogin = (userInfo) => {
    setUser(userInfo);
  };

  const onLogout = () => {

  };

  return (
    <AuthContext.Provider value={user}>
    <div id="container">

      <Header email={user.email} /**{...userInfo}**/ />

      <main id="site-content">
        <Routes>
          <Route path="/home/*" element={<Home />} />
          <Route path="/login" element={<Login onLogin={onLogin} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout  /**onLogout={onLogout}**/ />} />
          <Route path="/create" element={<Create />} />
          {/* <Route path="/edit/:petId" element={<Edit />} /> */}
          <Route path="/my-pets" element={<MyPets />} />
          <Route path="/details/:petId" element={<Details />} />
        </Routes>

      </main>

      <footer id="site-footer">
        <p>@PetMyPet</p>
      </footer>

    </div>
    </AuthContext.Provider>
  );
}

export default App;
