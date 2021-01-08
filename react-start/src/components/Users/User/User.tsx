import React from 'react';
import cl from './User.module.css';
import avaDefault from '../../../assets/images/zorro.jpg'
import { NavLink } from 'react-router-dom';
import { UsersDataType } from '../../../types/types';
import { PropsType } from '../Users';

const User: React.FC< OwnPropsType> = (props) => {
    return (<>
        <div className={cl.userItem}>
            <NavLink to={'profile/' + props.user.id}><img className={cl.avatar}
                src={props.user.photos.small != null ? props.user.photos.small : avaDefault}
                alt='ava'></img>
            </NavLink>

            <div className={cl.country}>{
                props.user.id % 3 === 0
                    ? <div className={cl.off}>offline</div> : <div className={cl.on}>online</div>}</div>

            <div className={cl.name}>{props.user.name}</div>
            <div className={cl.stars}></div>
            <div className={cl.lastMessage}>{props.user.status ? 'status: ' + props.user.status : '----'}</div>

            <div>
                {
                    props.user.followed
                        ? <button disabled={props.followingInProgress.some(id => id === props.user.id)} onClick={() => {
                            props.doUnfollow(props.user.id);

                        }} className={cl.statusFollow}>UNFOLLOW</button>
                        : <button disabled={props.followingInProgress.some(id => id === props.user.id)} onClick={() => {
                            props.doFollow(props.user.id);

                        }} className={cl.statusFollow}>FOLLOW</button>}

            </div>

        </div>
    </>
    );
}

export default User;


//types
type OwnPropsType = {
    user: UsersDataType
    doFollow: (id: number) => void 
    doUnfollow: (id: number) => void 
    followingInProgress: Array<number>
}