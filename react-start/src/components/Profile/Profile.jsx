import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import cl from './Profile.module.css';
import ProfileInfo from './ProfileInfo';


const Profile = (props) => {
    
    return (
        <div className={cl.content}>
             <div>
                    <img className={cl.back} src="https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png" alt='background'></img>
                </div>
            <ProfileInfo profileData={props.profile}/>
            <MyPostsContainer store={props.store} />
        </div>
    );
}

export default Profile;
