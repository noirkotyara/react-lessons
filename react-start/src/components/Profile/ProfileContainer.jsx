import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { setProfileThunk } from '../../redux/profile-reducer';
import { withAuthMe } from '../hoc/hoc';
import Profile from './Profile';

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.setProfile(this.props.match.params.userId);
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
        profile: state.profilePage.profile
    }
}

export default compose(
    connect(mapStateToProps, {
        setProfile: setProfileThunk
    }),
    withRouter,
    connect(mapStateToPropsRedirect, {})
    // withAuthMe
)(ProfileContainer);
