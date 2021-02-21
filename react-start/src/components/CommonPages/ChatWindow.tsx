import React, { useEffect, useState, useRef } from "react";
import Layout from "antd/lib/layout/layout";
import { Message } from "./Message";

import { AppStateType } from "../../redux/redux-store";
import { useSelector } from "react-redux";
import { MessageType } from "../../redux/chat-reducer";

export const ChatWindow: React.FC<{}> = React.memo(() => {


    const messagesData = useSelector<AppStateType, Array<MessageType>>((state) => state.chatPage.messages);
    const [isAutoScroll, setIsAutoScroll] = useState(true)
    let anchor = useRef<HTMLDivElement>(null)
    let scrollHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        if(Math.abs(e.currentTarget.scrollHeight - e.currentTarget.scrollTop)-e.currentTarget.clientHeight < 300){
            setIsAutoScroll(true)
        }else{
            setIsAutoScroll(false)
        }
    }

    useEffect(()=> {
        if(anchor.current && isAutoScroll) anchor.current.scrollIntoView({ behavior: "smooth", block: 'end'})
    }, [messagesData])

    return (
        <Layout onScroll={scrollHandler} style={{
            overflow: 'auto', height: '30vh'
        }}>
            {messagesData.map((message, index) => <Message key={message.id} user={message} />)}
        <div ref={anchor} ></div>
        </Layout>
    )
})
