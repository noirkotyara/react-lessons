import { Button, Divider } from 'antd';
import React, { Dispatch, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormAction, reset } from 'redux-form';
import { DataType, MessagesDataType } from '../../api/api';
import { actions, getDialogsThunk, loadMoreMessagesThunk, sendMessageThunk } from '../../redux/messages-reducer';
import { getDialogs, getIsFetching, getMessages, getUserId } from '../../redux/messages-selectors';
import { AppStateType } from '../../redux/redux-store';
import Preloader from '../common/Preloader/Preloader';
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
    let messagesGenerateLength = messagesGenerate.length
    const receivedUserId = useSelector<AppStateType,number>(getUserId)
    const isFetching = useSelector<AppStateType,boolean>(getIsFetching)
    const dispatchR = useDispatch()

    let [currentPage, setCurrentPage] = useState(1)
    let [prevCountMessages, setprevCountMessages] = useState(messagesGenerateLength)     
    const onSubmit = (formData: {newMessageText: string}, dispatch: Dispatch<FormAction> )=> {
        // dispatchR(actions.sendMessage(formData.newMessageText))
        dispatchR(sendMessageThunk(receivedUserId,formData.newMessageText))
        dispatch(reset('sendMessage'))
    }
    
    const loadMoreMessages = () => {
        setprevCountMessages(messagesGenerateLength)
        
        dispatchR(loadMoreMessagesThunk(receivedUserId, currentPage + 1))
        setCurrentPage(currentPage+1)
    }

    let dialogsGenerateList = dialogsGenerate.map(d => <Dialog key={d.id} user={d} />);
    let messagesGenerateList = messagesGenerate.map(m => <Message key={m.id} message={m} />);

    if (isFetching) {
        // debugger
        return <Preloader/>
    }
    else return (
        <div className={cl.dialogs}>
            {isFetching && <Preloader/>}
            <div className={cl.dialogsItems}>
                {dialogsGenerateList}
            </div>
            
            <div className={cl.messages}>
               {(receivedUserId !== 0 && messagesGenerateList.length !== 0) && <Button onClick={loadMoreMessages}>Load more</Button>}
               { (receivedUserId !== 0 && messagesGenerateList.length !== 0 && messagesGenerateList.length === prevCountMessages) && <div>You don`t have more messages</div> } 
                { messagesGenerateList }
            </div>
            <SendMessageRedux onSubmit={onSubmit} />
        </div>
    );
}
export default withAuthMe(Dialogs)


