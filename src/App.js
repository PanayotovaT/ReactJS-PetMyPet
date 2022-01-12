import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthContext } from './contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';


import Header from './components/Header/';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Create from './components/Create';
import Edit from './components/Edit';
import MyPets from './components/MyPets';
import Details from './components/Details';
import Logout from './components/Logout';
import ErrorBoundary from './components/common/ErrorBoundary';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


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


  return (
    <ErrorBoundary>
      <AuthProvider>
        <div id="container">

          <Header  /**{...userInfo}**/ />

          <main id="site-content">
            <Routes>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/home/*" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/logout" element={<Logout  /**onLogout={onLogout}**/ />} />
              <Route path="/create" element={<Create />} />
              <Route path="/edit/:petId" element={<Edit />} />
              <Route path="/my-pets" element={<MyPets />} />
              <Route path="/details/:petId" element={<Details />} />
            </Routes>

          </main>

          <footer id="site-footer">
            <p>@PetMyPet</p>
          </footer>

        </div>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
