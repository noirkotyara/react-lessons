import React, { ComponentType, Suspense, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, RouteComponentProps, Switch, useLocation, withRouter } from 'react-router-dom';
import './App.scss';
import Preloader from './components/common/Preloader/Preloader';
import DialogsPage from './components/Dialogs/Dialogs';
import { Header } from './components/Header/Header';
import { LoginPage } from './components/Login/Login';
import Music from './components/Music/Music';
import { Navbar } from './components/Navbar/Navbar';
import News from './components/News/News';
import { UsersPage } from './components/Users/UsersPage';
import { setInitializeThunk } from './redux/app-reducer';
import { AppStateType } from './redux/redux-store';
import 'antd/dist/antd.css';
import { Layout } from 'antd';


const ProfilePage = React.lazy(() => import('./components/Profile/ProfilePage') as Promise<any>);
const PublicChatPage = React.lazy(() => import('./components/CommonPages/ChatPage'));
const SettingsPage = React.lazy(() => import('./components/Settings/Settings'));


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

    const { Content, Footer } = Layout;
    const suspenseWrapper = (Component: ComponentType) => {
        return <Suspense fallback={<h1>Still Loading…</h1>}><Component/></Suspense>
    }

    if (!initialized) { return <Preloader /> }
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Header/>
            <Layout className="site-layout">
                <Navbar/>
                <Content style={{ margin: '0 16px' }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        <Switch>
                            <Route path='/dialogs' render={() => <DialogsPage />} />
                            <Route path='/profile/:userId?' render={() => suspenseWrapper(ProfilePage)} />
                            <Route path='/news' render={News} />
                            <Route path='/music' render={() => <Music/>} />
                            <Route path='/publicchat' render={() => suspenseWrapper(PublicChatPage) } />
                            <Route path='/settings' render={() => suspenseWrapper(SettingsPage) } />
                            <Route path='/users' render={() =>  <UsersPage />} />
                            <Route path='/login' render={() => <LoginPage />} />
                            <Route path='*' render={() => <NoMatch />} />
                        </Switch>
                    </div>
                </Content>
           </Layout>     
           <Footer style={{ textAlign: 'center' }}>Hell dream ©2020 Created by noirkotyara</Footer>
            
        </Layout>
    )
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