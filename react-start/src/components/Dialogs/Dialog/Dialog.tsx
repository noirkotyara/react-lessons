import React from 'react';
import { NavLink } from 'react-router-dom';
import { DialogsUsersDataType } from '../../../redux/messages-reducer';
import cl from './Dialog.module.css';


const Dialog: React.FC<DialogsUsersDataType> = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={cl.dialog}>
            <span> <img className={cl.avatar} src={props.ava} alt='ava' /> </span>
            <NavLink to={path} activeClassName={cl.active}>  {props.name} </NavLink></div>);
}

export default Dialog;