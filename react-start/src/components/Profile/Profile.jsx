import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import cl from './Profile.module.css';
import ProfileInfo from './ProfileInfo';
import ProfileStatus from './ProfileStatus'; //class component
import ProfileStatusHook from './ProfileStatusHook';


const Profile = (props) => {

    return (
        <div className={cl.content}>
            <ProfileInfo profileData={props.profile} userId={props.match.params.userId} uploadPhoto={props.uploadPhoto}/>
            <ProfileStatusHook {...props} />
            <MyPostsContainer store={props.store}  />
        </div>
    );
}

export default Profile;
