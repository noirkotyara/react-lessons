import { Dispatch } from 'react';
import { ChatAPI, MessageType, SubscriberType } from './../api/chat-api';
import { BasicThunkType, InferActionsType } from "./redux-store";

const SET_MESSAGES = 'SN/APP/SET-MESSAGES';

let initialState = {
    messages: [] as Array<MessageType>
};

let chatReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_MESSAGES:
            return {
                ...state,
                messages: [...state.messages, ...action.messages]
            }
        

        default:
            return state;
    }
}

export const actions = {
    setMessage: (messages: Array<MessageType>) => ({ type: SET_MESSAGES, messages } as const)
}
let _newMessagesHandler: SubscriberType | null = null;

let newMessagesHandlerCreator = (dispatch: Dispatch<ActionsType>) => {
    if (_newMessagesHandler === null) {
        _newMessagesHandler = (messages: Array<MessageType>) => {
            dispatch(actions.setMessage(messages))
        }
    }
    return _newMessagesHandler;
}

export const startMessagesListening = (): ThunkType => async dispatch => {
    ChatAPI.createChannel()
    ChatAPI.subscribe(newMessagesHandlerCreator(dispatch))
}
export const stopMessagesListening = (): ThunkType => async (dispatch, getState) => {
    getState().chatPage.messages = []
    ChatAPI.unsubscribe(newMessagesHandlerCreator(dispatch))
    ChatAPI.closeChannel()
}
export const sendMessageThunk = (message: string): ThunkType => async dispatch => {
    ChatAPI.sendMessage(message)
}


export default chatReducer;

//types
export type InitialStateType = typeof initialState
type ThunkType = BasicThunkType<ActionsType>
type ActionsType = InferActionsType<typeof actions>