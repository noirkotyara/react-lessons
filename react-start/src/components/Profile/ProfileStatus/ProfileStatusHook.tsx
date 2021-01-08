import React, { ChangeEvent } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { MapStateToPropsType, PathParamsType, PropsType } from '../ProfileContainer';
import cl from './ProfileStatus.module.css';



 let ProfileStatusHook: React.FC<MapStateToPropsType & RouteComponentProps<PathParamsType> & OwnPropsType> = (props) => {
    let [editMode, changeEditMode] = useState(false);
    let [status,setStatus] = useState(props.status);


    let editStatus = () =>  changeEditMode(true);
    let onChange = (event: ChangeEvent<HTMLInputElement>) => setStatus(event.target.value);
    
   useEffect(() => { setStatus(props.status)},[props.status]);

    let readyStatus = () => {
        changeEditMode(false);
        props.updateStatus(status);
    }
  
        return (
            <div className={cl.content}>
                <span className={cl.status}>Status:</span>
                { 
            
                    editMode
                    ? <div className={cl.editionVersion}>
                        <input onBlur={readyStatus} autoFocus={true} type="text" value={status} onChange={onChange} ></input>
                    </div>
                    : <div >
                        <span className={cl.readyStatus} 
                        onDoubleClick={() => (!props.match.params.userId) 
                        ? editStatus() 
                        : false}>{props.status || '---------'}</span> 
                    </div>
                }

            </div>
        );
    
}

export default ProfileStatusHook;

//types 
type OwnPropsType = {
    updateStatus: (status: string) => void
}
