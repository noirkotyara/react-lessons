import cl from '../Login/Login.module.css';
import React from 'react';
import { connect } from 'react-redux';
import { DataIsLoginType, putLoginPasswordThunk } from '../../redux/authMe';
import LoginForm from './LoginForm';
import { AppStateType } from '../../redux/redux-store';

type MapStateToPropsType = {
    authMe: boolean
    captcha: string | null
}

type MapDispatchToPropsType = {
    isLogin: (data: DataIsLoginType) => void
}
type PropsType = MapStateToPropsType & MapDispatchToPropsType;
let Login: React.FC<PropsType> = (props) => {
    const onSubmit = (formData: DataIsLoginType) => {
        props.isLogin(formData);
    }
    return <>
        <div className={cl.starter}>LOGIN</div>
        {props.authMe
            ? <div >You are login successfully</div>
            : <LoginForm onSubmit={onSubmit} captcha={props.captcha} />
        }
    </>
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        authMe: state.authMe.isAuthMe,
        captcha: state.authMe.captcha
    }
}

let LoginFormContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {
    isLogin: putLoginPasswordThunk
})(Login);

export default LoginFormContainer;