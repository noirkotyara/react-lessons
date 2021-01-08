import React, { Dispatch } from 'react';
import { FormAction, InjectedFormProps, reset } from 'redux-form';
import Dialog from './Dialog/Dialog';
import cl from './Dialogs.module.css';
import { PropsType } from './DialogsContainer';
import { SendMessageRedux, SendMessageType } from './Form/SendMessageRedux';
import Message from './Message/Message';

const Dialogs: React.FC<InjectedFormProps<SendMessageType, PropsType> & PropsType> = (props) => {

    let onSubmit = (formData: {newMessageText: string}, dispatch: Dispatch<FormAction> )=> {
        props.sendMessage(formData.newMessageText)
        dispatch(reset('sendMessage'))
    }

    let dialogsGenerate = props.dialogsGenerate.map(d => <Dialog key={d.id} name={d.name} id={d.id} ava={d.ava} />);
    let messagesGenerate = props.messagesGenerate.map(m => <Message key={m.id} message={m.message} />);

    return (
        <div className={cl.dialogs}>
            <div className={cl.dialogsItems}>
                {dialogsGenerate}
            </div>
            <div className={cl.messages}>
                {messagesGenerate}
            </div>
            <SendMessageRedux onSubmit={onSubmit} />
        </div>
    );

}


export default Dialogs;
