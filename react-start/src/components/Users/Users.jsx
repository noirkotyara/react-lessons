import * as axios from 'axios';
import React from 'react';
import User from './User/User';
import cl from './Users.module.css';

class Users extends React.Component {
    // constructor(props) {
    //     super(props);//віддаємо пропси React.Component
    //     alert('Fuck');
        
    //     //     //пропси перестають бути тим що приходить 
    //     //     //в компоненту, вони стаються властивістю об'єкту (класу Users), тож викликати їх 
    //     //     //треба через контекст this

    // }

    getUsers = () => {
        if(this.props.usersGenerate.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => { this.props.setUsers(response.data.items) });

        }
    }

    render() {//вертає JSX

        return (
            <>
                <div className={cl.menuName}>Users.jsx</div>
                <button onClick={this.getUsers}>Get friends out of here</button>
                <div className={cl.usersItem}>
                    {this.props.usersGenerate.map(user =>
                        <User key={user.id}
                            id={user.id}
                            name={user.name}
                            photos={user.photos}
                            country='user.country'
                            city='user.city'
                            lastMessage='{user.lastMessage}'
                            statusFollow={user.followed}
                            status={user.status}
                            doFollow={this.props.doFollow}
                            doUnfollow={this.props.doUnfollow} />)}
                </div>
            </>
        );
    }
}

export default Users;