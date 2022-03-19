import React from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';
import Input from '../components/ui/FormItem/Input/Input';
import Password from '../components/ui/FormItem/Input/Password';

import '../../application/css/reg.css'
import useInput from '../../application/hooks/useInput';
import { AuthActionCreators } from '../../application/redux/reducers/auth/action-creators';
import { useDispatch } from 'react-redux';


const Registration = () => {
    const dispatch = useDispatch();
    
    const surname = useInput('');
    const name = useInput('');
    const username = useInput('');
    const email = useInput('');
    const password = useInput('');

    const registration = () => {
        const user = {
            surname: surname.value,
            name: name.value,
            username: username.value,
            email: email.value,
            password: password.value,
        }
        dispatch(AuthActionCreators.registration(user));
    }


    return (
        <section className='reg'>
            <div className="reg__form">
                <div className="reg__title"><p>Registration</p></div>
                <div className="reg__form__item">
                    <Input
                        icon={<BsFillPersonFill />}
                        fields={
                            {
                                type: 'text',
                                placeholder: 'Surname',
                                ...surname
                            }
                        }
                    />
                </div>
                <div className="reg__form__item">
                    <Input
                        icon={<BsFillPersonFill />}
                        fields={
                            {
                                type: 'text',
                                placeholder: 'Name',
                                ...name
                            }
                        }
                    />
                </div>
                <div className="reg__form__item">
                    <Input
                        icon={<BsFillPersonFill />}
                        fields={
                            {
                                type: 'text',
                                placeholder: 'Username',
                                ...username
                            }
                        }
                    />
                </div>
                <div className="reg__form__item">
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
                <div className="reg__form__item">
                    <Password
                        placeholder='Password'
                        {...password}
                    />
                </div>
                <div className="reg__form__btn__reg" onClick={registration}>
                    <a>
                        <p>Registration</p>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Registration;