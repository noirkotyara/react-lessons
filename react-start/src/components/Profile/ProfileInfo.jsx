import React from 'react';
import cl from './ProfileInfo.module.css';
import Preloader from '../common/Preloader';
import sad from '../../assets/images/sad.png';
import happy from '../../assets/images/happy.png';

const ProfileInfo = (props) =>{
    if(!props.profileData){
        return <Preloader/>
    }
    return(
        <div className={cl.content}>
                <div className={cl.description}>
                    <img src={props.profileData.photos.small} alt=""/>
                    <ul>
    <li>{props.profileData.contacts.instagram}</li>
    <li>{props.profileData.contacts.vk}</li>
                    </ul>
    <div>{props.profileData.lookingForAJob ? <img src={happy} style={{width:'50px', height:'50px'}} alt=""></img> : <img src={sad} alt=""></img>}</div>
                </div>
               
            </div>
    );
}

export default ProfileInfo;