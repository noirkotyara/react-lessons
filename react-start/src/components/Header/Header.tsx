import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logoutThunk } from '../../redux/authMe';
import { getAuthMe } from '../../redux/authMe-selectors';
import { AppStateType } from '../../redux/redux-store';
import logo from './../../assets/startPage/logo2.jpg';
import cl from './Header.module.css';


export const Header: React.FC<{}> = () => {

    const isAuthMe = useSelector<AppStateType, boolean>(getAuthMe)
    const dispatch = useDispatch();

    const logout = useCallback(
        () => dispatch(logoutThunk()),
        [dispatch])

    return (<>
        <header className={cl.header}>
            <div className={cl.loginPhrase}>
                {isAuthMe
                    ? <div onClick={logout} className={cl.userLogin}>Click to logOut </div>
                    : <div className={cl.logIn}><NavLink to='login/'><div>Log In</div> </NavLink></div>
                }
            </div>
            <div className={cl.name}>HellDream</div>
            <div><img className={cl.logo} src={logo} alt="logo" /></div>

        </header>
    </>
    );
}
