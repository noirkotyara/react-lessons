import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { getStatusThunk, actions, setProfileThunk, setStatusThunk, updateProfileThunk, uploadPhotoThunk } from '../../redux/profile-reducer';
import { AppStateType } from '../../redux/redux-store';
import { ProfileType } from '../../types/types';
import Preloader from '../common/Preloader/Preloader';
import { withAuthMe } from '../hoc/hoc';
import Profile from './Profile';

type MapStateToPropsRedirectType = {
     isAuthMe: boolean
}

type MapStateToPropsType =  {
        profile: ProfileType
        status: string
        authorizedUser: number
        authorized: boolean
}

type StateType = {

}
type PropsType = MapStateToPropsRedirectType & MapStateToPropsType & MapDispatchToPropsType & RouteComponentProps

class ProfileContainer extends React.Component<PropsType, StateType> {
  refreshProfile = () => {
      //@ts-ignore
        let userID = this.props.match.params.userId;
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
        //@ts-ignore
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
// <P extends RouteComponentProps<any>, C extends React.ComponentType<P>>
type MapDispatchToPropsType = {
        setProfile: (userID: number) => void
        updateStatus: () => void
        getStatus: (userID: number) => void
        postForm: () => void
        uploadPhoto: () => void
        updateProfile: () => void
}
export default compose(
    withRouter,
    connect(mapStateToProps, {
        setProfile: setProfileThunk,
        updateStatus: setStatusThunk,
        getStatus: getStatusThunk,
        postForm: actions.postForm,
        uploadPhoto: uploadPhotoThunk,
        updateProfile: updateProfileThunk
    }),
    connect(mapStateToPropsRedirect, {}),
    withAuthMe
)(ProfileContainer);

