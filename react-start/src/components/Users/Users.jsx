import * as axios from 'axios';
import React from 'react';
import User from './User/User';
import cl from './Users.module.css';


class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.settotalCount(response.data.totalCount)
            });

    }
    changeCurPage = (page) => {
        this.props.setCurPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => { 
                this.props.setUsers(response.data.items) });
    }
    render() {
        let pagesQuantity = Math.ceil(this.props.totalCount / this.props.pageSize);
        let pA = [];
        for (let i = 1; i <= pagesQuantity; i++) {
            pA.push(i);
        }
        return (
            <>
                <div className={cl.menuName}>Users.jsx</div>

                <div className={cl.pages}>
                    {pA.map(page => {
                        return (
                            <span onClick={() => { this.changeCurPage(page) }} className={this.props.currentPage === page && cl.pageSelected}>{page} </span>
                        );
                    })}
                </div>
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

