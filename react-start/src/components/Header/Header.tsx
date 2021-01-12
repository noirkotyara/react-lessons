import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { logoutThunk } from '../../redux/authMe';
import { getAuthMe } from '../../redux/authMe-selectors';
import { AppStateType } from '../../redux/redux-store';
import logo from './../../assets/startPage/logo2.jpg';
import cl from './Header.module.css';
import { Layout, Row, Col, Button } from 'antd';
import { Typography } from 'antd';




export const Header: React.FC<{}> = () => {

    const isAuthMe = useSelector<AppStateType, boolean>(getAuthMe)
    const dispatch = useDispatch();

    const logout = useCallback(
        () => dispatch(logoutThunk()),
        [dispatch])
    const { Header } = Layout;
    const { Title, Text } = Typography;
    return (<>
        <Header className="site-layout-background" >
            <Row>
                
                <Col span={20}><Text type="warning" className={cl.name} >HellDream</Text></Col>
                <Col span={4}  >
                    {isAuthMe
                        ? <Button onClick={logout}>Log Out</Button>
                        : <Button><Link to='login/'>Log In</Link></Button>
                    }
                </Col>
            </Row>
        </Header>


        {/* <header className={cl.header}>
            <div className={cl.loginPhrase}>
                {isAuthMe
                    ? <div onClick={logout} className={cl.userLogin}>Click to logOut </div>
                    : <div className={cl.logIn}><NavLink to='login/'><div>Log In</div> </NavLink></div>
                }
            </div>
            <div className={cl.name}>HellDream</div>
            <div><img className={cl.logo} src={logo} alt="logo" /></div>

        </header> */}
    </>
    );
}
