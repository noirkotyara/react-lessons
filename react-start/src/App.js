import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';


const App = (props) => {

       
    let PostsComp = () => <ProfileContainer store={props.store}/>;
    let DialogsMessagesComp = () => <DialogsContainer store={props.store} />;
    let UsersComp = () => <UsersContainer store={props.store} />;

    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <HeaderContainer />
            <NavbarContainer/>
            <div className='app-wrapper-content'>
                {/* render vs component */}
                <Route path='/dialogs' render={DialogsMessagesComp}/>
                <Route path='/profile/:userId?' render={PostsComp}/>
                <Route path='/news' render={News}/>
                <Route path='/music' render={Music}/>
                <Route path='/settings' render={Settings}/>
                <Route path='/users' render={UsersComp}/>
             
            </div>
           
        </div>
        </BrowserRouter>
    );
}





export default App;