import React from 'react';
import { connect } from 'react-redux';
import { changeCurPageThunk, setUsersThunk, unFollowThunk, followThunk } from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalCount, getUsersData } from '../../redux/users-selectors';
import cl from './../Users/Users.module.css'
import Pagination from '../common/Pagination/Pagination';
import { UsersDataType } from '../../types/types';
import { AppStateType } from './../../redux/redux-store';

export type MapStateToPropsType = {
    usersGenerate: Array<UsersDataType>
    currentPage: number
    totalCount: number
    pageSize: number
    isFetching: boolean
    followingInProgress: Array<number>
}

// usersGenerate, currentPage, totalCount, pageSize, isFetching
export type MapDispatchToPropsType = {
    setUsers: (currentPage: number, pageSize: number) => void
    setCurPage: (page: number, pageSize: number) => void
    doFollow: (id: number) => void 
    doUnfollow: (id: number) => void 
}
export type OwnPropsType = {
    title: string
    user: UsersDataType
}
export type PropsType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType;

// React.Component<PropsType, StateType>
class UsersContainerClass extends React.Component<PropsType> {
    componentDidMount() {
        this.props.setUsers(this.props.currentPage, this.props.pageSize);

    }
    changeCurPage = (page: number) => {
        this.props.setCurPage(page,this.props.pageSize);
    }
    render() {
        return <>
        <div>{this.props.title}</div>
        <div className={cl.userPage}>Choose your friends{this.props.isFetching && <span className={cl.preloader}><Preloader/></span>}</div>
         <div className={cl.pagination}> <Pagination {...this.props} changeCurPage={this.changeCurPage} /> </div>
        {!this.props.isFetching
        && <Users {...this.props}/>}
            </>
    }
}

// usersGenerate, currentPage, totalCount, pageSize, isFetching
let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        usersGenerate: getUsersData(state),
        currentPage: getCurrentPage(state),
        totalCount: getTotalCount(state),
        pageSize: getPageSize(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
        
    };
}

// <TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState>
// <ReturnType<typeof mapStateToProps>, MapDispatchToProps, OwnPropsType, AppStateType >

export default connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, AppStateType >(mapStateToProps, {
    doFollow: followThunk,
    doUnfollow: unFollowThunk,
    setUsers: setUsersThunk,
    setCurPage: changeCurPageThunk
})(UsersContainerClass);
