import React from 'react';
import cl from './InputChecker.module.css';
export const TextareaComp = ({ input, meta, ...props }) => {
    return <>
        <div nameClass={cl.checker + " " + cl.error}>
            <textarea  {...input} placeholder={props.placeholder}></textarea>
        </div>
            <span className={cl.messageError}>{ (meta.visited && !meta.active) &&  meta.error}</span>
    
    </>
}
export const InputComp = ({ input, meta, ...props }) => {
    return <>
        <div nameClass={cl.checker + " " + cl.error}>
            <input  {...input} placeholder={props.placeholder}></input>
        </div>
            <span className={cl.messageError}>{ (meta.visited && !meta.active) &&  meta.error}</span>
    
    </>
}