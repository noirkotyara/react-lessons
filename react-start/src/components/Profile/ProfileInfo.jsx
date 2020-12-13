import React from 'react';
import cl from './ProfileInfo.module.css';
import Preloader from '../common/Preloader/Preloader';
import sad from '../../assets/images/sad.png';
import happy from '../../assets/images/happy.png';
import { useState } from 'react';

const ProfileInfo = React.memo((props) => {
   
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
    let uploadPhoto = () => {
        props.uploadPhoto(photoFile);
        changeEditMode(false);
    }
    // let photoFileURL = URL.createObjectURL(photoFile);
    return (
        <div className={cl.content}>
            <div className={cl.description}>
                {editMode
                    ? (<div>
                        <input type="file" accept="image/*" onChange={(e) => choosedPhoto(e.target.files[0])} />
                        <input onClick={uploadPhoto} type="button" value='Upload'/>
                   </div> )
                    : <img src={props.profileData.photos.small ? props.profileData.photos.small : 'https://static.wikia.nocookie.net/discord-wikia/images/5/5e/Default.png/revision/latest/scale-to-width-down/340?cb=20191215094354&path-prefix=ru'} alt="avatar" onDoubleClick={choosePhotoEdition} />
                    }
                    <div><img src={() => URL.createObjectURL(photoFile)} /></div>
                 
                   <ul>
                    <li>{props.profileData.contacts.instagram}</li>
                    <li>{props.profileData.contacts.vk}</li>
                </ul>
                <div>{props.profileData.lookingForAJob ? <img src={happy} style={{ width: '50px', height: '50px' }} alt=""></img> : <img src={sad} style={{ width: '50px', height: '50px' }} alt=""></img>}</div>
            </div>

        </div>
    );
});

export default ProfileInfo;