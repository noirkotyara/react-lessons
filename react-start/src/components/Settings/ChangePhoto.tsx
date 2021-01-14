import { Col, Popover, Row } from "antd";
import Layout from "antd/lib/layout/layout";
import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RouteComponentProps, useRouteMatch } from "react-router-dom";
import { getAuthID } from "../../redux/authMe-selectors";
import { setProfileThunk, uploadPhotoThunk } from "../../redux/profile-reducer";
import cl from './../Profile/ProfileInfo/ProfileInfo.module.scss';
import React from 'react'
import { getProfileObjectData } from "../../redux/profile-selectors";
import { ProfileType } from "../../types/types";
import { AppStateType } from "../../redux/redux-store";
import avaDefault from './../../assets/startPage/av.jpg';
import { authMeSuccessThunk } from "../../redux/authMe";
import Preloader from "../common/Preloader/Preloader";

type PathParamsType = {
    userId: string
}

export const ChangePhoto: React.FC<{}> = () => {

    useEffect(() => {
        debugger
        dispatch(authMeSuccessThunk)
        dispatch(setProfileThunk(userId))
    }, [])

    let [editMode, changeEditMode] = useState(false);
    let match = useRouteMatch<PathParamsType>()
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
    if(profileData === null) return <Preloader/>
    else return (<Layout>
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
            
            </Row>
            
}

        </Layout>
    )
}