import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { getStatusThunk, postForm, setProfileThunk, setStatusThunk, updateProfileThunk, uploadPhotoThunk } from '../../redux/profile-reducer';
import Preloader from '../common/Preloader/Preloader';
import { withAuthMe } from '../hoc/hoc';
import Profile from './Profile';

class ProfileContainer extends React.Component {
  refreshProfile = () => {
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
 componentDidUpdate(prevProps, prevState){
        if (prevProps.match.params.userId != this.props.match.params.userId){
        this.refreshProfile();
        }
    }
    render() {
        return <Profile {...this.props} />
    }
}

let mapStateToPropsRedirect = (state) => {
    return { isAuthMe: state.authMe.isAuthMe }
}


let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUser: state.authMe.id,
        authorized: state.authMe.isAuthMe
    }
}

export default compose(
    connect(mapStateToProps, {
        setProfile: setProfileThunk,
        updateStatus: setStatusThunk,
        getStatus: getStatusThunk,
        postForm: postForm,
        uploadPhoto: uploadPhotoThunk,
        updateProfile: updateProfileThunk
        
    }),
    withRouter,
    connect(mapStateToPropsRedirect, {}),
    withAuthMe
)(ProfileContainer);

