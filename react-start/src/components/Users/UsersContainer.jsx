import React from 'react';
import { connect } from 'react-redux';
import * as axios from 'axios';
import { doFollow, doUnfollow, setCurPage, setTotalCount, setUsers, toggleFetching } from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader';


class UsersContainerClass extends React.Component {
    componentDidMount() {
        this.props.toggleFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,{
            withCredentials: true
        })
            .then(response => {
                this.props.toggleFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount)
            });

    }
    changeCurPage = (page) => {
        this.props.setCurPage(page);
        this.props.toggleFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`,{
            withCredentials: true
        })
            .then(response => {
                this.props.toggleFetching(false);
                this.props.setUsers(response.data.items)
            });
    }
    render() {
        return <>
        <Preloader isFetching={this.props.isFetching}/>
            <Users
                whatWeHave={this.props}
                changeCurPage={this.changeCurPage} />
        </>
    }
}


let mapStateToProps = (state) => {

    return {
        usersGenerate: state.usersPage.usersData,
        currentPage: state.usersPage.currentPage,
        totalCount: state.usersPage.totalCount,
        pageSize: state.usersPage.pageSize,
        isFetching: state.usersPage.isFetching
    };
}


const UsersContainer = connect(mapStateToProps, {
    doFollow,
    doUnfollow,
    setUsers,
    setCurPage,
    setTotalCount,
    toggleFetching
})(UsersContainerClass);
export default UsersContainer;