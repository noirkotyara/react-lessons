import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { AppStateType } from '../../redux/redux-store';
import { FriendsList } from '../../redux/sideBar-reducer';
import { getFriends } from '../../redux/sideBar-selectors';
import Friends from './Friends/Friends';
import cl from './Navbar.module.css';

export const Navbar: React.FC<{}> = () => {

    const friendsList = useSelector<AppStateType, Array<FriendsList>>(getFriends)

    let friendsListComp = friendsList.map(fff => <Friends key={fff.id} id={fff.id} name={fff.name} />);
    return (
        <nav className={cl.nav}>
            <div className={cl.item}><NavLink to='/profile' activeClassName={cl.active}>
                Profile</NavLink></div>
            <div className={cl.item}><NavLink to='/dialogs' activeClassName={cl.active}>
                Messages</NavLink></div>
            <div className={cl.item}><NavLink to='/news' activeClassName={cl.active}>
                News</NavLink></div>
            <div className={cl.item}><NavLink to='/music' activeClassName={cl.active}>
                Music</NavLink></div>
            <div className={cl.item}><NavLink to='/settings' activeClassName={cl.active}>
                Settings</NavLink></div>
            <div className={cl.item}> <NavLink to='/users' activeClassName={cl.active}>
                Users</NavLink></div>


            <div className={cl.friendsList}> <h3 className={cl.friendsNav}>FRIENDS</h3> {friendsListComp} </div>

        </nav>
    );

}
