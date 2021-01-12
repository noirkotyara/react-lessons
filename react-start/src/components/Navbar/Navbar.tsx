import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { AppStateType } from '../../redux/redux-store';
import { FriendsList } from '../../redux/sideBar-reducer';
import { getFriends } from '../../redux/sideBar-selectors';
import Friends from './Friends/Friends';
import cl from './Navbar.module.css';
import {
    PieChartOutlined,
    FileOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';

export const Navbar: React.FC<{}> = () => {

    const { Sider } = Layout;
    const [collapsed, setCollapsed] = useState(false)
    let onCollapse = (collapsed: boolean) => {
        setCollapsed(collapsed)
    };
    const { SubMenu } = Menu;
    const friendsList = useSelector<AppStateType, Array<FriendsList>>(getFriends)

    // let friendsListComp = friendsList.map(fff => <Friends key={fff.id} id={fff.id} name={fff.name} />);
    return (
        
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}  >
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item key="1" icon={<PieChartOutlined />} style={{margin: '0'}}>
                    Starter Page
            </Menu.Item>
                <SubMenu key="sub1" icon={<UserOutlined />} title="Profile">
                    <Menu.Item key="2"><Link to='/profile'>My Profile</Link></Menu.Item>
                    <Menu.Item key="3"><Link to='/music'>Music</Link></Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<UserOutlined />} title="Chats">
                <Menu.Item key="4" icon={<PieChartOutlined />}>
                    <Link to='/dialogs'>Personal Messages</Link>
                </Menu.Item>
                <Menu.Item key="5" icon={<PieChartOutlined />}>
                    <Link to='/publicchat'>Public Chat</Link>
                </Menu.Item>
                </SubMenu>
                <Menu.Item key="6" icon={<PieChartOutlined />}>
                    <Link to='/users'>Users</Link>
                </Menu.Item>
                <Menu.Item key="7" icon={<FileOutlined />}>
                    <Link to='/news'>News</Link>
                </Menu.Item>
                <Menu.Item key="8" icon={<FileOutlined />}>
                    <Link to='/settings'>Settings</Link>
                </Menu.Item>
            </Menu>
        </Sider>
        //     <div className={cl.friendsList}> <h3 className={cl.friendsNav}>FRIENDS</h3> {friendsListComp} </div>


    );

}
