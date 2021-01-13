import { SmileOutlined, SyncOutlined } from '@ant-design/icons';
import { Button, Col, Image, Popover, Row } from 'antd';
import Layout from 'antd/lib/layout/layout';
import React, { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { getAuthID } from '../../../redux/authMe-selectors';
import { startChatThunk } from '../../../redux/messages-reducer';
import { uploadPhotoThunk } from '../../../redux/profile-reducer';
import { getProfileObjectData } from '../../../redux/profile-selectors';
import { AppStateType } from '../../../redux/redux-store';
import { ProfileType } from '../../../types/types';
import Preloader from '../../common/Preloader/Preloader';
import { ProfileStatusWithHook } from '../ProfileStatus/ProfileStatusHook';
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
    let history = useHistory()

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
    const startMessaging = (userId: number) => {
        const location = {
            pathname: '/dialogs',
            state: { fromDashboard: true }
        }
        dispatch(startChatThunk(userId));
        history.push(location)
    }
    const content = (
        <div>Double click to change avatar photo</div>
    )

    return (
        <Layout className={cl.content}>
            <Row>
                <Col span={24}>
                    {(editMode && (authID === userId || !userId))
                        ? (<div>
                            <input type="file" accept="image/*" onChange={(e) => choosedPhoto(e)} />
                            <input onClick={uploadPhotoPreparation} type="button" value='Upload' />
                        </div>)
                        :
                        <Row className={cl.avatarFullNameStatus}>
                            <Col span={6} >
                                <Popover content={content} title="Tip" placement='bottomLeft'>
                                    <img
                                        className={cl.avatarImage}
                                        src={profileData.photos.small ? profileData.photos.small : avaDefault}
                                        alt="avatar"
                                        onDoubleClick={choosePhotoEdition} />
                                </Popover>
                            </Col>
                            <Col span={18} className={cl.colWithFullName}>
                                <Row>
                                    <div className={cl.fullname}>{profileData.fullName}</div>
                                </Row>
                                <Row>
                                    <Col span={12}>
                                        <div className={cl.status}><ProfileStatusWithHook isUserAuth={userId} /></div>
                                    </Col>
                                    <Col span={12}>
                                        <div>Looking for a job? {profileData.lookingForAJob ? <SyncOutlined spin /> : <SmileOutlined rotate={180} />} </div>
                                        <div> {profileData.lookingForAJobDescription}</div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    }
                </Col>

            </Row>
            <Row >
                <Col span={24} >
                    <div className={cl.description}>

                        {(userId) ?
                            <Button onClick={() => startMessaging(userId)}>Start Messaging</Button>
                            : null
                        }
                        <ProfileInfoEdit owner={authID === userId || !userId} />

                    </div>
                </Col>
            </Row>

        </Layout>
    );
}

const ProfileInfoMemoized = React.memo(ProfileInfo)

export default ProfileInfoMemoized;