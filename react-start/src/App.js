import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import UsersContainer from './components/Users/UsersContainer';



const App = (props) => {

       
    let PostsComp = () => <Profile store={props.store}/>;
    let DialogsMessagesComp = () => <DialogsContainer store={props.store} />;
    let UsersComp = () => <UsersContainer store={props.store} />;

    // profile attr------>  stateProfile={props.store.getState().profilePage} dispatch={props.store.dispatch.bind(props.store)}

    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header />
            <NavbarContainer/>
            <div className='app-wrapper-content'>
                {/* render vs component */}
                <Route path='/dialogs' render={DialogsMessagesComp}/>
                <Route path='/profile' render={PostsComp}/>
                <Route path='/news' render={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
                <Route path='/users' render={UsersComp}/>
             
            </div>
           
        </div>
        </BrowserRouter>
    );
}





export default App;