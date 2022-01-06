import { useNavigate } from 'react-router-dom';
import * as authService from '../../services/authServices.js';
import { AuthContext } from '../../contexts/AuthContext';
import { useContext, useEffect } from 'react';

const Logout = () => {
    const {user, logout} = useContext(AuthContext);
    const navigate  = useNavigate();
    useEffect(() =>{
        authService.onLogout(user.accessToken).then(() => {
            logout();
        navigate('/home');
        });
    }, []);
    return null;
};

export default Logout;