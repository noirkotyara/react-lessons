import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { MessagesDataType, DialogsUsersDataType } from '../../redux/messages-reducer';
import { InputComp } from '../common/InputChecker/InputChecker';
import { maxLengthC, required } from '../common/Validators/Validators';

import Dialog from './Dialog/Dialog';
import cl from './Dialogs.module.css';
import Message from './Message/Message';

type  DialogsProps = {
    dialogsGenerate: Array<DialogsUsersDataType>
    messagesGenerate:Array<MessagesDataType>
    sendMessage: React.FC<InjectedFormProps<{ handleSubmit: () => void }, {}>>
}

type SendMessageProps = {
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}


const Dialogs: React.FC<DialogsProps> = (props) => {

    let onSubmit = (formData: any) => {
        props.sendMessage(formData.newMessageText);
    }

    let dialogsGenerate = props.dialogsGenerate.map(d => <Dialog key={d.id} name={d.name} id={d.id} ava={d.ava} />);
    let messagesGenerate = props.messagesGenerate.map(m => <Message key={m.id} message={m.message} />);

    let SendMessage = (props: SendMessageProps) => {
        return <>
            <form onSubmit={props.handleSubmit}>
                <Field name='newMessageText' type="text" validate={[required, maxLength10]} component={InputComp} />
                <button type="submit" className={cl.sendMessage}>send</button>
            </form>
        </>;
    }

const SendMessageRedux = reduxForm<{ handleSubmit: () => void }, {}>({ form: 'sendMessage' })(SendMessage);

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

let maxLength10 = maxLengthC(10);


export default Dialogs;
