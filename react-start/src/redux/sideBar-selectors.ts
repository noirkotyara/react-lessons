import { createSelector } from "reselect"
import { AppStateType } from "./redux-store"

const getNavbarData = (state: AppStateType) => { return state.sideBar}

export const getFriends = createSelector(getNavbarData, (sideBarPage) => { return sideBarPage.friendsList })
