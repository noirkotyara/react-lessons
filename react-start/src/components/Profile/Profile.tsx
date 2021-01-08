import React from 'react';
import { PropsType } from './ProfileContainer';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import cl from './Profile.module.css';
import ProfileInfoMemoized from './ProfileInfo/ProfileInfo';
import ProfileStatus from './ProfileStatus/ProfileStatus'; //class component
import ProfileStatusHook from './ProfileStatus/ProfileStatusHook';
import { AppStateType } from '../../redux/redux-store';
import { OwnPropsType } from './ProfileInfo/ProfileInfoEdit/ProfileEditForm';


const Profile: React.FC<PropsType & {store: AppStateType}> = (props) => {

    return (
        <div className={cl.content}>
            <ProfileInfoMemoized
                profileData={props.profile}
                userId={+props.match.params.userId}
                checkedAuth={props.authorizedUser}
                {...props} 
            />
            <ProfileStatusHook {...props} />
            <MyPostsContainer {...props} />
        </div>
    );
}

export default Profile;
