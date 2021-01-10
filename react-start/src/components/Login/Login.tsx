import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DataIsLoginType, putLoginPasswordThunk } from '../../redux/authMe';
import { getAuthMe } from '../../redux/authMe-selectors';
import { AppStateType } from '../../redux/redux-store';
import cl from '../Login/Login.module.css';
import LoginForm from './LoginForm';


export const LoginPage: React.FC<{}> = () => {
    
    const authMe = useSelector(getAuthMe)
    const dispatch = useDispatch()

    const onSubmit = (formData: DataIsLoginType) => {
        dispatch(putLoginPasswordThunk(formData))
    }
    return <>
        <div className={cl.starter}>LOGIN</div>
        {authMe
            ? <div >You are login successfully</div>
            : <LoginForm onSubmit={onSubmit} />
        }
    </>
}

