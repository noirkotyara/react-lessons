import React from 'react';
import { NavLink } from 'react-router-dom';
import cl from './Header.module.css';
import logo from './../../assets/startPage/logo2.jpg';
import { initialStateType } from '../../redux/authMe';
import { MapDispatchToProps } from './HeaderContainer';


type PropsType = {
    isAuthMe: boolean
}

const Header: React.FC<PropsType & MapDispatchToProps> =  (props) => {
    return (<>
        <header className={cl.header}>
            <div className={cl.loginPhrase}>
                {props.isAuthMe
                    ? <div onClick={props.logout} className={cl.userLogin}>Click to logOut </div>
                    : <div className={cl.logIn}><NavLink  to='login/'><div>Log In</div> </NavLink></div>
                }
            </div>
            <div className={cl.name}>HellDream</div>
            <div><img className={cl.logo} src={logo} alt="logo" /></div>

        </header>
    </>
    );
}

export default Header;