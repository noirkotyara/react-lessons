import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { DataType } from '../../../api/api';
import { getSelectedChatThunk } from '../../../redux/messages-reducer';
import cl from './Dialog.module.css';


const Dialog: React.FC<{ user: DataType }> = ({ user }) => {
    let path = '/dialogs/' + user.id
    const dispatch = useDispatch()
    const history = useHistory()

    const selectDialog = (userId: number) => {
        dispatch(getSelectedChatThunk(userId))
        history.push({
            pathname: `/dialogs/${userId}/messages`
        })
    }

    return (
        <div onClick={() => selectDialog(user.id)} className={cl.dialog}>
            <span>
                <img className={cl.avatar} src={user.photos.small ? user.photos.small : 'https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png'} alt='ava' />
            </span>
            <div>
                {user.userName}
            </div>
        </div>);
}

export default Dialog;