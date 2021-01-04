import authMe from "./authMe";
import messagesReducer from "./messages-reducer";
import profileReducer from "./profile-reducer";
import sideBarReducer from "./sideBar-reducer";
import usersReducer from "./users-reducer";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import appInitialization from "./app-reducer";
import { composeWithDevTools } from 'redux-devtools-extension';


const { createStore, combineReducers, applyMiddleware } = require("redux");

let rootReducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer,
    authMe: authMe,
    appInit: appInitialization,
    form: formReducer
});

type InferValueType<T> = T extends {[key: string]: infer U} ? U : never

export type InferActionsType<T extends {[key: string]: (...args: any[]) => any}> = ReturnType<InferValueType<T>>

export type AppStateType = ReturnType<typeof rootReducers>;

let store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunkMiddleware))); //створили об'єкт store
//@ts-ignore
window.store = store;

export default store;