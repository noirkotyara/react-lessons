import React from 'react';
import { PureComponent } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Field, reduxForm } from 'redux-form';
import { authMeSuccessThunk } from '../../redux/authMe';
import { InputComp } from '../common/InputChecker/InputChecker';
import { maxLengthC, required } from '../common/Validators/Validators';
import { withAuthMe } from '../hoc/hoc';
import Dialog from './Dialog/Dialog';
import cl from './Dialogs.module.css';
import Message from './Message/Message';


const Dialogs = (props) => {
    
    let onSubmit = (formData) => { 
        debugger; 
        props.sendMessage(formData.newMessageText);}
   

    let dialogsGenerate = props.dialogsGenerate.map(d => <Dialog key={d.id} name={d.name} id={d.id} avatar={d.ava} />);
    let messagesGenerate = props.messagesGenerate.map(m => <Message key={m.id} message={m.message} />);

        return (
        <div className={cl.dialogs}>
            <div className={cl.dialogsItems}>
                {dialogsGenerate}
            </div>
            <div className={cl.messages}>
                {messagesGenerate}

            </div>
           <SendMessageRedux onSubmit={onSubmit}/>
        </div>
    );

}



 let maxLength10 = maxLengthC(10);

let SendMessage = (props) => {
    return <>
         <form onSubmit={props.handleSubmit}>
                <Field name='newMessageText' type="text" validate={[required, maxLength10]} component={InputComp}/>
                <button type="submit" className={cl.sendMessage}>send</button>
            </form>
    </>;
}

let SendMessageRedux = reduxForm({form:'sendMessage'})(SendMessage);


let mapStateToPropsRedirect = (state) => {
    return {isAuthMe: state.authMe.isAuthMe}
}



export default compose(
    connect(mapStateToPropsRedirect,{authMeSuccess: authMeSuccessThunk}),
    withAuthMe
    )(Dialogs);

