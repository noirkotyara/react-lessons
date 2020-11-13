import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import AppMain from './App';


// export let renderEntireTree = () => {
    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
            <AppMain />
            </BrowserRouter>
        </Provider>,
        document.getElementById('root')
    );
// };
// renderEntireTree(store.getState()); //вже викликаємо
//redux не вертає state змінений, тож викликаємо анонімну функцію, яка отримає зміни і віддасть rerender
// store.subscribe(() => {    переходить у власність виконання connect from  'react-redux'
//     // let newState = store.getState();
//     renderEntireTree();
// });

serviceWorker.unregister();
