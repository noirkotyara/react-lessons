import React, { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, RouteComponentProps, Switch, useLocation, withRouter } from 'react-router-dom';
import './App.css';
import Preloader from './components/common/Preloader/Preloader';
import DialogsPage from './components/Dialogs/Dialogs';
import { Header } from './components/Header/Header';
import { LoginPage } from './components/Login/Login';
import Music from './components/Music/Music';
import { Navbar } from './components/Navbar/Navbar';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import { UsersPage } from './components/Users/UsersPage';
import { setInitializeThunk } from './redux/app-reducer';
import { AppStateType } from './redux/redux-store';



const ProfilePage = React.lazy(() => import('./components/Profile/ProfilePage') as Promise<any>);

const AppF: React.FC<RouteComponentProps> = (props) => {

    const initialized = useSelector((state: AppStateType) => state.appInit.initialized)
    const dispatch = useDispatch()

    const catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
        alert('Some error occured')
        //for dispatch a function for fix the global error
        //handle error global
    }

    useEffect(() => {
        dispatch(setInitializeThunk())
        window.addEventListener('unhandledrejection', catchAllUnhandledErrors)
        return window.removeEventListener('unhandledrejection', catchAllUnhandledErrors)
    }, [])
    

    if (!initialized) { return <Preloader /> }
    return (
        <div className='app-wrapper'>
            <Header />
            <Navbar />
            <div className='app-wrapper-content'>
                <Switch>
                    <Route path='/dialogs' render={() => <DialogsPage />} />
                    <Route path='/profile/:userId?' render={() => <Suspense fallback={<h1>Still Loading…</h1>}> <ProfilePage /> </Suspense>} />
                    <Route path='/news' render={News} />
                    <Route path='/music' render={Music} />
                    <Route path='/settings' render={Settings} />
                    <Route path='/users' render={() => <UsersPage />} />
                    <Route path='/login' render={() => <LoginPage />} />
                    <Route path='*' render={() => <NoMatch />} />
                </Switch>
            </div>
        </div>
    );
}

let NoMatch = () => {
    let location = useLocation()
    return (
    <div>
        {(location.pathname === '/') ? <div>StarterPage</div> : <div>No match</div>}
    </div>
    )
}

let AppMain = withRouter(React.memo(AppF))

export default AppMain