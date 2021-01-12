import { dialogsAPI } from '../api/api';
import { DataType } from './../api/api';
import { BasicThunkType, InferActionsType } from './redux-store';

const ADDMESSAGESTATE = 'SN/MESSAGES/ADD-MESSAGE-STATE'
const ADDDIALOGSUSERS = 'SN/MESSAGES/ADD-DIALOGS-USERS'
const STARTCHAT = 'SN/MESSAGES/START-CHAT'

let initialState = {
    messagesData: [
        { id: 1, message: 'злтщототолиолиг' },
        { id: 2, message: 'Hello' },
        { id: 3, message: 'Privet' },
        { id: 4, message: 'Au revoir' }
    ] as Array<MessagesDataType>,
    dialogsUsersData: [] as Array<DataType>
};

let idNum = 5;
let messagesReducer = (state = initialState, action: ActionsType):initialStateType => {
    switch (action.type) {
        case ADDMESSAGESTATE:{
            idNum++;
            return {
                ...state,
                messagesData: [...state.messagesData, {
                    id: idNum,
                    message: action.newMessageText
                }]
        }}
        case ADDDIALOGSUSERS: {
            return{
                ...state,
                dialogsUsersData: action.users
            }
        }
        default:
            return state;
    }
}

export const actions = {
    sendMessage: (newMessageText: string) => ({ type: ADDMESSAGESTATE, newMessageText } as const),
    getDialogs: (users: Array<DataType>) => ({type: ADDDIALOGSUSERS, users} as const),
    startChat: (userId: number) => ({type: STARTCHAT, userId} as const)
}

export const getDialogsThunk = (): ThunkType => async (dispatch) => {
    let data = await dialogsAPI.getAlldialogs();
    debugger
    
    dispatch(actions.getDialogs(data))
    
}

export const startChatThunk = (userId: number): ThunkType => async (dispatch) => {
    let data = await dialogsAPI.startChat(userId);
    
    // (data.resultCode === ResultCodeType.Success) && dispatch(getDialogsThunk())
}



export default messagesReducer;

//types
export type MessagesDataType = {
    id?: number
    message: string
};
export type DialogsUsersDataType = {
    id: number
    name: string
    ava: string
}
export type initialStateType = typeof initialState
type ActionsType = InferActionsType<typeof actions>
type ThunkType = BasicThunkType<ActionsType>
