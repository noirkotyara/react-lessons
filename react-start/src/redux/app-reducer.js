import { authMeSuccessThunk } from "./authMe";

const SET_INIT = 'SET-INITIALIZE';


export let setInitialize = () => ({ type: SET_INIT });

let initialState = {
    initialized: false
};

let appInitialization = (state = initialState, action) => {
    switch (action.type) {
        case SET_INIT:
            return {
                ...state,
                initialized: true
            }

        default:
            return state;
    }
}

export const setInitializeThunk = () => {
    return (dispatch) => {
        let promise = dispatch(authMeSuccessThunk());
        Promise.all([promise]).then(() => {
            dispatch(setInitialize());
        })

    }
}


export default appInitialization;