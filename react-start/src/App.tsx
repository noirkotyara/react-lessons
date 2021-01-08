import React, { ReactNode } from 'react';
import { Route, RouteComponentProps, RouteProps, Switch, useLocation, withRouter } from 'react-router-dom';
import './App.css';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginFormContainer from './components/Login/Login';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { setInitializeThunk } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import { AppStateType } from './redux/redux-store';
import { Suspense, lazy } from 'react';

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends React.Component<PropsType & {store: AppStateType} & RouteProps , {}> {

    catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
        alert('Some error occured')
        //for dispatch a function for fix the global error
        //handle error global
    }
    componentDidMount() {
        this.props.setInitialize()
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }
    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }


    PostsComp = () =>   <Suspense fallback={<h1>Still Loading…</h1>}> <ProfileContainer store={this.props.store} /> </Suspense>
    DialogsMessagesComp = () => <DialogsContainer store={this.props.store} />;
    UsersComp = () => <UsersContainer store={this.props.store} title='UsersContainer' />;
    LoginFormContainerCom = () => <LoginFormContainer store={this.props.store} />;
    render() {
        if (!this.props.initialized) { return <Preloader /> }
        return (

            <div className='app-wrapper'>
                <HeaderContainer />
                <NavbarContainer />
                <div className='app-wrapper-content'>
                    <Switch>
                        <Route path='/dialogs' render={this.DialogsMessagesComp} />
                        <Route path='/profile/:userId?' render={this.PostsComp} />
                        <Route path='/news' render={News} />
                        <Route path='/music' render={Music} />
                        <Route path='/settings' render={Settings} />
                        <Route path='/users' render={this.UsersComp} />
                        <Route path='/login' render={this.LoginFormContainerCom} />
                        <Route path='*' render={() => <NoMatch />} />
                    </Switch>
                </div>

            </div>

        );
    }

}

let NoMatch = () => {
    let location = useLocation()
    return (
    <div>
        {(location.pathname === '/') ? <div>StarterPage</div> : <div>No match</div>}
    </div>
    )
}


let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return ({
        initialized: state.appInit.initialized
    })
}

let AppMain = compose<React.ComponentType>(
    withRouter,
    connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, AppStateType>(mapStateToProps, { setInitialize: setInitializeThunk })
)(App)

export default AppMain

//types
type PropsType = MapDispatchToPropsType & MapStateToPropsType
type OwnPropsType = {}

type MapDispatchToPropsType = {
    setInitialize: () => void
}

type MapStateToPropsType = {
    initialized: boolean
}