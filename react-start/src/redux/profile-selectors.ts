import { createSelector } from "reselect";
import { AppStateType } from "./redux-store";

const getProfileData = (state: AppStateType) => { return state.profilePage };

export const getPostsData = createSelector(getProfileData, (profilePage) => { return profilePage.postsData });
export const getProfileObjectData = createSelector(getProfileData, (profilePage) => { return profilePage.profile });
export const getStatus = createSelector(getProfileData, (profilePage) => { return profilePage.status });
