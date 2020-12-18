import React, { useState } from 'react';
import Contact from '../Contacts';
import ProfileEditForm from './ProfileEditForm';
import sad from '../../../../assets/images/sad.png';
import happy from '../../../../assets/images/happy.png';
import cl from './../ProfileInfo.module.css';

const ProfileInfoEdit = ({ owner, profileData, updateProfile }) => {
    let [editMode, changeEditMode] = useState(false);
    let onSubmit = (dataFlow) => {
        let promise = updateProfile(dataFlow);
        promise.then(() => changeEditMode(false));

    }
    return (<>
        <div>{owner ? 'true' : 'false'}</div>
        <div>
            {
                (editMode && owner)
                    ? <ProfileEditForm
                        initialValues={profileData}
                        profileData={profileData}
                        onSubmit={onSubmit} />
                    : owner &&
                    <div>
                        <button onClick={() => changeEditMode(true)}>Edit Profile</button>
                        <div>{profileData.fullName}</div>
                        <div>{profileData.aboutMe}</div>
                        <div className={cl.contacts}>
                            {Object.keys(profileData.contacts).map((key) => {
                                return <Contact key={key} property={key} value={profileData.contacts[key]} />
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