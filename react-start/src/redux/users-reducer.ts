import { Action } from 'redux';
import { UsersDataType } from './../types/types';
import { usersAPI } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const DATA = 'SETUSERS';
const CURPAGE = 'CURPAGE';
const TOTALCOUNT = 'TOTALCOUNT';
const TOGGLE_IS_FETCHING = 'TOGGLEIF';
const FOL_IS_FETCHING = 'FOLISFETCH';

type DoFollowActionType = { type: typeof FOLLOW, id: number }
type DoUnfollowActionType = { type: typeof UNFOLLOW, id: number }
type SetUsersActionType = { type: typeof DATA, usersData: Array<UsersDataType>}
type SetCurPageActionType = {type: typeof CURPAGE, currentPage: number }
type SetTotalCountActionType = { type: typeof TOTALCOUNT, totalCount: number }
type ToggleFetchingActionType = {type:typeof  TOGGLE_IS_FETCHING, isFetching: boolean}
type ToggleFollowingActionCreator = {type: typeof FOL_IS_FETCHING, followingTF: boolean, userId: number }

type ActionsType = DoFollowActionType | DoUnfollowActionType |
                    SetUsersActionType | SetCurPageActionType | 
                    SetTotalCountActionType | ToggleFetchingActionType | ToggleFollowingActionCreator;


let initialState = {
    usersData: [] as Array<UsersDataType>,
    currentPage: 1,
    pageSize: 90,
    totalCount: 10,
    isFetching: false,
    followingInProgress: [] as Array<number>
};


export type InitialStateType = typeof initialState;
let usersReducer = (state = initialState, action: ActionsType): InitialStateType => {


    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: true }
                    }
                    return u;
                })
            };


        case UNFOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: false }
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




export let doUnfollow = (id: number): DoUnfollowActionType => ({ type: UNFOLLOW, id });
export let doFollow = (id: number): DoFollowActionType => ({ type: FOLLOW, id });
export let setUsers = (usersData: Array<UsersDataType>): SetUsersActionType => ({ type: DATA, usersData });
export let setCurPage = (currentPage: number): SetCurPageActionType => ({ type: CURPAGE, currentPage });
export let setTotalCount = (totalCount: number): SetTotalCountActionType => ({ type: TOTALCOUNT, totalCount });
export let toggleFetching = (isFetching: boolean): ToggleFetchingActionType => ({ type: TOGGLE_IS_FETCHING, isFetching });
export let toggleFollowing = (followingTF: boolean, userId: number): ToggleFollowingActionCreator => ({ type: FOL_IS_FETCHING, followingTF, userId });


export const setUsersThunk = (currentPage:number, pageSize: number) => async(dispatch: Function) => {
    dispatch(toggleFetching(true));
    let data = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(toggleFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalCount(data.totalCount));
}
export const changeCurPageThunk = (page: number, pageSize: number) => async(dispatch: Function) => {
    dispatch(setCurPage(page));
    dispatch(toggleFetching(true));
    let data = await usersAPI.changeCurPage(page, pageSize)

    dispatch(toggleFetching(false));
    dispatch(setUsers(data.items));
}

export const unFollowThunk = (userId: number) => async(dispatch: Function) => {

    dispatch(toggleFollowing(true, userId));
    let data = await usersAPI.unFollowDeleteRequest(userId);
    data.resultCode === 0 && dispatch(doUnfollow(userId));
    dispatch(toggleFollowing(false, userId));
}

export const followThunk = (userId: number) => async(dispatch: Function) => {

    dispatch(toggleFollowing(true, userId));
    let data = await usersAPI.followPostRequest(userId);
    data.resultCode === 0 && dispatch(doFollow(userId));
    dispatch(toggleFollowing(false, userId));
}
export default usersReducer;