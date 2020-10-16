import React from 'react';
import Dialog from './Dialog/Dialog';
import cl from './Dialogs.module.css';
import Message from './Message/Message';


const Dialogs = (props) => {


    let dialogsGenerate = props.dialogsGenerate.map(d => <Dialog name={d.name} id={d.id} avatar={d.ava} />);
    let messagesGenerate = props.messagesGenerate.map(m => <Message message={m.message} />);
    // for messages sending  
    let messageLink = React.createRef();
    let onChangeMessage = (event) => {
        let text = event.target.value;
        props.onChange(text);
      
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
                <textarea className={cl.text} ref={messageLink} onChange={onChangeMessage} value={props.newMessageText} cols="30" rows="5" />
                <button onClick={props.sendMessage} className={cl.sendMessage}>send</button>
            </div>

        </div>

    );
}
export default Dialogs;