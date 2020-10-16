import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addMessagestateActionCreator, uploadMessagestateActionCreator } from '../../redux/messages-reducer';
import Dialogs from './Dialogs';


// const DialogsContainer = (props) => {
   
//     let stateMessages = props.store.getState().messagesPage;
//     let dialogsGenerate = stateMessages.dialogsUsersData;
//     let messagesGenerate = stateMessages.messagesData;
  
//     // stateMessages.newMessageText.length !== 0
//     let sendMessage = () => {

//         if (stateMessages.newMessageText.length !== 0) {
//             props.store.dispatch(addMessagestateActionCreator());
//             props.store.dispatch(uploadMessagestateActionCreator(''));
//         }
//     };


//     let onChangeMessage = (text) => {

//         props.store.dispatch(uploadMessagestateActionCreator(text));
//     };

//     return (
//         <Dialogs
//             sendMessage={sendMessage}
//             onChange={onChangeMessage}
//             newMessageText={stateMessages.newMessageText}
//             dialogsGenerate={dialogsGenerate}
//             messagesGenerate={messagesGenerate}
//         />

//     );
// }

let mapStateToProps = (state) =>{
   
    return{
        
        newMessageText: state.messagesPage.newMessageText,
        dialogsGenerate: state.messagesPage.dialogsUsersData,
        messagesGenerate: state.messagesPage.messagesData
    }
}

let mapDispatchToProps = (dispatch) =>{
    // debugger
    return{
        sendMessage: () => {
          dispatch(addMessagestateActionCreator());
            dispatch(uploadMessagestateActionCreator(''));
        },
        onChange: (text) => {dispatch(uploadMessagestateActionCreator(text));}
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);


export default DialogsContainer;