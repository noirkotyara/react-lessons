import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { getStatusThunk, actions, setProfileThunk, setStatusThunk, updateProfileThunk, uploadPhotoThunk } from '../../redux/profile-reducer';
import { AppStateType, BasicComponentType } from '../../redux/redux-store';
import { ProfileType } from '../../types/types';
import Preloader from '../common/Preloader/Preloader';
import { withAuthMe } from '../hoc/hoc';
import Profile from './Profile';

class ProfileContainer extends React.Component<PropsType & {store: AppStateType}, StateType> {
  refreshProfile = () => {
    // : number | null
        let userID = +this.props.match.params.userId;
        if(!userID){
            userID = this.props.authorizedUser;
            if(!userID) return<Preloader/>
        } 
        this.props.setProfile(userID);
        this.props.getStatus(userID);
  }
    componentDidMount() {  
        this.refreshProfile();
    }
    componentDidUpdate(prevProps: PropsType){
        if (prevProps.match.params.userId != this.props.match.params.userId){
        this.refreshProfile();
        }
    }
    render() {
        return <Profile {...this.props} />
    }
}

let mapStateToPropsRedirect = (state: AppStateType): MapStateToPropsRedirectType => {
    return { isAuthMe: state.authMe.isAuthMe }
}


let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUser: state.authMe.id,
        authorized: state.authMe.isAuthMe
    }
}
//todo: connect is not typized
export default compose<BasicComponentType>(
    withRouter,
    connect(mapStateToProps, {
        setProfile: setProfileThunk,
        updateStatus: setStatusThunk,
        getStatus: getStatusThunk,
        postForm: actions.postForm,
        uploadPhoto: uploadPhotoThunk,
        updateProfile: updateProfileThunk
    }),
    connect<MapStateToPropsRedirectType, {}, {}, AppStateType>(mapStateToPropsRedirect, {}),
    withAuthMe
)(ProfileContainer);

//types

export type MapStateToPropsRedirectType = {
    isAuthMe: boolean
}

export type MapStateToPropsType =  {
       profile: ProfileType
       status: string
       authorizedUser: number
       authorized: boolean
}
// <P extends RouteComponentProps<any>, C extends React.ComponentType<P>>
export type MapDispatchToPropsType = {
    updateStatus: (status: string) => void 
    postForm?: () => void
    uploadPhoto: (file: File | string) => void
    updateProfile: (dataFlow: FormProfileType) => Promise<any>
}
type StateType = {}
export type PathParamsType = {
   userId: string
}
type FormProfileType = {
    profileData: ProfileType
}

type OwnPropsType = {
    setProfile: (userID: number) => void
    getStatus: (userID: number) => void
}
export type PropsType = OwnPropsType & MapStateToPropsRedirectType & MapStateToPropsType & MapDispatchToPropsType & RouteComponentProps<PathParamsType>

