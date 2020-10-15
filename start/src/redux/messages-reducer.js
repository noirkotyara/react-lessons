const ADDMESSAGESTATE = 'ADD-MESSAGE-STATE';
const UPLOADMESSAGESTATE = 'UPLOAD-MESSAGE-STATE';

// this._state.messagesPage

export let addMessagestateActionCreator = () => ({ type: ADDMESSAGESTATE });
export let uploadMessagestateActionCreator = (text) => ({ type: UPLOADMESSAGESTATE, newText: text });

let messagesReducer = (state, action) => {
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