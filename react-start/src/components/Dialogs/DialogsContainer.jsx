import { connect } from 'react-redux';
import { sendMessage } from '../../redux/messages-reducer';
import { AppStateType } from '../../redux/redux-store';
import DialogsContainerHOC from './Dialogs';
import { DialogsUsersDataType, MessagesDataType } from '../../redux/messages-reducer';

// type mapStateToPropsType = {
//     dialogsGenerate: Array<DialogsUsersDataType>
//     messagesGenerate: Array<MessagesDataType>
// }
// type mapDispatchToPropsType = {
//     sendMessage: (a: string) => void
// }

// export type PropsType = mapStateToPropsType & mapDispatchToPropsType;
// : AppStateType
let mapStateToProps = (state) => {
    return {
        dialogsGenerate: state.messagesPage.dialogsUsersData,
        messagesGenerate: state.messagesPage.messagesData
    }
}

const DialogsContainer = connect(mapStateToProps, {sendMessage})(DialogsContainerHOC);


export default DialogsContainer;