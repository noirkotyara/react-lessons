import React from 'react';
import cl from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import { useState } from 'react';
import avaDefault from './../../../assets/startPage/av.jpg';
import ProfileInfoEdit from './ProfileInfoEdit/ProfileInfoEdit';




const ProfileInfo = React.memo((props) => {
  
    const { checkedAuth, profileData, uploadPhoto, userId, updateProfile } = props;
    let [editMode, changeEditMode] = useState(false);
    let [photoFile, changePhotoFile] = useState('');
    if (!props.profileData) {
        return <Preloader />
    }
    let choosePhotoEdition = () => {
        changeEditMode(true);
    }
    let choosedPhoto = (file) => {
        changePhotoFile(file);
    }
    let uploadPhotoPreparation = () => {
        uploadPhoto(photoFile);
        changeEditMode(false);
    }

    return (
        <div className={cl.content}>
            <div className={cl.description}>

                {(editMode && (checkedAuth === userId || !userId))
                    ? (<div>
                        <input type="file" accept="image/*" onChange={(e) => choosedPhoto(e.target.files[0])} />
                        <input onClick={uploadPhotoPreparation} type="button" value='Upload' />
                    </div>)
                    :
                    <img style={{ width: '100px', height: '100px' }} src={profileData.photos.small ? profileData.photos.small : avaDefault} alt="avatar" onDoubleClick={choosePhotoEdition} />
                }
                <ProfileInfoEdit
                    owner={checkedAuth === userId || !userId}
                    profileData={profileData}
                    updateProfile={updateProfile} />

            </div>

        </div>
    );
});



export default ProfileInfo;