import React, { useEffect, useState } from "react";
import Layout from "antd/lib/layout/layout";
import { MessageType } from "./Message";
import { Message } from "./Message";

export const ChatWindow: React.FC<{ws: WebSocket | null}> = ({ws}) => {

    let [messagesData, setMessagesData] = useState<Array<MessageType>>([])
    
    
    const showMessages = (event: MessageEvent<any>): void => {
        let newMessagesData = JSON.parse(event.data);
        setMessagesData((messagesData) => [...messagesData, ...newMessagesData]);
    };

    useEffect(() => {
        if(ws !== null){
            ws.addEventListener('message', showMessages ) 
            
        }
        return () => {
            if(ws !== null){
                ws.removeEventListener('message', showMessages)
                ws.close()
            }
            }
    }, [ws])

    const messages: Array<MessageType> = messagesData
    return (
        <Layout style={{
            overflow: 'auto', height: '50vh',
        }}>
            {messages.map((message, index) => <Message key={index} user={message} />)}
        </Layout>
    );
};
