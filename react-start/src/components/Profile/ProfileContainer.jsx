import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { getStatusThunk, postForm, setProfileThunk, setStatusThunk } from '../../redux/profile-reducer';
import { withAuthMe } from '../hoc/hoc';
import Profile from './Profile';

class ProfileContainer extends React.Component {
    componentDidMount() {
        debugger;
        let userID = this.props.match.params.userId;
        !userID && (userID = this.props.authorizedUser) 
        this.props.setProfile(userID);
        this.props.getStatus(userID);
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
        authorizedUser: state.authMe.userId,
        authorized: state.authMe.isAuthMe
    }
}

export default compose(
    connect(mapStateToProps, {
        setProfile: setProfileThunk,
        updateStatus: setStatusThunk,
        getStatus: getStatusThunk,
        postForm: postForm
        
    }),
    withRouter,
    connect(mapStateToPropsRedirect, {}),
    withAuthMe
)(ProfileContainer);

