import React from 'react';
import { MyPosts } from './MyPosts/MyPosts';
import cl from './Profile.module.css';
import { WithRouteProps } from './ProfilePage';
import ProfileInfoMemoized from './ProfileInfo/ProfileInfo';
import { ProfileStatusWithHook } from './ProfileStatus/ProfileStatusHook';



const Profile: React.FC<WithRouteProps> = (props) => {

    return (
        <div className={cl.content}>
            <ProfileInfoMemoized
                userId={+props.match.params.userId}
            />
            <ProfileStatusWithHook
                isUserAuth={+props.match.params.userId}
            />
            <MyPosts />
        </div>
    );
}

export default Profile;
