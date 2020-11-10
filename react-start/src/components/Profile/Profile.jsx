import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import cl from './Profile.module.css';
import ProfileInfo from './ProfileInfo';
import ProfileStatus from './ProfileStatus';


const Profile = (props) => {
    let onSubmit = (formData) => {
        props.postForm(formData.newPostText);
    }
    
    return (
        <div className={cl.content}>
            <ProfileInfo profileData={props.profile}/>
            <ProfileStatus {...props} />
            <MyPostsContainer store={props.store} onSubmit={onSubmit} />
        </div>
    );
}

export default Profile;
