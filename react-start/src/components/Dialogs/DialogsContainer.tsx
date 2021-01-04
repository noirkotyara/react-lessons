import { connect } from 'react-redux';
import { actions } from '../../redux/messages-reducer';
import { AppStateType } from '../../redux/redux-store';
import DialogsContainerHOC from './Dialogs';
import { DialogsUsersDataType, MessagesDataType } from '../../redux/messages-reducer';
import { withAuthMe } from '../hoc/hoc';
import { compose } from 'redux';

export type MapStateToPropsType = {
    dialogsGenerate: Array<DialogsUsersDataType>
    messagesGenerate: Array<MessagesDataType>
    isAuthMe: boolean
}
export type MapDispatchToPropsType = {
    sendMessage: (text: string) => void
}


export type PropsType = MapStateToPropsType & MapDispatchToPropsType;

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsGenerate: state.messagesPage.dialogsUsersData,
        messagesGenerate: state.messagesPage.messagesData,
        isAuthMe: state.authMe.isAuthMe
    }
}
// authMeSuccess: authMeSuccessThunk
// withAuthMe
const DialogsContainer = compose(
    connect<MapStateToPropsType,
        MapDispatchToPropsType,
        {}, AppStateType>
        (mapStateToProps, { sendMessage: actions.sendMessage }),
    withAuthMe)
    (DialogsContainerHOC);


export default DialogsContainer;