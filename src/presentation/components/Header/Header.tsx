import React, { FC } from 'react';

import { FiChevronUp } from "react-icons/fi";
import { useDispatch } from 'react-redux';

import '../../../application/css/header.css'
import { useTypedSelector } from '../../../application/hooks/useTypedSelector';
import { AuthActionCreators } from '../../../application/redux/reducers/auth/action-creators';

interface Props {

}


const Header: FC<Props> = () => {
    const { user } = useTypedSelector(state => state.auth);
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(AuthActionCreators.logout())
    }

    return (
        <section className='header'>
            <div className="profile__icon"><p>S</p>

                <div className="profile__up"><FiChevronUp /></div>
                <div className="profile__block">
                    <div className="profile__block__top"><p>Account</p></div>
                    <div className="profile__body">
                        <p>Username</p>
                        <p>{user.email}</p>
                    </div>
                    <div className="logout__btn" onClick={logout}>
                        <a>Log Out</a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Header;