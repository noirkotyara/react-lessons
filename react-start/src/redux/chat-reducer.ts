import { Dispatch } from 'react';
import { ChatAPI, MessageAPIType, StatusType, SubMessageType, SubStatusType } from './../api/chat-api';
import { BasicThunkType, InferActionsType } from "./redux-store";
import {v1} from 'uuid'
const SET_MESSAGES = 'SN/APP/SET-MESSAGES';
const SET_CHSTATUS = 'SN/APP/SET-CHANNEL-STATUS';

export type MessageType = MessageAPIType & {id: string}
let initialState = {
    messages: [] as Array<MessageType>,
    channelStatus: 'pending' as StatusType
};

let chatReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_MESSAGES:
            return {
                ...state,
                messages: [...state.messages, ...action.messages.map(m => ({...m, id: v1()})).filter((m, index, array) => index >= array.length-100)]
            }
        case SET_CHSTATUS:
            return {
                ...state,
                channelStatus: action.status
            }
        

        default:
            return state;
    }
}

export const actions = {
    setMessage: (messages: Array<MessageAPIType>) => ({ type: SET_MESSAGES, messages } as const),
    setChannelStatus: (status: StatusType) => ({ type: SET_CHSTATUS, status } as const)
}

let _newMessagesHandler: SubMessageType | null = null;
let _newStatusHandler: SubStatusType | null = null;

let newMessagesHandlerCreator = (dispatch: Dispatch<ActionsType>) => {
    if (_newMessagesHandler === null) {
        _newMessagesHandler = (messages: Array<MessageAPIType>) => {
            dispatch(actions.setMessage(messages))
        }
    }
    return _newMessagesHandler;
}

let newStatusHandlerCreator = (dispatch: Dispatch<ActionsType>) => {
    if (_newStatusHandler === null) {
        _newStatusHandler = (status) => {
            dispatch(actions.setChannelStatus(status))
        }
    }
    return _newStatusHandler;
}
export const startMessagesListening = (): ThunkType => async dispatch => {
    ChatAPI.createChannel()
    ChatAPI.subscribe('messages-received',newMessagesHandlerCreator(dispatch))
    ChatAPI.subscribe('ws-status', newStatusHandlerCreator(dispatch))
}
export const stopMessagesListening = (): ThunkType => async (dispatch, getState) => {
    getState().chatPage.messages = []
    ChatAPI.unsubscribe('messages-received',newMessagesHandlerCreator(dispatch))
    ChatAPI.unsubscribe('ws-status', newStatusHandlerCreator(dispatch))
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