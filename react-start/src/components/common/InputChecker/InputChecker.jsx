import React from 'react';
import cl from './InputChecker.module.css';

// type PropsType = {
//     input: {
//         name: "newPostText"
//         onBlur: () => void
//         onChange: () => void
//         // onDragStart: ƒ (event)
//         // onDrop: ƒ (event)
//         onFocus: () => void
//         value: string
//     }
//     meta: { error: string, visited: string, active: boolean, touched: boolean  }
//     placeholder: string
//     type: string
// }: React.FC<PropsType>


export const InputComp = ({ input, meta, ...props }) => {
    debugger;
    
    return <>
            <div className={(meta.error && meta.visited && !meta.active) && cl.error}>
            <input  {...input} placeholder={props.placeholder}></input>
        </div>
        <span className={cl.messageError}>{(meta.visited && !meta.active) && meta.error}</span>

    </>
}
