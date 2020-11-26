import React from 'react';
import { connect } from 'react-redux';
import { changeCurPageThunk, setUsersThunk, unFollowThunk, followThunk } from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalCount, getUsersData } from '../../redux/users-selectors';
import cl from './../Users/Users.module.css'
import Pagination from '../common/Pagination/Pagination';

class UsersContainerClass extends React.Component {
    componentDidMount() {
        this.props.setUsers(this.props.currentPage,this.props.pageSize);

    }
    changeCurPage = (page) => {
        this.props.setCurPage(page,this.props.pageSize);
    }
    render() {
        return <>
        <div className={cl.userPage}>Choose your friends{this.props.isFetching && <span className={cl.preloader}><Preloader/></span>}</div>
          <Pagination {...this.props} changeCurPage={this.changeCurPage} />
        {!this.props.isFetching
        && <Users
                {...this.props}
                
                isFetching={this.props.isFetching}/>}
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


export default connect(mapStateToProps, {
    doFollow: followThunk,
    doUnfollow: unFollowThunk,
    setUsers: setUsersThunk,
    setCurPage: changeCurPageThunk
})(UsersContainerClass);;
