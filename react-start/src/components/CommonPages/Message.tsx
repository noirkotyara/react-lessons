import React from "react";
import { MessageType } from "../../redux/chat-reducer";




export const Message: React.FC<{ user: MessageType }> = React.memo(({ user }) => {
    console.log('>>>>>>>>>>..messages')
    return (<div key={user.id}>
        <img src={user.photo} alt="avatar" style={{ height: '5vh', width: '5vh' }} />
        <span>{user.userName}</span>
        <div style={{ float: 'right' }}>{user.message}</div>
    </div>)
})


