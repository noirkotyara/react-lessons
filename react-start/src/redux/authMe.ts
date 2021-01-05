import { ResultCodeType } from './../api/api';
import { FormAction, stopSubmit } from "redux-form";
import { authAPI, securityAPI } from "../api/api";
import { BasicThunkType, InferActionsType } from "./redux-store";

const SET_USER_DATA = 'SN/AUTHME/SET-USER-DATA';
const IS_AUTH_ME = 'SN/AUTHME/IS-AUTH-ME';
const CAPTCHA = 'SN/AUTHME/CAPTCHA-SUCCESS';


let initialState = {
    id: null as number | null,
    login: null as string | null,
    email: null as string | null,
    isAuthMe: false as boolean | undefined,
    checkbox: false,
    captcha: null as string | null
};


const authMe = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }
        case IS_AUTH_ME:
            return {
                ...state,
                isAuthMe: action.isAuthMe
            }
        case CAPTCHA: {
            return {
                ...state,
                captcha: action.captcha
            }
        }
        default:
            return state;
    }
}

export const authMeSuccessThunk = (): ThunkType => async dispatch => {
    let data = await authAPI.isAuthMe()
    dispatch(actions.setUserData({ ...data.data }));
    (data.resultCode === ResultCodeType.Success) && dispatch(actions.setAuthMe(true));
}


export const putLoginPasswordThunk = (data: DataIsLoginType): ThunkType => async dispatch => {
    let dataR = await authAPI.isLogin(data);
    if (dataR.resultCode === 0) dispatch(authMeSuccessThunk());
    else {
        if (dataR.resultCode === 10) { dispatch(getCaptchaThunk()) }
        let catchError = dataR.messages.length > 0 ? dataR.messages[0] : 'Some errors';
        dispatch(stopSubmit('login', { _error: catchError }));
    }

}
export const logoutThunk = (): ThunkType => async (dispatch) => {
    let dataR = await authAPI.isLogout();
    (dataR.resultCode === 0) &&
        dispatch(actions.setAuthMe(false));
    dispatch(actions.setUserData({ ...dataR.data }));
}
const getCaptchaThunk = (): ThunkType => async (dispatch) => {
    let data = await securityAPI.getCaptchaURL();
    dispatch(actions.setCaptcha(data.url))
}


export default authMe;

//types
type DataType = {
    id: number | null
    login: string | null
    email: string | null
    isAuthMe?: boolean | undefined
    captcha?: string | null
}
type ActionsType = InferActionsType<typeof actions>
export type initialStateType = typeof initialState;
export const actions = {
    setUserData: ({ id, login, email, isAuthMe, captcha = null }: DataType) => ({ type: SET_USER_DATA, data: { id, login, email, isAuthMe, captcha } } as const),
    setAuthMe: (isAuthMe: boolean) => ({ type: IS_AUTH_ME, isAuthMe } as const),
    setCaptcha: (captcha: string) => ({ type: CAPTCHA, captcha } as const)

}
export type DataIsLoginType = {
    checkbox: boolean
    symbols: string
    password: string
    login: string
}
type ThunkType = BasicThunkType<ActionsType | FormAction>

