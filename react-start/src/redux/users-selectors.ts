import { createSelector } from "reselect";
import { AppStateType } from "./redux-store";

const getUsersPage = (state: AppStateType) => { return state.usersPage };

export const getUsersData = createSelector(getUsersPage, (usersPage) => { return usersPage.usersData; });
export const getCurrentPage = createSelector(getUsersPage, (usersPage) => { return usersPage.currentPage });
export const getTotalCount = createSelector(getUsersPage, (usersPage) => { return usersPage.totalCount });
export const getPageSize = createSelector(getUsersPage, (usersPage) => { return usersPage.pageSize });
export const getIsFetching = createSelector(getUsersPage, (usersPage) => { return usersPage.isFetching });
export const getFollowingInProgress = createSelector(getUsersPage, (usersPage) => { return usersPage.followingInProgress });