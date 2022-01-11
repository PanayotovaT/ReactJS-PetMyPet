import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { useAuthContext } from '../../contexts/AuthContext';;
const Header = () => {
    const {user} = useAuthContext();
    const activeFunc = ({ isActive }) => {
        return {
            color: isActive ? 'black' : '',
            backgroundColor: isActive ? 'white' : '',
        };
    };

    let guestNavigation = (
        <div id="guest">
            <NavLink style={activeFunc} className="button" to="/login">Login</NavLink>
            <NavLink style={activeFunc} className="button" to="/register">Register</NavLink>
        </div>
    );

    let userNavigation = (
        <div id="user">
            <span>Welcome, {user.email}</span>
            <NavLink style={activeFunc} className="button" to="/my-pets">My Pets</NavLink>
            <NavLink style={activeFunc} className="button" to="/create">Add Pet</NavLink>
            <NavLink style={activeFunc} className="button" to="/logout">Logout</NavLink>
        </div>
    );

    return (
        <header id="site-header">
            <nav className="navbar">
                <section className="navbar-dashboard">
                    <Link to="/home">Dashboard</Link>

                    {   user.email
                        ? userNavigation
                        : guestNavigation
                    }

                </section>
            </nav>
        </header>
    );
};

export default Header;