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



const App = (props) => {/*function App() */
   
    let PostsComp = () => <Profile 
        stateProfile={props.state.profilePage} dispatch={props.store.dispatch.bind(props.store)}/>;
    let DialogsMessagesComp = () => <Dialogs store={props.store} />;
       
        // stateMessages={props.state.messagesPage} dispatch={props.store.dispatch.bind(props.store)}

    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header />
            <Navbar stateFriends={props.state.sideBar}/>
          
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