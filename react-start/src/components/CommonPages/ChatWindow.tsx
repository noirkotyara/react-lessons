import React, { useEffect, useState } from "react";
import Layout from "antd/lib/layout/layout";
import { MessageType } from "./Message";
import { Message } from "./Message";

export const ChatWindow: React.FC<{}> = (props) => {

    let [messagesData, setMessagesData] = useState<Array<MessageType>>([])
    const ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
    useEffect(() => {
        
        ws.addEventListener('message', (event) => {
            let newMessagesData = JSON.parse(event.data)
            setMessagesData((messagesData) => [...messagesData, ...newMessagesData] )
          } )
    }, [])

    const messages: Array<MessageType> = messagesData
    return (
        <Layout style={{
            overflow: 'auto', height: '50vh',
        }}>
            {messages.map((message, index) => <Message key={index} user={message} />)}
        </Layout>
    );
};
