import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setProfile } from '../../redux/profile-reducer';
import Profile from './Profile';
class ProfileContainer extends React.Component {
    componentDidMount(){
        let userID = this.props.match.params.userId;
        if(!userID){userID=2}
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`)
            .then(response => { 
                this.props.setProfile(response.data);
            });
    }
    render(){
        
        return <Profile profile={this.props.profile} />
    }
}


let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

let ProfileContainerWithRouter = withRouter(ProfileContainer);
export default connect(mapStateToProps, {
    setProfile
})(ProfileContainerWithRouter);
