const ADDPOSTSTATE = 'ADD-POST-STATE';
const UPLOADPOSTSTATE = 'UPLOAD-POST-STATE';
const SETPROF = 'SET-PROFILE'

export let addPostActionCreator = () => ({ type: ADDPOSTSTATE });
export let uploadPoststateActionCreator = (text) => ({ type: UPLOADPOSTSTATE, newText: text });
export let setProfile = (profile) => ({ type: SETPROF, profile });


let initialState = {
    postsData: [
        { id: 1, message: 'Hello', likes: 15 },
        { id: 2, message: 'Bonjour', likes: 30 },
        { id: 3, message: 'Привет', likes: 15000 },
    ],
    newPostText: '',
    profile: null


};

let profileReducer = (state = initialState, action) => {


    switch (action.type) {
        case ADDPOSTSTATE:
            if (state.newPostText.length !== 0) { //юзаю state бо я його по суті не змінюю
                let newPost = {
                    id: 5,
                    message: state.newPostText,
                    likes: 0
                };
                return {
                    ...state,
                    postsData: [...state.postsData, newPost]
                };
            }
            break;

        case UPLOADPOSTSTATE:
            return {
                ...state,
                newPostText: action.newText
            };
        case SETPROF:
            return {
                ...state,
                profile: action.profile
            }

        default:
            return state;
    }
}
export default profileReducer;