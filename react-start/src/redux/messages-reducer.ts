import { getIsFetching } from './users-selectors';
import { dialogsAPI, MessagesDataType, ResultCodeType } from '../api/api';
import { DataType } from './../api/api';
import { BasicThunkType, InferActionsType } from './redux-store';
import ActionButton from 'antd/lib/modal/ActionButton';

const ADDMESSAGESTATE = 'SN/MESSAGES/ADD-MESSAGE-STATE'
const ADDDIALOGSUSERS = 'SN/MESSAGES/ADD-DIALOGS-USERS'
const STARTCHAT = 'SN/MESSAGES/START-CHAT'
const SETSELECTEDMESSAGES = 'SN/MESSAGES/SET-SELECTED-MESSAGES'
const SETISFETCHING = 'SN/MESSAGES/SET-IS-FETCHING'
const SETMOREMESSAGES = 'SN/MESSAGES/SET-MORE-MESSAGES'
const DELETEMESSAGE = 'SN/MESSAGES/DELETE-MESSAGES'

let initialState = {
    messagesData: [] as Array<MessagesDataType>,
    dialogsUsersData: [] as Array<DataType>,
    selectedUserId: 0,
    isFetching: false
};


let messagesReducer = (state = initialState, action: ActionsType):initialStateType => {
    switch (action.type) {
        case ADDMESSAGESTATE:{
            return {
                ...state,
                messagesData: [...state.messagesData, action.newMessage]
        }}
        case SETSELECTEDMESSAGES: {
            return {
                ...state,
                messagesData: action.messagesData,
                selectedUserId: action.userId
            }
        }
        case ADDDIALOGSUSERS: {
            return{
                ...state,
                dialogsUsersData: action.users
            }
        }
        case SETISFETCHING: {
            return{
                ...state,
                isFetching: !state.isFetching
            }
        }
        case SETMOREMESSAGES: {
            return{
                ...state,
                messagesData: [...action.messagesData, ...state.messagesData]
            }
        }
        case DELETEMESSAGE: {
            return {
                ...state,
                messagesData: state.messagesData.filter(message => message.id !== action.id)
            }
        }
        default:
            return state;
    }
}

export const actions = {
    sendMessage: (newMessage: MessagesDataType) => ({ type: ADDMESSAGESTATE, newMessage } as const),
    getDialogs: (users: Array<DataType>) => ({type: ADDDIALOGSUSERS, users} as const),
    startChat: (userId: number) => ({type: STARTCHAT, userId} as const),
    setSelectedMessages: (messagesData: Array<MessagesDataType>, userId: number) => ({type: SETSELECTEDMESSAGES, messagesData, userId } as const),
    setFetching: () => ({type: SETISFETCHING} as const),
    setMoreMessages: (messagesData: Array<MessagesDataType>) => ({type: SETMOREMESSAGES, messagesData} as const),
    deleteMessage: (id: string) => ({type: DELETEMESSAGE , id} as const)
}

export const getDialogsThunk = (): ThunkType => async (dispatch) => {
    dispatch(actions.setFetching())
    let data = await dialogsAPI.getAlldialogs();
    dispatch(actions.getDialogs(data))
    dispatch(actions.setFetching())
}

export const startChatThunk = (userId: number): ThunkType => async (dispatch) => {
    let data = await dialogsAPI.startChat(userId);
    
    // (data.resultCode === ResultCodeType.Success) && dispatch(getDialogsThunk())
}

export const getSelectedChatThunk = (userId: number): ThunkType => async (dispatch) => {
    dispatch(actions.setFetching())
    let response = await dialogsAPI.selectChat(userId);
    if(response.error == null){
        dispatch(actions.setSelectedMessages(response.items, userId))
        dispatch(actions.setFetching())
    }
}

export const sendMessageThunk = (userId: number, message: string): ThunkType => async (dispatch) => {
    dispatch(actions.setFetching())
    let response = await dialogsAPI.sendMessageToUser(userId, message);
    
    if(response.resultCode === ResultCodeType.Success) {
        dispatch(actions.sendMessage(response.data.message))
        dispatch(actions.setFetching())
    }
}

export const loadMoreMessagesThunk = (userId: number, pageNumber: number): ThunkType => async (dispatch) => {
    dispatch(actions.setFetching())
    let response = await dialogsAPI.selectChat(userId, pageNumber);
   
    if(response.error === null) {
        dispatch(actions.setMoreMessages(response.items))
        dispatch(actions.setFetching())
    }
}
// "id": "b3a553a2-971c-4ccb-8a3d-f0cefbf2e069",

export const deleteMessageThunk = (messageId: string): ThunkType => async (dispatch) => {
    dispatch(actions.setFetching())
    let response = await dialogsAPI.deleteMessage(messageId);
    if(response.resultCode === ResultCodeType.Success) {
        dispatch(actions.deleteMessage(messageId))
        dispatch(actions.setFetching())
    }
    
}





export default messagesReducer;

//types

export type DialogsUsersDataType = {
    id: number
    name: string
    ava: string
}
export type initialStateType = typeof initialState
type ActionsType = InferActionsType<typeof actions>
type ThunkType = BasicThunkType<ActionsType>
