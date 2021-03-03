import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { actions, CHANGE_CUR_PAGE_SAGA, SET_USERS_SAGA } from '../users-reducer'
import { usersAPI } from '../../api/api'
// worker Saga: will be fired on USER_FETCH_REQUESTED actions

function* fetchUsers({currentPage, pageSize, filter}) {
    try {
        yield put(actions.toggleFetching(true))
        yield put(actions.setFilter(filter))
        const data = yield call(() => usersAPI.getUsers(currentPage, pageSize, filter.term, filter.friend))
        yield put(actions.toggleFetching(false))
        yield put(actions.setUsers(data.items))
        yield put(actions.setTotalCount(data.totalCount))
    } catch (e) {
        // yield put({ type: "USER_FETCH_FAILED", message: e.message });
        console.log('Error - ' + e.message)
    }
}

///
// dispatch(actions.setCurPage(page));
//     dispatch(actions.toggleFetching(true));
//     let data = await usersAPI.changeCurPage(page, pageSize)
//     dispatch(actions.toggleFetching(false));
//     dispatch(actions.setUsers(data.items));

function* changePage({page, pageSize}){
    try{
        yield put(actions.setCurPage(page))
        yield put(actions.toggleFetching(true))
        const data = yield call(() => usersAPI.changeCurPage(page, pageSize))
        yield put(actions.toggleFetching(false))
        yield put(actions.setUsers(data.items))
    } catch (e){
        console.log('Error - ' + e.message)
    }
}


export function* sagaWatcher() {
    yield takeEvery(SET_USERS_SAGA, fetchUsers)
    yield takeEvery(CHANGE_CUR_PAGE_SAGA, changePage)

}

export function* sagaWatcher2() {
  
}

// export default sagaWatcher;