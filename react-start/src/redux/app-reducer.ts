import { ThunkAction } from "redux-thunk";
import { authMeSuccessThunk } from "./authMe";
import { AppStateType, InferActionsType } from "./redux-store";

const SET_INIT = 'SET-INITIALIZE';

let initialState = {
    initialized: false
};
export type InitialStateType = typeof initialState;
let appInitialization = (state = initialState, action: ActionsType): InitialStateType => {
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

export const actions = {
    setInitialize: () => ({ type: SET_INIT } as const)
}

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>

type ActionsType = InferActionsType<typeof actions>;

export const setInitializeThunk = (): ThunkType => async dispatch => {
    await dispatch(authMeSuccessThunk());
    dispatch(actions.setInitialize());
}


export default appInitialization;