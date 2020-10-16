import React from 'react';
import { addMessagestateActionCreator, uploadMessagestateActionCreator } from '../../redux/messages-reducer';
import Dialogs from './Dialogs';


const DialogsContainer = (props) => {
   
    let stateMessages = props.store.getState().messagesPage;
    let dialogsGenerate = stateMessages.dialogsUsersData;
    let messagesGenerate = stateMessages.messagesData;
  

    let sendMessage = () => {

        if (stateMessages.newMessageText.length !== 0) {
            props.store.dispatch(addMessagestateActionCreator());
            props.store.dispatch(uploadMessagestateActionCreator(''));
        }
    };


    let onChangeMessage = (text) => {

        props.store.dispatch(uploadMessagestateActionCreator(text));
    };

    return (
        <Dialogs
            sendMessage={sendMessage}
            onChange={onChangeMessage}
            newMessageText={stateMessages.newMessageText}
            dialogsGenerate={dialogsGenerate}
            messagesGenerate={messagesGenerate}
        />

    );
}
export default DialogsContainer;