import React from 'react';
import useInput from '../../application/hooks/useInput';
import Password from '../components/ui/FormItem/Input/Password';
import Input from '../components/ui/FormItem/Input/Input';

import '../../application/css/login.css'
import { MdOutlineEmail } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { AuthActionCreators } from '../../application/redux/reducers/auth/action-creators';

const Login = () => {
    const dispatch = useDispatch();
    const email = useInput('');
    const password = useInput('');


    const login = () => {
        dispatch(AuthActionCreators.login(email.value, password.value));
    }

    return (
        <section className='login'>


            <div className="login__form">
                <div className="login__title"><p>Login</p></div>
                <div className="login__form__item">
                    <Input
                        icon={<MdOutlineEmail />}
                        fields={
                            {
                                type: 'text',
                                placeholder: 'E-mail',
                                ...email
                            }
                        }
                    />
                </div>
                <div className="login__form__item">
                    <Password
                        placeholder='Password'
                        {...password}
                    />
                </div>
                <div className="login__form__btn__log">
                    <a onClick={login}>
                        <p>Login</p>
                    </a>
                </div>
                <div className="login__form__text">
                    <p>or</p>
                </div>
                <div className="login__form__btn__reg">
                    <a href="/registration">
                        <p>Registration</p>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Login;