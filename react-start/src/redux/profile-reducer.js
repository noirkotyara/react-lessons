import { userProfile } from "../api/api";

const SETPROF = 'SET-PROFILE';
const UPDATESTATUS = 'SET-STATUS';
const POSTF = 'POST-FORM-newPostText';


let setProfile = (profile) => ({ type: SETPROF, profile });
let updateStatusAC = (status) => ({ type: UPDATESTATUS, status });
export let postForm = (content) => ({ type: POSTF, content });

let initialState = {
    postsData: [
        { id: 1, message: 'Hello', likes: 15 },
        { id: 2, message: 'Bonjour', likes: 30 },
        { id: 3, message: 'Привет', likes: 15000 },
    ],
    newPostText: '',
    profile: null,
    status: 'no status'

};

let profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case POSTF:
            let newPost = {
                id: 5,
                message: action.content,
                likes: 0
            };

            return {
                ...state,
                postsData: [...state.postsData, newPost]
            }
        case SETPROF:
            return {
                ...state,
                profile: action.profile
            };
        case UPDATESTATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
}

export const setProfileThunk = (userID) => async(dispatch) => {
    let data = await userProfile.showProfile(userID);
    dispatch(setProfile(data));
}

export const setStatusThunk = (status) => async(dispatch) => {
    let data = await userProfile.updateStatus(status);
    (data.resultCode === 0) &&
    dispatch(updateStatusAC(status))

}
export const getStatusThunk = (userID) => async(dispatch) => {
    let data = await userProfile.getStatus(userID)
    dispatch(updateStatusAC(data));
}

export default profileReducer;