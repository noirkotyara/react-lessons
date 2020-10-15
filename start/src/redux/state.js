const ADDPOSTSTATE = 'ADD-POST-STATE';
const UPLOADPOSTSTATE = 'UPLOAD-POST-STATE';
const ADDMESSAGESTATE = 'ADD-MESSAGE-STATE';
const UPLOADMESSAGESTATE = 'UPLOAD-MESSAGE-STATE';

export let addPostActionCreator = () => ({ type: ADDPOSTSTATE });
export let uploadPoststateActionCreator = (text) => ({ type: UPLOADPOSTSTATE, newText: text });
export let addMessagestateActionCreator = () => ({ type: ADDMESSAGESTATE });
export let uploadMessagestateActionCreator = (text) => ({ type: UPLOADMESSAGESTATE, newText: text });

let store = {
    _state: {
        profilePage: {
            postsData: [
                { id: 1, message: 'Hello', likes: 15 },
                { id: 2, message: 'Bonjour', likes: 30 },
                { id: 3, message: 'Привет', likes: 15000 },
            ],
            newPostText: ''

        },
        messagesPage: {
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
        },
        sideBar: {
            friendsList: [
                { id: 1, name: 'Zorro' },
                { id: 2, name: 'Lyubov' },
                { id: 3, name: 'Kuscherenko' }
            ]
        }
    },
    _renderEntireTree() {},

    getState() { return this._state; },

    subscribe(observer) {
        this._renderEntireTree = observer;
    },

    //methods:
    //posts
    _addPoststate() {

        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likes: 0
        };
        this._state.profilePage.postsData.push(newPost);
        this._renderEntireTree(this._state);

    },

    _uploadPoststate(newText) {

        this._state.profilePage.newPostText = newText;
        this._renderEntireTree(this._state);

    },
    //messages
    _addMessagestate() {

        let newMessage = {
            id: 8,
            message: this._state.messagesPage.newMessageText

        };
        this._state.messagesPage.messagesData.push(newMessage);
        this._renderEntireTree(this._state);

    },

    _uploadMessagestate(newText) {

        this._state.messagesPage.newMessageText = newText;
        this._renderEntireTree(this._state);

    },


    dispatch(action) {
        switch (action.type) {
            case ADDPOSTSTATE:
                this._addPoststate();
                break;
            case UPLOADPOSTSTATE:
                this._uploadPoststate(action.newText);
                break;
            case ADDMESSAGESTATE:
                this._addMessagestate();
                break;
            case UPLOADMESSAGESTATE:
                this._uploadMessagestate(action.newText);
                break;

            default:
                break;
        }
    }


}



export default store;

// `${k}`