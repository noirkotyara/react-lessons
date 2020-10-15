import React from 'react';
import { addMessagestateActionCreator, uploadMessagestateActionCreator } from '../../redux/state';
import Dialog from './Dialog/Dialog';
import cl from './Dialogs.module.css';
import Message from './Message/Message';


const Dialogs = (props) => {

let stateMessages = props.store.getState().messagesPage;


    let dialogsGenerate = stateMessages.dialogsUsersData.map(d => <Dialog name={d.name} id={d.id} avatar={d.ava} />);

    let messagesGenerate = stateMessages.messagesData.map(m => <Message message={m.message} />);
    // for messages sending  
    let messageLink = React.createRef();
    let sendMessage = () => {

        if(stateMessages.newMessageText.length !== 0){
            props.store.dispatch(addMessagestateActionCreator());
            props.store.dispatch(uploadMessagestateActionCreator(''));}

    
    };


    let onChangeMessage = () => {
        let text = messageLink.current.value;
        props.store.dispatch(uploadMessagestateActionCreator(text));
    };

    return (
        <div className={cl.dialogs}>
            <div className={cl.dialogsItems}>
                {dialogsGenerate}

            </div>
            <div className={cl.messages}>
                {messagesGenerate}

            </div>
            <div>
                <textarea className={cl.text} ref={messageLink} onChange={onChangeMessage} value={stateMessages.newMessageText} cols="30" rows="5" />
                <button onClick={sendMessage} className={cl.sendMessage}>send</button>
            </div>

        </div>

    );
}
export default Dialogs;