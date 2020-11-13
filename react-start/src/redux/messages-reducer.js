const ADDMESSAGESTATE = 'ADD-MESSAGE-STATE';
const UPLOADMESSAGESTATE = 'UPLOAD-MESSAGE-STATE';

// this._state.messagesPage

export let sendMessage = (newMessageText) => ({ type: ADDMESSAGESTATE, newMessageText });


let initialState = {
    messagesData: [
        { id: 1, message: 'злтщототолиолиг' },
        { id: 2, message: 'Hello' },
        { id: 3, message: 'Privet' },
        { id: 4, message: 'Au revoir' }
    ],
    dialogsUsersData: [
        { id: 1, name: 'Zorro', ava: 'dcdc' },
        { id: 2, name: 'Lyubov', ava: 'img-l' },
        { id: 3, name: 'Kuscherenko', ava: 'img-ll' }
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