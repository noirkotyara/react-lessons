import { connect } from 'react-redux';
import { sendMessage } from '../../redux/messages-reducer';
import DialogsContainerHOCRedirect from './Dialogs';



let mapStateToProps = (state) => {
    return {
        dialogsGenerate: state.messagesPage.dialogsUsersData,
        messagesGenerate: state.messagesPage.messagesData
    }
}


const DialogsContainer = connect(mapStateToProps, {sendMessage})(DialogsContainerHOCRedirect);


export default DialogsContainer;