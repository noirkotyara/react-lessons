import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import cl from './Profile.module.css';
import ProfileInfo from './ProfileInfo';
import ProfileStatus from './ProfileStatus';


const Profile = (props) => {
    
    
    return (
        <div className={cl.content}>
            <ProfileInfo profileData={props.profile}/>
            <ProfileStatus {...props} />
            <MyPostsContainer store={props.store}  />
        </div>
    );
}

export default Profile;
