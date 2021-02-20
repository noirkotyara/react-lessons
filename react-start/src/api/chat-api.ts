
/////types
export type SubMessageType = (messages: Array<MessageType>) => void;
export type SubStatusType = (status: StatusType) => void;

export type MessageType = {
    message: string
    photo: string
    userId: number
    userName: string
}
export type StatusType = 'pending' | 'ready' | 'error'
export type EventType = 'messages-received' | 'ws-status'
export type SubscribersType = {
    'messages-received': Array<SubMessageType>,
    'ws-status': Array<SubStatusType>
}
let subscribers: SubscribersType = {
    'messages-received': [],
    'ws-status': []
}
/////


let ws: WebSocket | null = null;

const messageHandler = (event: MessageEvent<any>): void => {
    let newMessagesData = JSON.parse(event.data);
    subscribers['messages-received'].forEach(s => s(newMessagesData))
};
const statusHandler = (status: StatusType): void => {
    subscribers['ws-status'].forEach(s => s(status))
};

const openHandler = () => statusHandler('ready')
const errorHandler = () => statusHandler('error')


const reconnectWS = () => {
    console.log('CLOSE WS');
    statusHandler('pending')
    setTimeout(ChatAPI.createChannel, 3000);
}

const cleanUp = () => {
    if (ws !== null) {
        ws.removeEventListener('close', reconnectWS)
        ws.removeEventListener('message', messageHandler)
        ws.removeEventListener('open', openHandler)
        ws.removeEventListener('error', errorHandler)
        ws.close()
    }
}


export const ChatAPI = {
    createChannel() {
        cleanUp()
        ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
        statusHandler('pending')
        ws.addEventListener('close', reconnectWS)
        ws.addEventListener('message', messageHandler)
        ws.addEventListener('open', openHandler)
        ws.addEventListener('error', errorHandler)

    },
    closeChannel() {
        subscribers['messages-received'] = []
        subscribers['ws-status'] = []
        cleanUp()
    },
    subscribe(event: EventType, callback: SubMessageType | SubStatusType) {
        //@ts-ignore
        subscribers[event].push(callback)
        return () => {
             //@ts-ignore
            subscribers = subscribers[event].filter(s => s !== callback)
        }
    },
    unsubscribe(event: EventType, callback: SubMessageType | SubStatusType) {
        //@ts-ignore
        subscribers = subscribers[event].filter(s => s !== callback)
    },
    sendMessage(message: string) {
        if (ws !== null) {
            ws.send(message)
        }

    }
}



