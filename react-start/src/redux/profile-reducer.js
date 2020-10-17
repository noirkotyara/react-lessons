const ADDPOSTSTATE = 'ADD-POST-STATE';
const UPLOADPOSTSTATE = 'UPLOAD-POST-STATE';


export let addPostActionCreator = () => ({ type: ADDPOSTSTATE });
export let uploadPoststateActionCreator = (text) => ({ type: UPLOADPOSTSTATE, newText: text });


let initialState = {
    postsData: [
        { id: 1, message: 'Hello', likes: 15 },
        { id: 2, message: 'Bonjour', likes: 30 },
        { id: 3, message: 'Привет', likes: 15000 },
    ],
    newPostText: ''

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

        case UPLOADPOSTSTATE:
            return {
                ...state,
                newPostText: action.newText
            };


        default:
            return state;
    }
}
export default profileReducer;