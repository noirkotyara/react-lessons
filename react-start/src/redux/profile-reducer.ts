import { FormAction, stopSubmit } from "redux-form";
import { ResultCodeType, userProfile } from "../api/api";
import { ProfileType } from "../types/types";
import { BasicThunkType, InferActionsType } from "./redux-store";

const SETPROF = 'SN/PROFILE/SET-PROFILE';
const UPDATESTATUS = 'SN/PROFILE/SET-STATUS';
const POSTF = 'SN/PROFILE/POST-FORM-newPostText';
const UPLOAD_PHOTO = 'SN/PROFILE/UPLOAD-PHOTO';

let initialState = {
    postsData: [
        { id: 1, message: 'Hello', likes: 15 },
        { id: 2, message: 'Bonjour', likes: 30 },
        { id: 3, message: 'Привет', likes: 15000 },
    ] as Array<PostsDataType>,
    // newPostText: '',
    profile: null as object | null,
    status: 'no status' 
};


const profileReducer = (state = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case POSTF:
            let newPost = {
                id: 5,
                message: action.content,
                likes: 0
            }
            return {
                ...state,
                postsData: [...state.postsData, newPost]
            }
        case SETPROF:
            return {
                ...state,
                profile: action.profile
            }
        case UPLOAD_PHOTO:
            return {
                ...state,
                profile: { ...state.profile, photos: action.image }
            }
        case UPDATESTATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
}


export const actions = {
    setProfile: (profile: ProfileType) => ({ type: SETPROF, profile } as const),
    updateStatusAC: (status: string) => ({ type: UPDATESTATUS, status } as const),
    postForm: (content: string) => ({ type: POSTF, content } as const),
    uploadPhoto: (image: string) => ({ type: UPLOAD_PHOTO, image } as const)
}

export const setProfileThunk = (userID: number): ThunkType => async (dispatch) => {
    let data = await userProfile.showProfile(userID);
    dispatch(actions.setProfile(data));
}

export const setStatusThunk = (status: string): ThunkType => async (dispatch) => {
    //обработка ошибок
    // try
    // {
        let data = await userProfile.updateStatus(status);
    (data.resultCode === ResultCodeType.Success) &&
        dispatch(actions.updateStatusAC(status))
    // }
    // catch(error)
    // {
    //     alert(error)
    // }
    

}
export const getStatusThunk = (userID: number): ThunkType => async (dispatch) => {
    let data = await userProfile.getStatus(userID)
    dispatch(actions.updateStatusAC(data));
}

export const uploadPhotoThunk = (image: File): ThunkType => async (dispatch) => {
    let data = await userProfile.uploadPhoto(image);
    (data.resultCode === ResultCodeType.Success) &&
        dispatch(actions.uploadPhoto(data.data.photos));
}

export const updateProfileThunk = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
    let data = await userProfile.updateProfile(profile);
    if (data.resultCode === 0) dispatch(setProfileThunk(getState().authMe.id))
    else {
        if (data.messages.length > 0) {
            dispatch(stopSubmit('editProfile', { _error: data.messages }))
            return Promise.reject(data.messages)
        }
    }

}

export default profileReducer;

//types 
export type PostsDataType = {
    id: number
    message: string
    likes: number
}

type ThunkType = BasicThunkType<ActionsType | FormAction>
export type InitialStateType = typeof initialState
type ActionsType = InferActionsType<typeof actions>