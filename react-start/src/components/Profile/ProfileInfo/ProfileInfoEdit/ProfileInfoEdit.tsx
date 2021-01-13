import React, { Dispatch, useState } from 'react';
import Contact from '../Contacts';
import ProfileEditForm, { FormProfileType } from './ProfileEditForm';
import sad from '../../../../assets/images/sad.png';
import happy from '../../../../assets/images/happy.png';
import cl from './../ProfileInfo.module.scss';
import { FormAction, reset } from 'redux-form';
import { ContactsType, ProfileType } from '../../../../types/types';
import { getProfileObjectData } from '../../../../redux/profile-selectors';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../../../redux/redux-store';
import { updateProfileThunk } from '../../../../redux/profile-reducer';
import { Button, Col, Row } from 'antd';

type PropsType = {
    owner: boolean
}

export const ProfileInfoEdit: React.FC<PropsType> = ({ owner }) => {
    let [editMode, changeEditMode] = useState(false);

    const profileData = useSelector<AppStateType, ProfileType>(getProfileObjectData)

    const dispatchR = useDispatch()

    let onSubmit = (dataFlow: FormProfileType, dispatch: Dispatch<FormAction>) => {
        // typeScript is annoying that`s why there is an <any>
        let promise: any = dispatchR(updateProfileThunk(dataFlow))
        promise.then(() => changeEditMode(false))
        dispatch(reset('editProfile'));

    }
    return (<>
        <div>
            {
                (editMode && owner)
                    ? <ProfileEditForm
                        //@ts-ignore I need to fix this shit
                        initialValues={profileData}
                        onSubmit={onSubmit} />
                    : owner &&
                    <div>
                        <Row className={cl.aboutMe} >
                            <Col span={6} offset={6}>
                                <div>About me:</div>
                            </Col>
                            <Col span={12}>
                                <div className={cl.aboutMeContent} >{profileData.aboutMe}</div>
                            </Col>
                        </Row>
                        <Row>
                           <Col span={24}>
                               <div> Where to find me: </div>
                           </Col>  
                        </Row>

                        <Row className={cl.links}>
                            <Col span={24}>
                                <div className={cl.contacts}>
                                    {Object
                                        .keys(profileData.contacts)
                                        .map((key) => {
                                            return <Contact key={key} property={key} value={profileData.contacts[key as keyof ContactsType]} />
                                        })
                                    }
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col span={24}>
                                <Button className={cl.editButton} onClick={() => changeEditMode(true)}>Edit Profile</Button>
                            </Col>
                        </Row>
                        
                    </div>
            }
        </div>
    </>)
}
