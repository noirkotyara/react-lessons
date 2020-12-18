import { stopSubmit } from "redux-form";
import { authAPI, securityAPI } from "../api/api";

const SET_USER_DATA = 'SET-USER-DATA';
const IS_AUTH_ME = 'IS-AUTH-ME';
const LOG_IN = 'LOG-AND-PASSWORD';
const CAPTCHA = 'CAPTCHA-SUCCESS';

export let setUserData = ({ id, login, email, isAuthMe, captcha = null }) => ({ type: SET_USER_DATA, data: { id, login, email, isAuthMe, captcha } });
export let setAuthMe = (isAuthMe) => ({ type: IS_AUTH_ME, isAuthMe });
let setCaptcha = (captcha) => ({type: CAPTCHA, captcha});


let initialState = {
    id: null,
    login: null,
    email: null,
    isAuthMe: false,
    checkbox: false,
    captcha: null
};

let authMe = (state = initialState, action) => {
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
        case LOG_IN:
            return {
                ...state,
                userId: action.id

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

export const authMeSuccessThunk = () => async(dispatch) => {
    let data = await authAPI.isAuthMe();
    dispatch(setUserData({...data.data }));
    (data.resultCode === 0) && dispatch(setAuthMe(true));
}

export const putLoginPasswordThunk = (data) => async(dispatch) => {
    debugger;
    let dataR = await authAPI.isLogin(data);
    if (dataR.resultCode === 0) dispatch(authMeSuccessThunk());
    else {
        if(dataR.resultCode === 10) {dispatch(getCaptchaThunk())}
        let catchError = dataR.messages.length > 0 ? dataR.messages[0] : 'Some errors';
        dispatch(stopSubmit('login', { _error: catchError }));
    }

}
export const logoutThunk = () => async(dispatch) => {
    let dataR = await authAPI.isLogout();
    (dataR.resultCode === 0) &&
    dispatch(setAuthMe(false));
    dispatch(setUserData({...dataR.data }));
}
const getCaptchaThunk = () => async (dispatch) => {
    debugger;
    let data = await securityAPI.getCaptchaURL();
    dispatch(setCaptcha(data.url))
}


export default authMe;