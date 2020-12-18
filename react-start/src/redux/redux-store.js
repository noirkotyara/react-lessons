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

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer,
    authMe: authMe,
    appInit: appInitialization,
    form: formReducer
});

let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware))); //створили об'єкт store

window.store = store;

export default store;