import { userProfile } from "../api/api";


const ADDPOSTSTATE = 'ADD-POST-STATE';
const UPLOADPOSTSTATE = 'UPLOAD-POST-STATE';
const SETPROF = 'SET-PROFILE';
const UPDATESTATUS = 'SET-STATUS';
const GETSTATUS = 'GETSTATUS';

export let addPostActionCreator = () => ({ type: ADDPOSTSTATE });
export let uploadPoststateActionCreator = (text) => ({ type: UPLOADPOSTSTATE, newText: text });
let setProfile = (profile) => ({ type: SETPROF, profile });
let updateStatusAC = (status) => ({ type: UPDATESTATUS, status });
let getStatusAC = (status) => ({ type: GETSTATUS, status });

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
            };
        case UPDATESTATUS:
            return {
                ...state,
                status: action.status
            }
        case GETSTATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
}

export const setProfileThunk = (userID) => {
    return (dispatch) => {
        !userID && (userID = 12341);
        userProfile.showProfile(userID)
            .then(data => {
                dispatch(setProfile(data));
            });
    }
}

export const setStatusThunk = (status) => {
    return (dispatch) => {

        userProfile.updateStatus(status)
            .then(data => {
                // debugger;
                if (data.resultCode === 0) {
                    dispatch(updateStatusAC(status))
                }

            });
    }
}
export const getStatusThunk = (userID) => {
    return (dispatch) => {
        !userID && (userID = 12341);
        userProfile.getStatus(userID)
            .then(data => {
                debugger;
                dispatch(getStatusAC(data))
            });
    }
}

export default profileReducer;