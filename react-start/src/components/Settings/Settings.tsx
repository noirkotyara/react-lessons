import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthID } from '../../redux/authMe-selectors';
import { getStatusThunk, setProfileThunk } from '../../redux/profile-reducer';
import { getProfileObjectData } from '../../redux/profile-selectors';
import { AppStateType } from '../../redux/redux-store';
import { ProfileType } from '../../types/types';
import Preloader from '../common/Preloader/Preloader';
import { ChangePhoto } from './ChangePhoto';
import EditProfileMemoized from './EditProfile';
import styles from './Settings.module.scss';

const Settings = () => {
    const authorizedUser = useSelector(getAuthID);
    const dispatch = useDispatch();
    useEffect(() => {
        if(authorizedUser){
            dispatch(setProfileThunk(authorizedUser))
            dispatch(getStatusThunk(authorizedUser))
        }
    }, [])
    const profileData = useSelector<AppStateType, ProfileType>(getProfileObjectData)
    if (profileData === null) return <Preloader />
    else {
        return (
            <div>
                <div className={styles.title}>Settings</div>
                <ChangePhoto />
                <EditProfileMemoized />
            </div>
        );
    }

}

export default Settings;

