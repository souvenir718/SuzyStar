import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'mobx-react';
import 'semantic-ui-css/semantic.min.css';
import ProductStore from './Product/Store/ProductStore';
import UserStore from './User/Store/UserStore';
import MainStore from './MainPage/MainStore';

ReactDOM.render(
    <Provider MainStore={MainStore} ProductStore={ProductStore} UserStore={UserStore}>
        <App />
    </Provider>,
    document.getElementById('root')
);
