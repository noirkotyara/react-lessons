import React, { useEffect, useState } from "react"
import Layout from "antd/lib/layout/layout";
import { ChatWindow } from "./ChatWindow";
import { ChatForm } from "./ChatForm";
import { useDispatch } from "react-redux";
import { startMessagesListening, stopMessagesListening } from "../../redux/chat-reducer";

const ChatPage = () => {
    const dispatch = useDispatch();
   
    useEffect(() => {
        dispatch(startMessagesListening())
        return () => {
            dispatch(stopMessagesListening())
        }
    }, [])


    return (<>
        <Layout>
            <ChatWindow  />
            <ChatForm />
        </Layout>
    </>)
}


export default ChatPage