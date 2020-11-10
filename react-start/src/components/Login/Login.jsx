import cl from '../Login/Login.module.css';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import authMe, { putLoginPasswordThunk } from '../../redux/authMe';



let Login = (props) => {
    const onSubmit = (formData) => {
            console.log(props.authMe);
        props.isLogin(formData);
    }
    return <>
        <div className={cl.starter}>LOGIN</div>
        <LoginFormRedux onSubmit={onSubmit}/>
    </>
}

let LoginForm = (props) => {
    return <>
        <form onSubmit={props.handleSubmit}> 
        {/* handleSubmit is in the Redux-Form === LoginFormRedux */}
           <div><Field name='login' component="input" type="text" placeholder={'login'}/></div>
           <div><Field name='password' component="input" type="text" placeholder={'password'}/></div> 
           <div><Field name='checkbox' component="input" type="checkbox"/>Remember Me</div> 
           <div><button>Login</button></div> 
        </form>
    </>


}
let mapStateToProps = (state) => {
    return {authMe : state.authMe.isAuthMe}
}

 let LoginFormRedux = reduxForm({form:'login'})(LoginForm)
    let LoginFormContainer = connect(mapStateToProps, {
        isLogin : putLoginPasswordThunk
    })(Login);
export default LoginFormContainer;