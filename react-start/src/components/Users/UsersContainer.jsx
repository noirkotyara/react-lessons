import React from 'react';
import { connect } from 'react-redux';
import { doFollow, doUnfollow, setUsers } from '../../redux/users-reducer';
import Users from './Users';



let mapStateToProps = (state) =>{
    return {
        usersGenerate: state.usersPage.usersData
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        doFollow: (id) => {
            dispatch(doFollow(id))
        },
        doUnfollow: (id) => {
            dispatch(doUnfollow(id))
        },
        setUsers: (usersData) => {
            dispatch(setUsers(usersData))
        }
    };
}

const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users); 
export default UsersContainer;