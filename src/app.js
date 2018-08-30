import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouters from './routers/AppRouters';
import configureStore from './containers/configureStore';
import './styles/style.scss';

const store = configureStore();


const jsx = (
    <Provider store = {store}>
    <AppRouters />
    </Provider>
);

ReactDOM.render(jsx,document.getElementById('app'));
