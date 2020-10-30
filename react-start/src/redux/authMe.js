const SET_USER_DATA = 'SET-USER-DATA';
const IS_AUTH_ME = 'IS-AUTH-ME';

export let setUserData = ({ id, login, email }) => ({ type: SET_USER_DATA, data: { id, login, email } });
export let setAuthMe = (isAuthMe) => ({ type: IS_AUTH_ME, isAuthMe });



let initialState = {
    id: null,
    login: null,
    email: null,
    isAuthMe: false
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
        default:
            return state;
    }
}

export default authMe;