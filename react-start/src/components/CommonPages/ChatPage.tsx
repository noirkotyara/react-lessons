import React, { useEffect, useState } from "react"
import Layout from "antd/lib/layout/layout";
import { ChatWindow } from "./ChatWindow";
import { ChatForm } from "./ChatForm";

const ChatPage = () => {
    let [createdChannel, setNewChannel] = useState<WebSocket | null>(null) 
       

    useEffect(() => {
    let ws: WebSocket
       const reconnectWS = () => {
            console.log('CLOSE WS');
            setTimeout(createChannel, 3000);
        }
        
        const createChannel = () => {
            if(createdChannel !== null){
                createdChannel.removeEventListener('close', reconnectWS)
                createdChannel.close()
            }
                ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
                ws.addEventListener('close', reconnectWS)
                 setNewChannel(ws)
        }
        createChannel()
        
        
        return () => {
            ws.removeEventListener('close', reconnectWS)
            ws.close()
        }
        
    } ,[])


    return (<>
        <Layout>
            <ChatWindow ws={createdChannel} />
            <ChatForm ws={createdChannel} />
        </Layout>
    </>)
}


export default ChatPage