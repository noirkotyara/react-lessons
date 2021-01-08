import React, { Dispatch, useState } from 'react';
import Contact from '../Contacts';
import ProfileEditForm, { FormProfileType } from './ProfileEditForm';
import sad from '../../../../assets/images/sad.png';
import happy from '../../../../assets/images/happy.png';
import cl from './../ProfileInfo.module.scss';
import { FormAction, reset } from 'redux-form';
import { ContactsType, ProfileType } from '../../../../types/types';

type OwnPropsType = {
    owner: boolean
    profileData: ProfileType 
    updateProfile: (dataFlow: FormProfileType) => Promise<void>
}

const ProfileInfoEdit: React.FC<OwnPropsType> = ({ owner, profileData, updateProfile }) => {
    let [editMode, changeEditMode] = useState(false);
    
    let onSubmit = (dataFlow: FormProfileType, dispatch: Dispatch<FormAction>) => {
        let promise = updateProfile(dataFlow);
        promise.then(() => changeEditMode(false));
        dispatch(reset('editProfile'));

    }
    return (<>
        <div>
            {
                (editMode && owner)
                    ? <ProfileEditForm
                        //@ts-ignore I need to fix this shit
                        initialValues={profileData}
                        profileData={profileData}
                        onSubmit={onSubmit} />
                    : owner &&
                    <div>
                        <button className={cl.editButton} onClick={() => changeEditMode(true)}>Edit Profile</button>
                        <div className={cl.fullname}>{profileData.fullName}</div>
                        <div className={cl.aboutMe}>{profileData.aboutMe}</div>
                        <div className={cl.contacts}>
                            {Object
                            .keys(profileData.contacts)
                            .map((key) => {
                                return <Contact key={key} property={key} value={profileData.contacts[key as keyof ContactsType]  } />
                            })
                            }
                        </div>

                        <div>lookingForAJob:  <img src={profileData.lookingForAJob ? happy : sad} style={{ width: '50px', height: '50px' }} alt=""></img> </div>
                        <div>Description: {profileData.lookingForAJobDescription}</div>

                    </div>
            }
        </div>
    </>)
}
export default ProfileInfoEdit;