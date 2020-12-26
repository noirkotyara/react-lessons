import { stopSubmit } from "redux-form";
import { ThunkAction } from "redux-thunk";
import { userProfile } from "../api/api";
import { ProfileType } from "../types/types";
import { AppStateType } from "./redux-store";

const SETPROF = 'SET-PROFILE';
const UPDATESTATUS = 'SET-STATUS';
const POSTF = 'POST-FORM-newPostText';
const UPLOAD_PHOTO = 'UPLOAD-PHOTO';

type SetProfileActionType = {
    type: typeof SETPROF
    profile: object
};
type UpdateStatusActionType = {
    type: typeof UPDATESTATUS
    status: string
};
type PostFormActionType = {
    type: typeof POSTF
    content: string
};
type UploadPhotoActionType = {
    type: typeof UPLOAD_PHOTO
    image: string
};
type PostsDataType = {
    id: number,
    message: string
    likes: number
};
type ActionsTypes = SetProfileActionType | UpdateStatusActionType | PostFormActionType | UploadPhotoActionType;
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>;

let initialState = {
    postsData: [
        { id: 1, message: 'Hello', likes: 15 },
        { id: 2, message: 'Bonjour', likes: 30 },
        { id: 3, message: 'Привет', likes: 15000 },
    ] as Array<PostsDataType>,
    newPostText: '',
    profile: null as object | null,
    status: 'no status'
};

export type InitialStateType = typeof initialState;



let profileReducer = (state = initialState, action: ActionsTypes):InitialStateType => {

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
        case UPLOAD_PHOTO:
            return {
                ...state,
                profile: { ...state.profile, photos: action.image }
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


const setProfile = (profile: ProfileType): SetProfileActionType => ({ type: SETPROF, profile });
const updateStatusAC = (status: string): UpdateStatusActionType => ({ type: UPDATESTATUS, status });
export const postForm = (content: string): PostFormActionType => ({ type: POSTF, content });
const uploadPhoto = (image: string): UploadPhotoActionType => ({ type: UPLOAD_PHOTO, image });



export const setProfileThunk = (userID: string): ThunkType=> async (dispatch: Function) => {
    let data = await userProfile.showProfile(userID);
    dispatch(setProfile(data));
}

export const setStatusThunk = (status: string): ThunkType => async (dispatch: Function) => {
    let data = await userProfile.updateStatus(status);
    (data.resultCode === 0) &&
        dispatch(updateStatusAC(status))

}
export const getStatusThunk = (userID: string): ThunkType => async (dispatch: Function) => {
    let data = await userProfile.getStatus(userID)
    dispatch(updateStatusAC(data));
}

export const uploadPhotoThunk = (image: string): ThunkType => async (dispatch: Function) => {
    let data = await userProfile.uploadPhoto(image);
    (data.resultCode === 0) &&
        dispatch(uploadPhoto(data.data.photos));
}

export const updateProfileThunk = (profile: object): ThunkType => async (dispatch: Function, getState: Function) => {
    let data = await userProfile.updateProfile(profile);
    debugger;
    if (data.resultCode === 0) dispatch(setProfileThunk(getState().authMe.id))
    else {
        if (data.messages.length > 0) {
            dispatch(stopSubmit('editProfile', { _error: data.messages }))
            return Promise.reject(data.messages)
        }
    }

}

export default profileReducer;