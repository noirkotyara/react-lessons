import React from 'react';
import { MyPosts } from './MyPosts/MyPosts';
import cl from './Profile.module.css';
import ProfileInfoMemoized from './ProfileInfo/ProfileInfo';
import { ProfileStatusWithHook } from './ProfileStatus/ProfileStatusHook';
import { useParams } from 'react-router-dom';
import { PathParamsType } from './ProfilePage';



const Profile: React.FC<{}> = (props) => {

    return (
        <div className={cl.content}>
            <ProfileInfoMemoized />
            <MyPosts />
        </div>
    );
}

export default Profile;
