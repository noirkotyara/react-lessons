import React, { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setStatusThunk } from '../../../redux/profile-reducer';
import { getStatus } from '../../../redux/profile-selectors';
import cl from './ProfileStatus.module.css';

type PropsType = {
    isUserAuth: number
}

 export const ProfileStatusWithHook: React.FC<PropsType> = (props) => {
    
    const status = useSelector(getStatus)
    const dispatch = useDispatch()

    let [editMode, changeEditMode] = useState(false);
    let [statusState,setStatus] = useState(status);


    let editStatus = () =>  changeEditMode(true);
    let onChange = (event: ChangeEvent<HTMLInputElement>) => setStatus(event.target.value);
    
   useEffect(() => { setStatus(status)},[status]);

    let readyStatus = () => {
        changeEditMode(false);
        dispatch(setStatusThunk(statusState))
    }
  
        return (
            <div className={cl.content}>
                <span className={cl.status}>Status:</span>
                { 
                    editMode
                    ? <span className={cl.editionVersion}>
                        <input onBlur={readyStatus} autoFocus={true} type="text" value={statusState} onChange={onChange} ></input>
                    </span>
                    : <span>
                        <span className={cl.readyStatus} 
                        onDoubleClick={() => (!props.isUserAuth) 
                        ? editStatus() 
                        : false}>{status || '---------'}</span> 
                    </span>
                }

            </div>
        );
    
}


