import React from 'react';
import { MessagesDataType } from '../../../redux/messages-reducer';
import cl from './Message.module.css';



const Message = (props: MessagesDataType) => {
    return (<div className={cl.message}>{props.message}</div>);
}


export default Message;