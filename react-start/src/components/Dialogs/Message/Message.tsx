import React, { ChangeEvent } from 'react';
import { MessagesDataType } from '../../../api/api';
import cl from './Message.module.css';
import cn from 'classnames'
import { AppStateType } from '../../../redux/redux-store';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthID } from '../../../redux/authMe-selectors';
import { deleteMessageThunk } from '../../../redux/messages-reducer';
//popconfirm for delete the message

const Message: React.FC<{message: MessagesDataType}> = ({message}) => {

    const authUserId = useSelector<AppStateType, number>(getAuthID)
    const dispatch = useDispatch()

    const chooseMessage = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, id: string) => {
        if(e.button === 0){
            // alert(`Hello darling ${id}`)
             dispatch(deleteMessageThunk(id))
        }
       

    }

    return (
    <div className={
        cn({[cl.messageFromUser]: message.recipientId === authUserId,
            [cl.yourMessage]: message.recipientId !== authUserId})
        }
        onMouseUp={(e) => chooseMessage(e, message.id)}
        >
        {message.body}
    </div>
    );
}


export default Message;