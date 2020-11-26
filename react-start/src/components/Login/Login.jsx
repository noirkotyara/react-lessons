import cl from '../Login/Login.module.css';
import React from 'react';
import { connect } from 'react-redux';
import { putLoginPasswordThunk } from '../../redux/authMe';
import LoginForm from './LoginForm';



let Login = (props) => {
    const onSubmit = (formData) => {
        props.isLogin(formData);
    }
    return <>
    <div className={cl.starter}>LOGIN</div>
    {props.authMe
        ?<div >You are login successfully</div>
        :<LoginForm onSubmit={onSubmit} />
    }   
    </>
}


let mapStateToProps = (state) => {
    return { authMe: state.authMe.isAuthMe }
}

let LoginFormContainer = connect(mapStateToProps, {
    isLogin: putLoginPasswordThunk
})(Login);
export default LoginFormContainer;