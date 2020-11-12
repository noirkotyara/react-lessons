import cl from '../Login/Login.module.css';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import authMe, { putLoginPasswordThunk } from '../../redux/authMe';
import { InputComp } from '../common/InputChecker/InputChecker';
import { maxLengthC, required } from '../common/Validators/Validators';



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
let maxLength30 = maxLengthC(30);
let LoginForm = (props) => {
    return <>
        <form onSubmit={props.handleSubmit}> 
           <div><Field name='login' component={InputComp} type="text" placeholder={'login'} validate={[required, maxLength30]}/></div>
           <div><Field name='password' component={InputComp} type="text" placeholder={'password'} validate={[required, maxLength30]}/></div> 
           <div><Field name='checkbox' component='input' type="checkbox" />Remember Me</div> 
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