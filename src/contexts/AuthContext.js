import { createContext, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const AuthContext = createContext();

const initialState = {
    _id: '',
    email: '',
    accessToken: '',
};

export const AuthProvider = ({children}) => {

    const [user, setUser] = useLocalStorage('user', initialState);

    const login = (authData) => {
        setUser(authData);
    };

    const logout = ( ) => {
        setUser(initialState);
    };

    return (
        <AuthContext.Provider value={{login, logout, user}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => {
    const  authState= useContext(AuthContext);
    return authState;
};