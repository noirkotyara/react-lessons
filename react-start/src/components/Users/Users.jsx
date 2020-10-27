import * as axios from 'axios';
import React from 'react';
import User from './User/User';
import cl from './Users.module.css';

class Users extends React.Component {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => { this.props.setUsers(response.data.items) });

    }

    render() {

        return (
            <>
                <div className={cl.menuName}>Users.jsx</div>
                <div className={cl.usersItem}>
                    {this.props.usersGenerate.map(user =>
                        <User key={user.id * 2}
                            user={user}
                            doFollow={this.props.doFollow}
                            doUnfollow={this.props.doUnfollow}
                            />)}
                </div>
            </>
        );
    }
}

export default Users;

