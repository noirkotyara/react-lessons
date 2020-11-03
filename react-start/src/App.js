import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';


const App = (props) => {

       
    let PostsComp = () => <ProfileContainer store={props.store}/>;
    let DialogsMessagesComp = () => <DialogsContainer store={props.store} />;
    let UsersComp = () => <UsersContainer store={props.store} />;

    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <HeaderContainer />
            <NavbarContainer />
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={DialogsMessagesComp}/>
                <Route path='/profile/:userId?' render={PostsComp}/>
                <Route path='/news' render={News}/>
                <Route path='/music' render={Music}/>
                <Route path='/settings' render={Settings}/>
                <Route path='/users' render={UsersComp}/>
                <Route path='/login' render={Login}/>
            </div>
           
        </div>
        </BrowserRouter>
    );
}





export default App;