import React from 'react';
import { InputComp } from '../../common/InputChecker/InputChecker';
import { maxLengthC, required } from '../../common/Validators/Validators';
import { Field,  InjectedFormProps,  reduxForm } from 'redux-form';
import cl from './../Dialogs.module.css';

export type SendMessageType = {
    newMessageText: string
}

let SendMessage: React.FC<InjectedFormProps<SendMessageType>> = (props) => {
    return <>
        <form onSubmit={props.handleSubmit}>
            <Field name='newMessageText' type="text" validate={[required, maxLength10]} component={InputComp} />
            <button type="submit" className={cl.sendMessage}>send</button>
        </form>
    </>;
}

export const SendMessageRedux = reduxForm<SendMessageType>({ form: 'sendMessage' })(SendMessage);

let maxLength10 = maxLengthC(10);