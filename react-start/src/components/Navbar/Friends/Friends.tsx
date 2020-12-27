import React from 'react';
import { FriendsList, initialStateType } from '../../../redux/sideBar-reducer';
import cl from './Friends.module.css';

const Friends: React.FC<FriendsList> = (props) => {

    return (
        <div className={cl.friend}>
            <div className={cl.avatar}></div>
            <div className={cl.name}>{props.name}</div>
        </div>
    );
}

export default Friends;

/* <img src={props.avatar} className={cl.avatar} alt='avatar'></img> */ 