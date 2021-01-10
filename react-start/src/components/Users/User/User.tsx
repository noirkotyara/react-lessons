import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import avaDefault from '../../../assets/images/zorro.jpg';
import { AppStateType } from '../../../redux/redux-store';
import { followThunk, unFollowThunk } from '../../../redux/users-reducer';
import { getFollowingInProgress } from '../../../redux/users-selectors';
import { UsersDataType } from '../../../types/types';
import cl from './User.module.css';


export const User: React.FC<PropsType> = (props) => {

    const dispatch = useDispatch()
    const followingInProgress = useSelector<AppStateType ,Array<number>>(getFollowingInProgress)

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
                        ? <button disabled={followingInProgress.some(id => id === props.user.id)} onClick={() => {
                            dispatch(unFollowThunk(props.user.id))

                        }} className={cl.statusFollow}>UNFOLLOW</button>
                        : <button disabled={followingInProgress.some(id => id === props.user.id)} onClick={() => {
                            dispatch(followThunk(props.user.id))

                        }} className={cl.statusFollow}>FOLLOW</button>}

            </div>

        </div>
    </>
    );
}


//types
type PropsType = {
    key: number
    user: UsersDataType
}
