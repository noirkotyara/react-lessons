import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import cl from './Profile.module.css';
import ProfileInfo from './ProfileInfo';



const Profile = (props) =>{
    
    return(
        <div className={cl.content}>
                <ProfileInfo />
                <MyPosts profilePage={props.stateProfile} dispatch={props.dispatch} />
        </div>
    );
}

export default Profile;