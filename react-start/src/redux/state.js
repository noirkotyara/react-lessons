import messagesReducer from "./messages-reducer";
import profileReducer from "./profile-reducer";



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


    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
        this._renderEntireTree(this._state);
    }


}



export default store;