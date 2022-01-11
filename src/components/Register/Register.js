import * as authService from '../../services/authServices';
import { useContext } from 'react';
import { useAuthContext } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
const Register = () => {
    const { login } = useAuthContext();
    const navigate  = useNavigate();
    const registerSubmitHandler =(e) => {
        e.preventDefault();

        let {email, password } = Object.fromEntries(new FormData(e.currentTarget));
        authService.register(email, password)
            .then(res => {
                login(res);
                navigate('/');
            });
    };

    return (
        <section id="register-page" className="register">
            <form id="register-form" onSubmit={registerSubmitHandler} method="POST">
                <fieldset>
                    <legend>Register Form</legend>
                    <p className="field">
                        <label htmlFor="email">Email</label>
                        <span className="input">
                            <input type="text" name="email" id="email" placeholder="Email" />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="password">Password</label>
                        <span className="input">
                            <input type="password" name="password" id="password" placeholder="Password" />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="repeat-pass">Repeat Password</label>
                        <span className="input">
                            <input type="password" name="confirm-pass" id="repeat-pass" placeholder="Repeat Password" />
                        </span>
                    </p>
                    <input className="button submit" type="submit" value="Register" />
                </fieldset>
            </form>
        </section>
    );
};

export default Register;