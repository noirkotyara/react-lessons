import zorroAva from './../assets/images/zorro.jpg';
import kuscherenkoAva from './../assets/images/kuscherenko.jpg';
import lyubovAva from './../assets/images/lyubov.jpg';
import { InferActionsType } from './redux-store';

const ADDMESSAGESTATE = 'SN/MESSAGES/ADD-MESSAGE-STATE';

let initialState = {
    messagesData: [
        { id: 1, message: 'злтщототолиолиг' },
        { id: 2, message: 'Hello' },
        { id: 3, message: 'Privet' },
        { id: 4, message: 'Au revoir' }
    ] as Array<MessagesDataType>,
    dialogsUsersData: [
        { id: 1, name: 'Zorro', ava: zorroAva },
        { id: 2, name: 'Lyubov', ava: lyubovAva },
        { id: 3, name: 'Kuscherenko', ava: kuscherenkoAva }
    ] as Array<DialogsUsersDataType>
};

let idNum = 5;
let messagesReducer = (state = initialState, action: ActionsType):initialStateType => {
    switch (action.type) {
        case ADDMESSAGESTATE:
            idNum++;
            return {
                ...state,
                messagesData: [...state.messagesData, {
                    id: idNum,
                    message: action.newMessageText
                }]
    }
        default:
            return state;
    }
}



export const actions = {
    sendMessage: (newMessageText: string) => ({ type: ADDMESSAGESTATE, newMessageText })
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
