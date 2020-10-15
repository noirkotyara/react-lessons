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
    let addPoststate = () => {

        let newPost = {
            id: 5,
            message: state.newPostText,
            likes: 0
        };
        state.postsData.push(newPost);

    }

    let uploadPoststate = (newText) => {

        state.newPostText = newText;

    }
    switch (action.type) {
        case ADDPOSTSTATE:
            addPoststate();
            return state;
        case UPLOADPOSTSTATE:
            uploadPoststate(action.newText);
            return state;


        default:
            return state;
    }
}
export default profileReducer;