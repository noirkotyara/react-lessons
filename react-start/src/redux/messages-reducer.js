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
    let addMessagestate = () => {

        let newMessage = {
            id: 8,
            message: state.newMessageText
        };
        state.messagesData.push(newMessage);


    }

    let uploadMessagestate = (newText) => {
        state.newMessageText = newText;
    }


    switch (action.type) {
        case ADDMESSAGESTATE:
            addMessagestate();
            return state;
        case UPLOADMESSAGESTATE:
            uploadMessagestate(action.newText);
            return state;

        default:
            return state;
    }
}

export default messagesReducer;