import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import cl from './ProfileStatus.module.css';


 let ProfileStatusHook = (props) => {
   

    let [editMode, changeEditMode] = useState(false);
    let [status,setStatus] = useState(props.status);


    let editStatus = () =>  changeEditMode(true);
    let onChange = (event) => setStatus(event.target.value);
    
   useEffect(() => { setStatus(props.status)},[props.status]);

    let readyStatus = () => {
        changeEditMode(false);
        props.updateStatus(status);
    }
  
        return (
            <div className={cl.content}>
                <span className={cl.status}>Status:</span>
                {editMode
                    ? <div className={cl.editionVersion}>
                        <input onBlur={readyStatus} autoFocus={true} type="text" value={status} onChange={onChange} ></input>
                    </div>
                    : <div >
                        <span className={cl.readyStatus} onDoubleClick={editStatus}>{props.status || '---------'}</span> 
                        {/* значення беруться з пропсів потім вони відображаються в local state, --> рендеряться в інпуті */}
                    </div>}

            </div>
        );
    
}

export default ProfileStatusHook;
