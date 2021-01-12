import React, { Dispatch, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormAction, reset } from 'redux-form';
import { DataType } from '../../api/api';
import { actions, getDialogsThunk, MessagesDataType, startChatThunk } from '../../redux/messages-reducer';
import { getDialogs, getMessages } from '../../redux/messages-selectors';
import { AppStateType } from '../../redux/redux-store';
import { withAuthMe } from '../hoc/hoc';
import Dialog from './Dialog/Dialog';
import cl from './Dialogs.module.css';
import { SendMessageRedux } from './Form/SendMessageRedux';
import Message from './Message/Message';

const Dialogs: React.FC<{}> = (props) => {

    useEffect(() => {
        dispatchR(getDialogsThunk())
    },[])


    const dialogsGenerate = useSelector<AppStateType,Array<DataType>>(getDialogs)
    const messagesGenerate = useSelector<AppStateType,Array<MessagesDataType>>(getMessages)
    const dispatchR = useDispatch()
            
    let onSubmit = (formData: {newMessageText: string}, dispatch: Dispatch<FormAction> )=> {
        dispatchR(actions.sendMessage(formData.newMessageText))
        dispatch(reset('sendMessage'))
    }

    let dialogsGenerateList = dialogsGenerate.map(d => <Dialog key={d.id} user={d} />);
    let messagesGenerateList = messagesGenerate.map(m => <Message key={m.id} message={m.message} />);

    return (
        <div className={cl.dialogs}>
            <div className={cl.dialogsItems}>
                {dialogsGenerateList}
            </div>
            <div className={cl.messages}>
                {messagesGenerateList}
            </div>
            <SendMessageRedux onSubmit={onSubmit} />
        </div>
    );
}
export default withAuthMe(Dialogs)


