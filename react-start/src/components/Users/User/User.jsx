import React from 'react';
import cl from './User.module.css';
import avaDefault from '../../../assets/images/zorro.jpg'
const User = (props) => {
    return (
        <>
            <div className={cl.userItem}>
                <img className={cl.avatar} src={props.user.photos.small != null ? props.user.photos.small : avaDefault} alt='ava'></img>
                <div className={cl.country}>props.country,</div>

                <div className={cl.name}>{props.user.name}</div>
                <div className={cl.city}>props.city</div>
                <div className={cl.lastMessage}>props.lastMessage</div>

<div>

    {
    props.user.followed ? 
    <button onClick={() => props.doUnfollow(props.user.id)} className={cl.statusFollow}>UNFOLLOW</button>  
    : <button onClick={() => props.doFollow(props.user.id)} className={cl.statusFollow}>FOLLOW</button> }
    
</div>
                
            </div>
        </>
    );
}

export default User;