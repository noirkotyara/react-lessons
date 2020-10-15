const ADDPOSTSTATE = 'ADD-POST-STATE';
const UPLOADPOSTSTATE = 'UPLOAD-POST-STATE';


export let addPostActionCreator = () => ({ type: ADDPOSTSTATE });
export let uploadPoststateActionCreator = (text) => ({ type: UPLOADPOSTSTATE, newText: text });

let profileReducer = (state, action) => {
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