import React from 'react';
import { InjectedFormProps, reset } from 'redux-form';
import { MessagesDataType, DialogsUsersDataType } from '../../redux/messages-reducer';
import Dialog from './Dialog/Dialog';
import cl from './Dialogs.module.css';
import { SendMessageRedux } from './Form/SendMessageRedux';
import Message from './Message/Message';

type  DialogsProps = {
    dialogsGenerate: Array<DialogsUsersDataType>
    messagesGenerate:Array<MessagesDataType>
    sendMessage: React.FC<InjectedFormProps<{ handleSubmit: () => void }, {}>>
}


const Dialogs: React.FC<DialogsProps> = (props) => {

    let onSubmit = (formData: any, dispatch: Function) => {
        props.sendMessage(formData.newMessageText);
        dispatch(reset('sendMessage'));
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
