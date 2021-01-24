import { Col, Popover, Row } from "antd";
import Layout from "antd/lib/layout/layout";
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { authMeSuccessThunk } from "../../redux/authMe";
import { getAuthID } from "../../redux/authMe-selectors";
import { setProfileThunk, uploadPhotoThunk } from "../../redux/profile-reducer";
import { getProfileObjectData } from "../../redux/profile-selectors";
import { AppStateType } from "../../redux/redux-store";
import { ProfileType } from "../../types/types";
import Preloader from "../common/Preloader/Preloader";
import avaDefault from './../../assets/startPage/av.jpg';
import styles from './Settings.module.scss';



export const ChangePhoto: React.FC<{}> = () => {
const DemoBox = (props: any) => <p className={`height-${props.value} ${styles.explanation}` }>{props.children}</p>;
    useEffect(() => {
        dispatch(authMeSuccessThunk)
        dispatch(setProfileThunk(userId))
    }, [])

    let [editMode, changeEditMode] = useState(false);
    const dispatch = useDispatch()
    const profileData = useSelector<AppStateType, ProfileType>(getProfileObjectData)
    let userId = useSelector<AppStateType, number>(getAuthID)
    let [photoFile, changePhotoFile] = useState<any>('');
    const authID = useSelector(getAuthID)
    
    
    let choosedPhoto = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            changePhotoFile(e.target.files[0])
        }
    }

    let choosePhotoEdition = () => {
        changeEditMode(true);
    }

    let uploadPhotoPreparation = () => {
        //photoFile typeScript is annoying 
        dispatch(uploadPhotoThunk(photoFile))
        changeEditMode(false);
    }
    const content = (
        <div>Double click to change avatar photo</div>
    )
    return (<Layout>
        
        {(editMode && (authID === userId || !userId))
            ? (<div>
                <input type="file" accept="image/*" onChange={(e) => choosedPhoto(e)} />
                <input onClick={uploadPhotoPreparation} type="button" value='Upload' />
            </div>)
            :
            <Row className={styles.avatar_container} align="middle">
                <Col span={12}>
                <DemoBox value={150}>Your Avatar:</DemoBox>
                </Col>
                <Col span={12} >
                    <Popover content={content} title="Tip" placement='bottomLeft'>
                        <img
                            className={styles.avatarImage}
                            src={profileData.photos.small ? profileData.photos.small : avaDefault}
                            alt="avatar"
                            onDoubleClick={choosePhotoEdition} />
                    </Popover>
                </Col>
            
            </Row>
            
}

        </Layout>
    )
}