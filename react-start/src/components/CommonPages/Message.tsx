import React from "react";



export const Message: React.FC<{ user: MessageType }> = ({ user }) => {
    return (<div>
        <img src={user.photo} alt="avatar" style={{ height: '5vh', width: '5vh' }} />
        <span>{user.userName}</span>
        <div style={{ float: 'right' }}>{user.message}</div>
    </div>);
};

//types
export type MessageType = {
    message: string
    photo: string
    userId: number
    userName: string
  }
