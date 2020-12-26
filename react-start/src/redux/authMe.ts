import { Dispatch } from 'react';
import { stopSubmit } from "redux-form";
import { ThunkAction } from "redux-thunk";
import { authAPI, securityAPI } from "../api/api";
import { AppStateType } from "./redux-store";

const SET_USER_DATA = 'SET-USER-DATA';
const IS_AUTH_ME = 'IS-AUTH-ME';

const CAPTCHA = 'CAPTCHA-SUCCESS';

type DataType = {
    id: number | null
    login: string | null
    email: string | null
    isAuthMe: boolean
    captcha: string | null
} 
export type setUserDataAType = {
    type: typeof SET_USER_DATA
    data: DataType 
}
export type setAuthMeAType = {
    type: typeof IS_AUTH_ME
    isAuthMe: boolean
}
type setCaptchaAType = {
    type: typeof CAPTCHA
    captcha: string | null
}
export let setUserData = ({ id, login, email, isAuthMe, captcha = null }: DataType): setUserDataAType => ({ type: SET_USER_DATA, data: { id, login, email, isAuthMe, captcha } });
export let setAuthMe = (isAuthMe:boolean):setAuthMeAType => ({ type: IS_AUTH_ME, isAuthMe });
let setCaptcha = (captcha: string):setCaptchaAType => ({type: CAPTCHA, captcha});


let initialState = {
    id: null as number | null,
    login: null as string | null,
    email: null as string | null,
    isAuthMe: false,
    checkbox: false,
    captcha: null as string | null
};
export type initialStateType = typeof initialState;

let authMe = (state = initialState, action:setUserDataAType | setAuthMeAType | setCaptchaAType):initialStateType => {
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
type DataTypeLogin = {
    email: string
    password: string
    rememberMe: boolean
    captcha:null 
}

type ActionsTypes = setUserDataAType | setAuthMeAType | setCaptchaAType;
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>;
// : ThunkAction<Promise<void>, AppStateType, unknown, Action<STRING>>
export const authMeSuccessThunk = (): ThunkType => async(dispatch, getState: () => AppStateType) => {
    let data = await authAPI.isAuthMe();
    dispatch(setUserData({...data.data}));
    (data.resultCode === 0) && dispatch(setAuthMe(true));
}

//I need to fix this shit
export const putLoginPasswordThunk = (data:DataTypeLogin ) => async(dispatch: Function) => {
    debugger;
    let dataR = await authAPI.isLogin(data);
    if (dataR.resultCode === 0) dispatch(authMeSuccessThunk());
    else {
        if(dataR.resultCode === 10) {dispatch(getCaptchaThunk())}
        let catchError = dataR.messages.length > 0 ? dataR.messages[0] : 'Some errors';
        dispatch(stopSubmit('login', { _error: catchError }));
    }

}
export const logoutThunk = (): ThunkType => async(dispatch) => {
    let dataR = await authAPI.isLogout();
    (dataR.resultCode === 0) &&
    dispatch(setAuthMe(false));
    dispatch(setUserData({...dataR.data }));
}
const getCaptchaThunk = (): ThunkType => async (dispatch) => {
    debugger;
    let data = await securityAPI.getCaptchaURL();
    dispatch(setCaptcha(data.url))
}


export default authMe;