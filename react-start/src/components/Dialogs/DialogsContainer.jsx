import React from 'react';
import { addMessagestateActionCreator, uploadMessagestateActionCreator } from '../../redux/messages-reducer';
import Dialogs from './Dialogs';


const DialogsContainer = (props) => {
// stateMessages.dialogsUsersData   --> dialogsGenerate 
    // stateMessages.messagesData  -->   messagesGenerate
let stateMessages = props.store.getState().messagesPage;
let dialogsGenerate = stateMessages.dialogsUsersData;
let messagesGenerate = stateMessages.messagesData;
    // for messages sending  
  
    let sendMessage = () => {

        if(stateMessages.newMessageText.length !== 0){
            props.store.dispatch(addMessagestateActionCreator());
            props.store.dispatch(uploadMessagestateActionCreator(''));}
    };


    let onChangeMessage = (text) => {
      
        props.store.dispatch(uploadMessagestateActionCreator(text));
    };

    return (
      <Dialogs 
      sendMessage={sendMessage}
      onChange={onChangeMessage}
      stateMessages={stateMessages}
      newMessageText={stateMessages.newMessageText}
      dialogsGenerate={dialogsGenerate}
      messagesGenerate={messagesGenerate}
      />

    );
}
export default DialogsContainer;