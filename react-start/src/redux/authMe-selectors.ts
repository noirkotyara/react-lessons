import { AppStateType } from "./redux-store";

export const getCaptcha = (state: AppStateType) => { return state.authMe.captcha }
export const getAuthMe = (state: AppStateType) => { return state.authMe.isAuthMe }
export const getAuthID = (state: AppStateType) => { return state.authMe.id }