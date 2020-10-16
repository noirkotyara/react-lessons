import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store';
import { Provider } from 'react-redux';


export let renderEntireTree = () => {
    ReactDOM.render(<React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
        document.getElementById('root')
    );
};
renderEntireTree(store.getState()); //вже викликаємо
//redux не вертає state змінений, тож викликаємо анонімну функцію, яка отримає зміни і віддасть rerender
store.subscribe(() => {
    // let newState = store.getState();
    renderEntireTree();
});

serviceWorker.unregister();
