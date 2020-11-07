import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { getStatusThunk, setProfileThunk, setStatusThunk } from '../../redux/profile-reducer';
import { withAuthMe } from '../hoc/hoc';
import Profile from './Profile';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userID = this.props.match.params.userId;
        this.props.setProfile(userID);
        // if(userID === undefined){ userID = 12341 }    
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
        status: state.profilePage.status
    }
}

export default compose(
    connect(mapStateToProps, {
        setProfile: setProfileThunk,
        updateStatus: setStatusThunk,
        getStatus: getStatusThunk
    }),
    withRouter,
    connect(mapStateToPropsRedirect, {})
    // withAuthMe
)(ProfileContainer);
