import React from 'react';
import { WrappedFieldProps } from 'redux-form';
import cl from './InputChecker.module.css';

type PropsType = {
    placeholder: string
}

export const InputComp: React.FC<WrappedFieldProps & PropsType>  = ({ input, meta, placeholder }) => {
    return <>
            <div className={(meta.error && meta.visited && !meta.active) && cl.error}>
            <input  {...input} placeholder={placeholder}></input>
        </div>
        <span className={cl.messageError}>{(meta.visited && !meta.active) && meta.error}</span>
    </>
}
