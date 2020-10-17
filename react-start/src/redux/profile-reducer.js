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
    let copyState = {...state }; //for you, my dear JS
    let addPoststate = () => {
        if (copyState.newPostText.length !== 0) {
            let newPost = {
                id: 5,
                message: copyState.newPostText,
                likes: 0
            };

            copyState.postsData = [...state.postsData];
            copyState.postsData.push(newPost);

        }

    }

    let uploadPoststate = (newText) => {

        copyState.newPostText = newText;

    }
    switch (action.type) {
        case ADDPOSTSTATE:
            addPoststate();
            return copyState;
        case UPLOADPOSTSTATE:
            uploadPoststate(action.newText);
            return copyState;


        default:
            return state;
    }
}
export default profileReducer;