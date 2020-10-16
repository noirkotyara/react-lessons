import React from 'react';
import cl from './Friends.module.css';


const Friends = (props) => {

    return (
        <div className={cl.friend}>
            <div className={cl.avatar}></div>
            <div className={cl.name}>{props.name}</div>
        </div>
    );
}

export default Friends;

/* <img src={props.avatar} className={cl.avatar} alt='avatar'></img> */ 