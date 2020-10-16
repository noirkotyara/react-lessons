import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';



const App = (props) => {/*function App() */
   
    let PostsComp = () => <Profile store={props.store}/>;
    let DialogsMessagesComp = () => <DialogsContainer store={props.store} />;
       
    // profile attr------>  stateProfile={props.store.getState().profilePage} dispatch={props.store.dispatch.bind(props.store)}

    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header />
            <Navbar store={props.store}/>
            {/* stateFriends={props.state.sideBar} */}
            <div className='app-wrapper-content'>
                {/* render vs component */}
                <Route path='/dialogs' render={DialogsMessagesComp}/>
                <Route path='/profile' render={PostsComp}/>
                <Route path='/news' render={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
             
            </div>
           
        </div>
        </BrowserRouter>
    );
}





export default App;