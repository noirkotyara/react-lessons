import React from 'react';
import cl from './User.module.css';
import avaDefault from '../../../assets/images/zorro.jpg'
import { NavLink } from 'react-router-dom';
import { usersAPI } from '../../../api/api';

const User = (props) => {
    
    return (
        <>
            <div className={cl.userItem}>
                <NavLink to={'profile/' + props.user.id}><img className={cl.avatar}
                    src={props.user.photos.small != null ? props.user.photos.small : avaDefault}
                    alt='ava'></img>
                </NavLink>

                <div className={cl.country}>props.country,</div>

                <div className={cl.name}>{props.user.name}</div>
                <div className={cl.city}>props.city</div>
                <div className={cl.lastMessage}>props.lastMessage</div>

                <div>

                    {
                        props.user.followed 
                            ? <button disabled={props.followingInProgress.some(id => id === props.user.id)} onClick={() => {
                                props.toggleFollowing(true, props.user.id);
                                usersAPI.unFollowDeleteRequest(props.user.id)
                                    .then(data => { data.resultCode === 0 && props.doUnfollow(props.user.id); 
                                        props.toggleFollowing(false, props.user.id);});
                                    
                            }} className={cl.statusFollow}>UNFOLLOW</button>
                            : <button disabled={props.followingInProgress.some(id => id === props.user.id)} onClick={() => {
                                props.toggleFollowing(true, props.user.id);
                                usersAPI.followPostRequest(props.user.id)
                                    .then(data => { data.resultCode === 0 && props.doFollow(props.user.id); 
                                        props.toggleFollowing(false, props.user.id);});
                                    
                            }} className={cl.statusFollow}>FOLLOW</button>}

                </div>

            </div>
        </>
    );
}

export default User;