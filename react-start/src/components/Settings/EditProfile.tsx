import { SmileOutlined, SyncOutlined } from "@ant-design/icons";
import { Button, Col, Popover, Row } from "antd";
import Layout from "antd/lib/layout/layout";
import React, { ChangeEvent, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getAuthID } from "../../redux/authMe-selectors";
import { startChatThunk } from "../../redux/messages-reducer";
import { uploadPhotoThunk } from "../../redux/profile-reducer";
import { getProfileObjectData } from "../../redux/profile-selectors";
import { AppStateType } from "../../redux/redux-store";
import { ProfileType } from "../../types/types";
import Preloader from "../common/Preloader/Preloader";
import { ProfileInfoEdit } from "../Profile/ProfileInfo/ProfileInfoEdit/ProfileInfoEdit";
import { PathParamsType } from "../Profile/ProfilePage";
import { ProfileStatusWithHook } from "../Profile/ProfileStatus/ProfileStatusHook";
import styles from './Settings.module.scss';
import avaDefault from './../../assets/images/zorro.jpg';

const EditProfile: React.FC<{}> = () => {
    const params = useParams<PathParamsType>()
    let userId = Number(params.userId);
    const authID = useSelector(getAuthID)
    const profileData = useSelector<AppStateType, ProfileType>(getProfileObjectData)
    const dispatch = useDispatch()
    let history = useHistory()

    let [editMode, changeEditMode] = useState(false);
    //that`s why here is <any>

   


    const startMessaging = (userId: number) => {
        const location = {
            pathname: '/dialogs',
            state: { fromDashboard: true }
        }
        dispatch(startChatThunk(userId));
        history.push(location)
    }

    const DemoBox = (props: any) => <p className={`height-${props.value} ${styles.explanation}`}>{props.children}</p>;
    return (
        <Layout className={styles.profile_container}>
            <Row align="middle">
                <Col span={12}>
                    <DemoBox value={150}>Your Profile Info:</DemoBox>
                </Col>
                <Col span={12}>
                    <Row className={styles.profileData}>
                        <Col span={18} className={styles.colWithFullName}>
                            <Row>
                                <div className={styles.fullname}>{profileData.fullName}</div>
                            </Row>
                            <Row>
                                <Col span={12}>
                                    <div className={styles.status}><ProfileStatusWithHook isUserAuth={userId} /></div>
                                </Col>
                                <Col span={12}>
                                    <div>Looking for a job? {profileData.lookingForAJob ? <SyncOutlined spin /> : <SmileOutlined rotate={180} />} </div>
                                    <div> {profileData.lookingForAJobDescription}</div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                </Col>

            </Row>
            <Row >
                <Col span={24} >
                    <div className={styles.description}>

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

const EditProfileMemoized = React.memo(EditProfile)

export default EditProfileMemoized;