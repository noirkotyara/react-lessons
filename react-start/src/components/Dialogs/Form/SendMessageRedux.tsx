import React from 'react';
import { InputComp } from '../../common/InputChecker/InputChecker';
import { maxLengthC, required } from '../../common/Validators/Validators';
import { Field,  reduxForm } from 'redux-form';
import cl from './../Dialogs.module.css';

type SendMessageProps = {
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

let SendMessage = (props: SendMessageProps) => {
    return <>
        <form onSubmit={props.handleSubmit}>
            <Field name='newMessageText' type="text" validate={[required, maxLength10]} component={InputComp} />
            <button type="submit" className={cl.sendMessage}>send</button>
        </form>
    </>;
}

export const SendMessageRedux = reduxForm<{ handleSubmit: () => void }, {}>({ form: 'sendMessage' })(SendMessage);

let maxLength10 = maxLengthC(10);