import React from 'react';
import { connect } from 'react-redux';
import * as axios from 'axios';
import { doFollow, doUnfollow, setCurPage, setTotalCount, setUsers, toggleFetching, toggleFollowing } from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader';
import { usersAPI } from '../../api/api';


class UsersContainerClass extends React.Component {
    componentDidMount() {
        this.props.toggleFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalCount(data.totalCount)
            });

    }
    changeCurPage = (page) => {
        this.props.setCurPage(page);
        this.props.toggleFetching(true);
        usersAPI.changeCurPage(page,this.props.pageSize)
            .then(data => {
                this.props.toggleFetching(false);
                this.props.setUsers(data.items)
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
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    };
}


const UsersContainer = connect(mapStateToProps, {
    doFollow,
    doUnfollow,
    setUsers,
    setCurPage,
    setTotalCount,
    toggleFetching,
    toggleFollowing
})(UsersContainerClass);
export default UsersContainer;
