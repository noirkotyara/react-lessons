import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthMe } from '../hoc/hoc';
import Dialog from './Dialog/Dialog';
import cl from './Dialogs.module.css';
import Message from './Message/Message';


const Dialogs = (props) => {


    let dialogsGenerate = props.dialogsGenerate.map(d => <Dialog key={d.id} name={d.name} id={d.id} avatar={d.ava} />);
    let messagesGenerate = props.messagesGenerate.map(m => <Message key={m.id} message={m.message} />);
  
    
    let onChangeMessage = (event) => {
        let text = event.target.value;
        props.onChange(text);
      
    };
    let sendMessages = () => {
        props.sendMessage();
        props.onChange('');
    }
    return (
        <div className={cl.dialogs}>
            <div className={cl.dialogsItems}>
                {dialogsGenerate}

            </div>
            <div className={cl.messages}>
                {messagesGenerate}

            </div>
            <div>
                <textarea className={cl.text}  onChange={onChangeMessage} value={props.newMessageText} cols="30" rows="5" />
                <button onClick={sendMessages} className={cl.sendMessage}>send</button>
            </div>

        </div>

    );
}

let mapStateToPropsRedirect = (state) => {
    return {isAuthMe: state.authMe.isAuthMe}
}

export default compose(
    connect(mapStateToPropsRedirect,{}),
    withAuthMe)(Dialogs);

// let DialogsContainerHOC = withAuthMe(Dialogs);
// let DialogsContainerHOCRedirect = connect(mapStateToPropsRedirect,{})(DialogsContainerHOC);

// export default DialogsContainerHOCRedirect;