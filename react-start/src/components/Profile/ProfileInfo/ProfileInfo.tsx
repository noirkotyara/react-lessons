import React, { ChangeEvent } from 'react';
import cl from './ProfileInfo.module.scss';
import Preloader from '../../common/Preloader/Preloader';
import { useState } from 'react';
import avaDefault from './../../../assets/startPage/av.jpg';
import ProfileInfoEdit from './ProfileInfoEdit/ProfileInfoEdit';
import { ProfileType } from '../../../types/types';
import { MapDispatchToPropsType } from '../ProfileContainer';

type OwnPropsType = {
    checkedAuth: number
    profileData: ProfileType
    userId: number
}

const ProfileInfo: React.FC<OwnPropsType & MapDispatchToPropsType> = ({ checkedAuth, profileData, uploadPhoto, userId, updateProfile }) => {

    let [editMode, changeEditMode] = useState(false);
    let [photoFile, changePhotoFile] = useState<File | string>('');
    if (!profileData) {
        return <Preloader />
    }
    let choosePhotoEdition = () => {
        changeEditMode(true);
    }
    let choosedPhoto = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            changePhotoFile(e.target.files[0])
        }
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
                        <input type="file" accept="image/*" onChange={(e) => choosedPhoto(e)} />
                        <input onClick={uploadPhotoPreparation} type="button" value='Upload' />
                    </div>)
                    :
                    <img
                        style={{ width: '100px', height: '100px' }}
                        src={profileData.photos.small ? profileData.photos.small : avaDefault}
                        alt="avatar"
                        onDoubleClick={choosePhotoEdition} />
                }
                <ProfileInfoEdit
                    owner={checkedAuth === userId || !userId}
                    profileData={profileData}
                    updateProfile={updateProfile} />

            </div>

        </div>
    );
}

const ProfileInfoMemoized = React.memo(ProfileInfo);

export default ProfileInfoMemoized;