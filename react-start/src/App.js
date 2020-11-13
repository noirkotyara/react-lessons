import React from 'react';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import './App.css';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginFormContainer from './components/Login/Login';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { setInitializeThunk } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';


class App extends React.Component {
    
componentDidMount(){
        this.props.setInitialize();
}
    PostsComp = () => <ProfileContainer store={this.props.store} />;
    DialogsMessagesComp = () => <DialogsContainer store={this.props.store} />;
    UsersComp = () => <UsersContainer store={this.props.store} />;
    LoginFormContainerCom = () => <LoginFormContainer store={this.props.store} />;
    render() {
        if(!this.props.initialized){ return <Preloader/>}
        return (
            
                <div className='app-wrapper'>
                    <HeaderContainer />
                    <NavbarContainer />
                    <div className='app-wrapper-content'>
                        <Route path='/dialogs' render={this.DialogsMessagesComp} />
                        <Route path='/profile/:userId?' render={this.PostsComp} />
                        <Route path='/news' render={News} />
                        <Route path='/music' render={Music} />
                        <Route path='/settings' render={Settings} />
                        <Route path='/users' render={this.UsersComp} />
                        <Route path='/login' render={this.LoginFormContainerCom} />
                    </div>

                </div>
           
        );
    }

}


let mapStateToProps = (state) => {
    return ({
        initialized: state.appInit.initialized
    })
}

let AppMain = compose(
   withRouter,
    connect(mapStateToProps,{ setInitialize: setInitializeThunk})    
)(App);
export default AppMain;