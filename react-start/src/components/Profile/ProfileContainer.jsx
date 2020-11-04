import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
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
    return {isAuthMe: state.authMe.isAuthMe}
}


let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

let ProfileContainerHOC = withAuthMe(ProfileContainer);
let ProfileContainerHOCRedirect = connect(mapStateToPropsRedirect,{})(ProfileContainerHOC);
let ProfileContainerWithRouter = withRouter(ProfileContainerHOCRedirect);
export default connect(mapStateToProps, {
    setProfile: setProfileThunk
})(ProfileContainerWithRouter);
