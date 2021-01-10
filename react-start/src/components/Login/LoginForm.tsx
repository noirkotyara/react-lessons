import cl from '../Login/Login.module.css';
import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { InputComp } from '../common/InputChecker/InputChecker';
import { maxLengthC, required } from '../common/Validators/Validators';
import checker from './../common/InputChecker/InputChecker.module.css';
import { DataIsLoginType } from '../../redux/authMe';
import { useSelector } from 'react-redux';
import { getCaptcha } from '../../redux/authMe-selectors';

const maxLength30 = maxLengthC(30);


let LoginForm: React.FC<InjectedFormProps<DataIsLoginType, {}>> = (props) => { 

    const captcha = useSelector(getCaptcha)
    
    return <>
        <form onSubmit={props.handleSubmit}>
            <div><Field name='login' component={InputComp} type="text" placeholder={'login'} validate={[required, maxLength30]} /></div>
            <div><Field name='password' component={InputComp} type="text" placeholder={'password'} validate={[required, maxLength30]} /></div>
            <div><Field name='checkbox' component='input' type="checkbox" />Remember Me</div>
            {props.error && <div className={checker.commonError}> {props.error} </div>}
            {captcha && <div><img src={captcha} /> 
             <Field name='symbols' component={InputComp} type="text" placeholder={'symbols'} /> </div> }
            <div><button>Login</button></div>
        </form>
    </>
}

export default reduxForm<DataIsLoginType, {}>({ form: 'login' })(LoginForm);
