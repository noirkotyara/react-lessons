import authMe from "./authMe";
import messagesReducer from "./messages-reducer";
import profileReducer from "./profile-reducer";
import sideBarReducer from "./sideBar-reducer";
import usersReducer from "./users-reducer";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

const { createStore, combineReducers, applyMiddleware } = require("redux");

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer,
    authMe: authMe,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware)); //створили об'єкт store

window.store = store;

export default store;