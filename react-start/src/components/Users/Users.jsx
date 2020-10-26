import * as axios from 'axios';
import React from 'react';
import User from './User/User';
import cl from './Users.module.css';

const Users = (props) => {
let getUsers = () => {
 if (props.usersGenerate.length === 0) {
       axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then(response => {  props.setUsers(response.data.items) });
}
};
   

    let usersGenerate = props.usersGenerate.map(user =>
        <User key={user.id}
            id={user.id}
            name={user.name}
            photos={user.photos}
            country='user.country'
            city='user.city'
            lastMessage='{user.lastMessage}'
            statusFollow={user.followed}
            status={user.status}
            doFollow={props.doFollow}
            doUnfollow={props.doUnfollow} />)

    return (
        <>
        
            <div className={cl.menuName}>Users.jsx</div>
            <button className={cl.butGET} onClick={getUsers}>Get your frinds out here</button>
            <div className={cl.usersItem}>
                {usersGenerate}
            </div>
        </>
    );
}

export default Users;