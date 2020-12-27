import cl from '../Login/Login.module.css';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { InputComp } from '../common/InputChecker/InputChecker';
import { maxLengthC, required } from '../common/Validators/Validators';
import checker from './../common/InputChecker/InputChecker.module.css';
import { DataTypeLogin } from '../../redux/authMe';

const maxLength30 = maxLengthC(30);

type PropsType = {
    // handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
    // error: any
    // captcha: string
    // handleSubmit: () => void
}
////////////////////////////any
let LoginForm: React.FC<PropsType> = (props: any) => { 
    return <>
        <form onSubmit={props.handleSubmit}>
            <div><Field name='login' component={InputComp} type="text" placeholder={'login'} validate={[required, maxLength30]} /></div>
            <div><Field name='password' component={InputComp} type="text" placeholder={'password'} validate={[required, maxLength30]} /></div>
            <div><Field name='checkbox' component='input' type="checkbox" />Remember Me</div>
            {props.error && <div className={checker.commonError}> {props.error} </div>}
            {props.captcha && <div><img src={props.captcha} /> 
             <Field name='symbols' component={InputComp} type="text" placeholder={'symbols'} /> </div> }
            <div><button>Login</button></div>
        </form>
    </>
}

export default reduxForm<{ handleSubmit: () => void }, {}>({ form: 'login' })(LoginForm);