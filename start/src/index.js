import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store';



export let renderEntireTree = (storeState) => {
    ReactDOM.render( <React.StrictMode>
    <App state={storeState} store={store}/>
    </React.StrictMode>,
    document.getElementById('root')
);
};
renderEntireTree(store.getState()); //вже викликаємо
//redux не вертає state змінений, тож викликаємо анонімну функцію, яка отримає зміни і віддасть rerender
store.subscribe(()=>{
    let newState = store.getState();
    renderEntireTree(newState);
});

serviceWorker.unregister();