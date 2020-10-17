const ADDMESSAGESTATE = 'ADD-MESSAGE-STATE';
const UPLOADMESSAGESTATE = 'UPLOAD-MESSAGE-STATE';

// this._state.messagesPage

export let addMessagestateActionCreator = () => ({ type: ADDMESSAGESTATE });
export let uploadMessagestateActionCreator = (text) => ({ type: UPLOADMESSAGESTATE, newText: text });


let initialState = {
    messagesData: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Hello' },
        { id: 3, message: 'Privet' },
        { id: 4, message: 'Au revoir' }
    ],
    dialogsUsersData: [
        { id: 1, name: 'Zorro', ava: 'dcdc' },
        { id: 2, name: 'Lyubov', ava: 'img-l' },
        { id: 3, name: 'Kuscherenko', ava: 'img-ll' }
    ],
    newMessageText: ''
};


let messagesReducer = (state = initialState, action) => {
    let copyState = {...state };
    let addMessagestate = () => {
        if (copyState.newMessageText.length !== 0) {
            let newMessage = {
                id: 8,
                message: copyState.newMessageText
            };
            copyState.messagesData = [...state.messagesData];
            copyState.messagesData.push(newMessage);

        }


    }

    let uploadMessagestate = (newText) => {
        copyState.newMessageText = newText;
    }


    switch (action.type) {
        case ADDMESSAGESTATE:
            addMessagestate();
            return copyState;
        case UPLOADMESSAGESTATE:
            uploadMessagestate(action.newText);
            return copyState;

        default:
            return state;
    }
}

export default messagesReducer;