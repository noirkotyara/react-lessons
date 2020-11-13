import React from 'react';
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


class Dialogs extends React.Component{
    
 onSubmit = (formData) => {
        this.props.sendMessage(formData.newMessageText);
}
     dialogsGenerate = this.props.dialogsGenerate.map(d => <Dialog key={d.id} name={d.name} id={d.id} avatar={d.ava} />);
     messagesGenerate = this.props.messagesGenerate.map(m => <Message key={m.id} message={m.message} />);
  
    render(){
        return (
        <div className={cl.dialogs}>
            <div className={cl.dialogsItems}>
                {this.dialogsGenerate}

            </div>
            <div className={cl.messages}>
                {this.messagesGenerate}

            </div>
           <SendMessageRedux onSubmit={this.onSubmit}/>

        </div>

    );}
    
}
 let maxLength10 = maxLengthC(10);
let SendMessage = (props) => {
    return <>
         <form onSubmit={props.handleSubmit}>
                <Field name='newMessageText' validate={[required, maxLength10]} component={InputComp}/>
                <button className={cl.sendMessage}>send</button>
            </form>
    </>;
}

let SendMessageRedux = reduxForm({form:'sendMessage'})(SendMessage);


let mapStateToPropsRedirect = (state) => {
    return {isAuthMe: state.authMe.isAuthMe}
}



export default compose(
    reduxForm({form:'sendMessage'}),
    connect(mapStateToPropsRedirect,{authMeSuccess: authMeSuccessThunk}),
    withAuthMe
    )(Dialogs);

