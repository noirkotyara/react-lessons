
export type SubscriberType = (messages: Array<MessageType>) => void;
let subscribers: Array<SubscriberType> = []

let ws: WebSocket | null = null;

const messageHandler = (event: MessageEvent<any>): void => {
    let newMessagesData = JSON.parse(event.data);
    subscribers.forEach(s => s(newMessagesData))
};

// const connectionIsStable = () => {
//     setIsOpen('ready');
// };

const reconnectWS = () => {
    console.log('CLOSE WS');
    setTimeout(ChatAPI.createChannel, 3000);
}




export const ChatAPI = {
    createChannel() {
        //але тут здається треба буде в bll сетать але це не точно
        if (ws !== null) {
            ws.removeEventListener('close', reconnectWS)
            ws.close()
        }
        ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
        ws.addEventListener('close', reconnectWS)
        ws.addEventListener('message', messageHandler)
        // ws.addEventListener('open', connectionIsStable)

    },
    closeChannel() {
        subscribers = []
        if (ws !== null) {
            ws.removeEventListener('message', messageHandler)
            ws.removeEventListener('close', reconnectWS)
            ws.close()
        }
    },
    subscribe(callback: SubscriberType) {
        subscribers.push(callback)
        return () => {
            subscribers = subscribers.filter(s => s !== callback)
        }
    },
    unsubscribe(callback: SubscriberType) {
        subscribers = subscribers.filter(s => s !== callback)
    },
    sendMessage(message: string) {
        if (ws !== null) {
            ws.send(message)
        }

    }
}

export type MessageType = {
    message: string
    photo: string
    userId: number
    userName: string
}

