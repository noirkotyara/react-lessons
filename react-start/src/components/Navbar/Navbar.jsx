import React from 'react';
import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';
import cl from './Navbar.module.css';

const Navbar = (props) => {
    let stateFriends = props.store.getState().sideBar;
    // stateFriends={props.state.sideBar}
    let friendsListComp = stateFriends.friendsList.map (  fff => <Friends id={fff.id} name={fff.name}/>);
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
            
            <div className={cl.friendsList}> <h3>FRIENDS</h3> {friendsListComp} </div>
            
        </nav>
    );
   
}

export default Navbar;