import { connect } from 'react-redux';
import { doFollow, doUnfollow, setCurPage, settotalCount, setUsers } from '../../redux/users-reducer';
import Users from './Users';



let mapStateToProps = (state) => {
  
    return {
        usersGenerate: state.usersPage.usersData,
        currentPage: state.usersPage.currentPage,
        totalCount: state.usersPage.totalCount,
        pageSize: state.usersPage.pageSize
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
        },
        setCurPage: (curPage) => {
            dispatch(setCurPage(curPage))
        },
        settotalCount: (totalCount) => {
            dispatch(settotalCount(totalCount))
        }
    };
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;