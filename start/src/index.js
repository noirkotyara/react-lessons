import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/state';



export let renderEntireTree = (storeState) => {
    ReactDOM.render( <React.StrictMode>
    <App state={storeState} store={store}/>
    </React.StrictMode>,
    document.getElementById('root')
);
};
renderEntireTree(store.getState()); //вже викликаємо
store.subscribe(renderEntireTree);

serviceWorker.unregister();