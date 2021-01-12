import React from 'react';
import { NavLink } from 'react-router-dom';
import { DataType } from '../../../api/api';
import cl from './Dialog.module.css';


const Dialog: React.FC<{user: DataType}> = ({user}) => {
    let path = '/dialogs/' + user.id
    return (
        <div className={cl.dialog}>
            <span> <img className={cl.avatar} src={user.photos.small || ''} alt='ava' /> </span>
            <div>  {user.userName} </div>
            </div>);
}

export default Dialog;