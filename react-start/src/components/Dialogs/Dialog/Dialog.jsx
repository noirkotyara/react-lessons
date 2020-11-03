import React from 'react';
import { NavLink } from 'react-router-dom';
import cl from './Dialog.module.css';


const Dialog = (props) =>{
    
    let path = '/dialogs/' + props.id;
return (
<div className={cl.dialog}>
            <span  className={cl.avatar} >{props.avatar}</span>
            <NavLink to={path} activeClassName={cl.active}>  {props.name} </NavLink></div>);
}

export default Dialog;