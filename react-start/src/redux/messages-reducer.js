import zorroAva from './../assets/images/zorro.jpg';
import kuscherenkoAva from './../assets/images/kuscherenko.jpg';
import lyubovAva from './../assets/images/lyubov.jpg';
const ADDMESSAGESTATE = 'ADD-MESSAGE-STATE';


export let sendMessage = (newMessageText) => ({ type: ADDMESSAGESTATE, newMessageText });


let initialState = {
    messagesData: [
        { id: 1, message: 'злтщототолиолиг' },
        { id: 2, message: 'Hello' },
        { id: 3, message: 'Privet' },
        { id: 4, message: 'Au revoir' }
    ],
    dialogsUsersData: [
        { id: 1, name: 'Zorro', ava: zorroAva },
        { id: 2, name: 'Lyubov', ava: lyubovAva },
        { id: 3, name: 'Kuscherenko', ava: kuscherenkoAva }
    ]
};


let messagesReducer = (state = initialState, action) => {


    switch (action.type) {
        case ADDMESSAGESTATE:
            return {
                ...state,
                messagesData: [...state.messagesData, { id: 8, message: action.newMessageText }]
            }

        default:
            return state;
    }
}

export default messagesReducer;