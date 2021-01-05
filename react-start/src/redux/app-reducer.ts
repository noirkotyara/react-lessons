import { authMeSuccessThunk } from "./authMe";
import { BasicThunkType, InferActionsType } from "./redux-store";

const SET_INIT = 'SN/APP/SET-INITIALIZE';

let initialState = {
    initialized: false
};

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

export const setInitializeThunk = (): ThunkType => async dispatch => {
    await dispatch(authMeSuccessThunk());
    dispatch(actions.setInitialize());
}


export default appInitialization;

//types
export type InitialStateType = typeof initialState
type ThunkType = BasicThunkType<ActionsType>
type ActionsType = InferActionsType<typeof actions>