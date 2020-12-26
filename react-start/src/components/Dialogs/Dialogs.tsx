import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { authMeSuccessThunk } from '../../redux/authMe';
import { MessagesDataType, DialogsUsersDataType } from '../../redux/messages-reducer';
import { AppStateType } from '../../redux/redux-store';
import { InputComp } from '../common/InputChecker/InputChecker';
import { maxLengthC, required } from '../common/Validators/Validators';
import { withAuthMe } from '../hoc/hoc';
import Dialog from './Dialog/Dialog';
import cl from './Dialogs.module.css';
import Message from './Message/Message';

interface DialogsProps {
    sendMessage: React.FC<InjectedFormProps<{ handleSubmit: () => void }, {}>>
    dialogsGenerate: Array<DialogsUsersDataType>
    messagesGenerate:Array<MessagesDataType>
}

interface SendMessageProps {
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}


const Dialogs = (props: DialogsProps) => {

    let onSubmit = (formData: any) => {
        props.sendMessage(formData.newMessageText);
    }

    let dialogsGenerate = props.dialogsGenerate.map(d => <Dialog key={d.id} name={d.name} id={d.id} avatar={d.ava} />);
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

let mapStateToPropsRedirect = (state: AppStateType) => {
    return { isAuthMe: state.authMe.isAuthMe }
}

export default compose(
    connect(mapStateToPropsRedirect, { authMeSuccess: authMeSuccessThunk }),
    withAuthMe
)(Dialogs);
