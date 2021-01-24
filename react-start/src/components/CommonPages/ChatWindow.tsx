import React, { useEffect, useState } from "react";
import Layout from "antd/lib/layout/layout";
import { Message } from "./Message";
import { MessageType } from "../../api/chat-api";
import { AppStateType } from "../../redux/redux-store";
import { useSelector } from "react-redux";

export const ChatWindow: React.FC<{}> = () => {


    const messagesData = useSelector<AppStateType, Array<MessageType>>((state) => state.chatPage.messages);
    
    return (
        <Layout style={{
            overflow: 'auto', height: '50vh',
        }}>
            {messagesData.map((message, index) => <Message key={index} user={message} />)}
        </Layout>
    );
};
