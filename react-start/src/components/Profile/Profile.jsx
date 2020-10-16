import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import cl from './Profile.module.css';
import ProfileInfo from './ProfileInfo';



const Profile = (props) =>{
    
    return(
        <div className={cl.content}>
                <ProfileInfo />
                <MyPostsContainer store={props.store} />
        </div>
    );
}

export default Profile;
//  mypostsContainer attr---->   profilePage={props.stateProfile} dispatch={props.dispatch}
// profile attr------>  stateProfile={props.store.getState().profilePage} dispatch={props.store.dispatch.bind(props.store)}