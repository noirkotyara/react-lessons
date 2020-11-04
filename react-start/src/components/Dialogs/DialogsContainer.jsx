import { connect } from 'react-redux';
import { addMessagestateActionCreator, uploadMessagestateActionCreator } from '../../redux/messages-reducer';
import DialogsContainerHOCRedirect from './Dialogs';



let mapStateToProps = (state) => {
    return {
        newMessageText: state.messagesPage.newMessageText,
        dialogsGenerate: state.messagesPage.dialogsUsersData,
        messagesGenerate: state.messagesPage.messagesData
    }
}

let mapDispatchToProps = (dispatch) => {

    return {
        sendMessage: () => {
            dispatch(addMessagestateActionCreator());
        },
        onChange: (text) => {
            dispatch(uploadMessagestateActionCreator(text));
        }
    }
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(DialogsContainerHOCRedirect);


export default DialogsContainer;