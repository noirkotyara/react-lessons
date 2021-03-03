import { usersAPI } from "../api/api";
import { UsersDataType } from './../types/types';
import { BasicThunkType, InferActionsType } from './redux-store';

export const FOLLOW = 'SN/USERS/FOLLOW';
export const UNFOLLOW = 'SN/USERS/UNFOLLOW';
export const DATA = 'SN/USERS/SETUSERS';
export const CURPAGE = 'SN/USERS/CURPAGE';
export const TOTALCOUNT = 'SN/USERS/TOTALCOUNT';
export const TOGGLE_IS_FETCHING = 'SN/USERS/TOGGLE-IS-FETCHING';
export const FOL_IS_FETCHING = 'SN/USERS/FOLLOWING-IS-FETCHING';
export const SET_FILTER = 'SN/USERS/SET-FILTER-FOR-USERS';
export const SET_USERS_SAGA = 'SN/USERS/SET-USERS-SAGA';
export const CHANGE_CUR_PAGE_SAGA = 'SN/USERS/CHANGE-CUR-PAGE-SAGA';


let initialState = {
    usersData: [] as Array<UsersDataType>,
    currentPage: 1,
    pageSize: 90,
    totalCount: 10,
    isFetching: false,
    followingInProgress: [] as Array<number>,
    filter: {
        term: '',
        friend: null as null | boolean
    }
};

const usersReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.id) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.id) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            };
        case DATA:
            return {
                ...state,
                usersData: [...action.usersData]
            };
        case CURPAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };
        case TOTALCOUNT:
            return {
                ...state,
                totalCount: action.totalCount
            };
        case SET_FILTER:
            
            return {
                ...state,
                filter: action.filter
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        case FOL_IS_FETCHING:

            let state02 = {
                ...state,
                followingInProgress: [...state.followingInProgress]
            };

            action.followingTF ?
                state02.followingInProgress.push(action.userId) :
                state02.followingInProgress = state02.followingInProgress.filter(userId => userId !== action.userId);

            return state02;

        default:
            return state;
    }
}

export const actions = {
    doUnfollow: (id: number) => ({ type: UNFOLLOW, id } as const),
    doFollow: (id: number) => ({ type: FOLLOW, id } as const),
    setUsers: (usersData: Array<UsersDataType>) => ({ type: DATA, usersData } as const),
    setCurPage: (currentPage: number) => ({ type: CURPAGE, currentPage } as const),
    setTotalCount: (totalCount: number) => ({ type: TOTALCOUNT, totalCount } as const),
    setFilter: (filter: FilterType) => ({ type: SET_FILTER, filter } as const),
    toggleFetching: (isFetching: boolean) => ({ type: TOGGLE_IS_FETCHING, isFetching } as const),
    toggleFollowing: (followingTF: boolean, userId: number) => ({ type: FOL_IS_FETCHING, followingTF, userId } as const),
    setUsersSaga: (currentPage: number, pageSize: number, filter: FilterType) => ({ type: SET_USERS_SAGA, currentPage, pageSize, filter } as const),
    changeCurPageSaga: (page: number, pageSize: number) => ({ type: CHANGE_CUR_PAGE_SAGA, page, pageSize } as const),
}

export const unFollowThunk = (userId: number): ThunkType => async (dispatch) => {
    dispatch(actions.toggleFollowing(true, userId));
    let data = await usersAPI.unFollowDeleteRequest(userId);
    data.resultCode === 0 && dispatch(actions.doUnfollow(userId));
    dispatch(actions.toggleFollowing(false, userId));
}

export const followThunk = (userId: number): ThunkType => async (dispatch) => {
    dispatch(actions.toggleFollowing(true, userId));
    let data = await usersAPI.followPostRequest(userId);
    data.resultCode === 0 && dispatch(actions.doFollow(userId));
    dispatch(actions.toggleFollowing(false, userId));
}
export default usersReducer;

//types
export type InitialStateType = typeof initialState
export type FilterType = typeof initialState.filter
type ActionsType = InferActionsType<typeof actions>
type ThunkType = BasicThunkType<ActionsType>