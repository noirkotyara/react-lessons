import { ThunkAction } from "redux-thunk";
import { authMeSuccessThunk, setUserDataAType } from "./authMe";
import { AppStateType } from "./redux-store";

const SET_INIT = 'SET-INITIALIZE';

let initialState = {
    initialized: false
};
export type InitialStateType = typeof initialState;
let appInitialization = (state = initialState, action: setInitializeActionType): InitialStateType => {
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

type setInitializeActionType = { type: typeof SET_INIT };

export let setInitialize = (): setInitializeActionType => ({ type: SET_INIT });

type ActionsTypes = setInitializeActionType;
export const setInitializeThunk = (): ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes> => async dispatch => {
    await dispatch(authMeSuccessThunk());
    dispatch(setInitialize());
}


export default appInitialization;