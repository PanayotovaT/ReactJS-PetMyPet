import { useNavigate } from 'react-router-dom';
import * as autService from '../../services/authServices.js';

const Login = ({
    onLogin,
}) => {
    
    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.target);

        let email = formData.get('email');
        let password= formData.get('password'); 
        console.log(email, password);

        if(email !== '' && password !== '') {
            console.log('hi');
            autService.login(email, password)
                    .then(result => {
                    console.log(result);
                    onLogin(result);
                            navigate('/home');
                }).catch(err => {
                    //TODO show notification
                    console.log(err);
                });
            // authService.login(email, password)
            //     .then((res) => {
            //         console.log('here');
            //         console.log(res);
            //         onLogin(res.email);
            //         navigate('/home');
            //     });

        }
    };



    return (
        <section id="login-page" className="login">
            <form id="login-form" onSubmit={onSubmitHandler}>
                <fieldset>
                    <legend>Login Form</legend>
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
                    <input className="button submit" type="submit" value="Login" />
                </fieldset>
            </form>
        </section>
    );
};

export default Login;