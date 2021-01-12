import React from "react"
import Layout from "antd/lib/layout/layout";
import { ChatWindow } from "./ChatWindow";
import { ChatForm } from "./ChatForm";

const ChatPage = () => {
    return (<>
        <Layout>
            <ChatWindow  />
            <ChatForm />
        </Layout>
    </>)
}


export default ChatPage