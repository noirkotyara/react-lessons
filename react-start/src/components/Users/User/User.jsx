import React from 'react';
import cl from './User.module.css';

const User = (props) => {


    return (
        <>
            <div className={cl.userItem}>
                <div className={cl.avatar}>{props.avatar}</div>
                <div className={cl.country}>{props.country},</div>

                <div className={cl.name}>{props.name}</div>
                <div className={cl.city}>{props.city}</div>
                <div className={cl.lastMessage}>{props.lastMessage}</div>

<div>

    {props.statusFollow ? <button onClick={() => props.doUnfollow(props.id)} className={cl.statusFollow}>UNFOLLOW</button>  : <button onClick={() => props.doFollow(props.id)} className={cl.statusFollow}>FOLLOW</button> }
    
</div>
                
            </div>
        </>
    );
}

export default User;