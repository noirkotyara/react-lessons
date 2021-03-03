import authMe from "./authMe";
import messagesReducer from "./messages-reducer";
import profileReducer from "./profile-reducer";
import sideBarReducer from "./sideBar-reducer";
import usersReducer from "./users-reducer";
import thunkMiddleware, { ThunkAction } from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import appInitialization from "./app-reducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import { Action } from "redux";
import chatReducer from "./chat-reducer";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./sagas/root-saga";


const sagaMiddleware = createSagaMiddleware()

const { createStore, combineReducers, applyMiddleware } = require("redux");

let rootReducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer,
    authMe: authMe,
    appInit: appInitialization,
    chatPage: chatReducer,
    form: formReducer
});

let store = createStore(rootReducers, 
    composeWithDevTools(applyMiddleware(thunkMiddleware, sagaMiddleware))
    );
//@ts-ignore
window.store = store;
export default store;

sagaMiddleware.run(rootSaga)

type InferValueType<T> = T extends {[key:string]: infer U}? U : never
export type InferActionsType<T extends {[key:string]: (...args: any) => any}> = ReturnType<InferValueType<T>>
export type BasicThunkType<A extends Action,R = Promise<void> > = ThunkAction<R, AppStateType, unknown, A>
export type AppStateType = ReturnType<typeof rootReducers>

export type BasicComponentType = React.ComponentType<{store: AppStateType}>//for compose
