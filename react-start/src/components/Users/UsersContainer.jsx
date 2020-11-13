import React from 'react';
import { connect } from 'react-redux';
import { changeCurPageThunk, setUsersThunk, unFollowThunk, followThunk } from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalCount, getUsersData } from '../../redux/users-selectors';


class UsersContainerClass extends React.Component {
    componentDidMount() {
        this.props.setUsers(this.props.currentPage,this.props.pageSize);

    }
    changeCurPage = (page) => {
        this.props.setCurPage(page,this.props.pageSize);
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
        usersGenerate: getUsersData(state),
        currentPage: getCurrentPage(state),
        totalCount: getTotalCount(state),
        pageSize: getPageSize(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    };
}


const UsersContainer = connect(mapStateToProps, {
    doFollow: followThunk,
    doUnfollow: unFollowThunk,
    setUsers: setUsersThunk,
    setCurPage: changeCurPageThunk
})(UsersContainerClass);
export default UsersContainer;
