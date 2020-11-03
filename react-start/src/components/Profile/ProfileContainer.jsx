import React from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { setProfileThunk } from '../../redux/profile-reducer';
import Profile from './Profile';
class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.setProfile(this.props.match.params.userId);
    }
    render() {
        if (!this.props.isAuthMe) {
            return <Redirect to='/login'></Redirect>
        }
        else {
            return <Profile profile={this.props.profile} />
        }


    }
}


let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isAuthMe: state.authMe.isAuthMe
    }
}

let ProfileContainerWithRouter = withRouter(ProfileContainer);
export default connect(mapStateToProps, {
    setProfile: setProfileThunk
})(ProfileContainerWithRouter);
