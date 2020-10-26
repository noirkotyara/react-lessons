import * as axios from 'axios';
import React from 'react';
import User from './User/User';
import cl from './Users.module.css';

const Users = (props) => {

    // if(props.usersGenerate.length === 0){
    //     props.setUsers([
    //         {
    //             id: 1,
    //             name: 'Rembo',
    //             avatar: 'img-1',
    //             country: 'Ukraine',
    //             city: 'Kyiv',
    //             lastMessage: 'Nahui Suk',
    //             statusFollow: true
    //         },
    //         {
    //             id: 2,
    //             name: 'Zorro',
    //             avatar: 'img-2',
    //             country: 'Ukraine',
    //             city: 'Kyiv',
    //             lastMessage: 'Nahui Zenechku',
    //             statusFollow: false
    //         }
    //     ]);
    // }

    if (props.usersGenerate.length === 0) {
       axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then(response => {  props.setUsers(response.data.items) });
}

    let usersGenerate = props.usersGenerate.map(user =>
        <User key={user.id}
            id={user.id}
            name={user.name}
            photos={user.photos.small}
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
            <div className={cl.usersItem}>
                {usersGenerate}
            </div>
        </>
    );
}

export default Users;