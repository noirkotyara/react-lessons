import cl from '../Login/Login.module.css';
import React from 'react';
import { Field, reduxForm } from 'redux-form';



let Login = (props) => {
    let onSubmit = (formData) => {
        console.log(formData);
    }
    return <>
        <div className={cl.starter}>LOGIN</div>
        <LoginFormRedux onSubmit={onSubmit}/>
    </>
}

let LoginForm = (props) => {
console.log(props);
    return <>
        <form onSubmit={(props) => props.handleSubmit(props)}>
           <div><Field name='login' component="input" type="text" placeholder={'login'}/></div>
           <div><Field name='password' component="input" type="text" placeholder={'password'}/></div> 
           <div><Field name='checkbox' component="input" type="checkbox"/>Remember Me</div> 
           <div><button>Login</button></div> 
        </form>
    </>


}
 let LoginFormRedux = reduxForm({form:'login'})(LoginForm)

export default Login;