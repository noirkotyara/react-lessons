import React, { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthID } from '../../../redux/authMe-selectors';
import { uploadPhotoThunk } from '../../../redux/profile-reducer';
import { getProfileObjectData } from '../../../redux/profile-selectors';
import { AppStateType } from '../../../redux/redux-store';
import { ProfileType } from '../../../types/types';
import Preloader from '../../common/Preloader/Preloader';
import avaDefault from './../../../assets/startPage/av.jpg';
import cl from './ProfileInfo.module.scss';
import { ProfileInfoEdit } from './ProfileInfoEdit/ProfileInfoEdit';

type PropsType = {
    userId: number
}

const ProfileInfo: React.FC<PropsType> = ({ userId }) => {

    const authID = useSelector(getAuthID)
    const profileData = useSelector<AppStateType, ProfileType>(getProfileObjectData)
    const dispatch = useDispatch()
    

    let [editMode, changeEditMode] = useState(false);
    //that`s why here is <any>
    let [photoFile, changePhotoFile] = useState<any>('');
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
        //photoFile typeScript is annoying 
        dispatch(uploadPhotoThunk(photoFile))
        changeEditMode(false);
    }

    return (
        <div className={cl.content}>
            <div className={cl.description}>

                {(editMode && (authID === userId || !userId))
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
                <ProfileInfoEdit owner={authID === userId || !userId} />

            </div>

        </div>
    );
}

const ProfileInfoMemoized = React.memo(ProfileInfo)

export default ProfileInfoMemoized;