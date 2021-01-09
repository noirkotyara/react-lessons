import React, { Props } from 'react';
import { connect } from 'react-redux';
import { changeCurPageThunk, setUsersThunk, unFollowThunk, followThunk, FilterType, actions } from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalCount, getUsersData, getFilter } from '../../redux/users-selectors';
import cl from './../Users/Users.module.css'
import Pagination from '../common/Pagination/Pagination';
import { UsersDataType } from '../../types/types';
import { AppStateType } from './../../redux/redux-store';

type StateType = {
    onFilterChange: (filter: FilterType) => void
}

// React.Component<PropsType, StateType>
class UsersContainerClass extends React.Component<PropsType, StateType> {
    componentDidMount() {
        this.props.setUsers(this.props.currentPage, this.props.pageSize, this.props.filter)
    }
    
    changeCurPage = (page: number) => {
        this.props.setCurPage(page,this.props.pageSize)
    }
   componentWillUnmount(){// after component`s death it will be clean)
    this.props.setUsers(this.props.currentPage, this.props.pageSize, {term: '', friend: null})
   }
    onFilterChange = (filter: FilterType) => {
        this.props.setUsers(this.props.currentPage, this.props.pageSize, filter)
    }
    render() {
        return <>
        <div>{this.props.title}</div>
        <div className={cl.userPage}>Choose your friends{this.props.isFetching && <span className={cl.preloader}><Preloader/></span>}</div>
         <div className={cl.pagination}> <Pagination {...this.props} changeCurPage={this.changeCurPage} /> </div>
        {!this.props.isFetching
        && <Users
            usersGenerate={this.props.usersGenerate}
            doFollow={this.props.doFollow}
            doUnfollow={this.props.doUnfollow}
            onFilterChange={this.onFilterChange}
            followingInProgress={this.props.followingInProgress}
            filter={this.props.filter}
                    />}
            </>
    }
}


let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        usersGenerate: getUsersData(state),
        currentPage: getCurrentPage(state),
        totalCount: getTotalCount(state),
        pageSize: getPageSize(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        filter: getFilter(state)
        
    };
}

// <TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState>
// <ReturnType<typeof mapStateToProps>, MapDispatchToProps, OwnPropsType, AppStateType >

export default connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType , AppStateType>(mapStateToProps, {
    doFollow: followThunk,
    doUnfollow: unFollowThunk,
    setUsers: setUsersThunk,
    setCurPage: changeCurPageThunk
})(UsersContainerClass)

//types
export type MapStateToPropsType = {
    usersGenerate: Array<UsersDataType>
    currentPage: number
    totalCount: number
    pageSize: number
    isFetching: boolean
    followingInProgress: Array<number>
    filter: FilterType
}

// usersGenerate, currentPage, totalCount, pageSize, isFetching
export type MapDispatchToPropsType = {
    setUsers: (currentPage: number, pageSize: number, filter: FilterType) => void
    setCurPage: (page: number, pageSize: number) => void
    doFollow: (id: number) => void 
    doUnfollow: (id: number) => void
}
export type OwnPropsType = {
    title: string
    user?: UsersDataType
    store: AppStateType
   
}
export type PropsType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType;

