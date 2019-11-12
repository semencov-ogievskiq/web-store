import React from 'react';
import ReactDOM from 'react-dom';
//Подключение css Bootstrap 4
import 'bootstrap/dist/css/bootstrap.min.css';
//Подключение js JQuery
import 'jquery/dist/jquery';
//Подключение js Bootstrap 4
import 'bootstrap/dist/js/bootstrap.min.js';
//Подключение css Своих стилей
import './index.css';
//Подключение родительского компонента react
import App from './App';
//Что то для тестирования,,????????????????????????????
import * as serviceWorker from './serviceWorker';
//Подключение Provider react-redux, используется для передачи состояния в компоненты
import { Provider } from 'react-redux'
//Подключение thunk, используется для использования в redux асинхронных действий
import thunk from 'redux-thunk'
//Подключение Redux
import {createStore, applyMiddleware} from "redux"
//Подключение модели данных
import reducer from "./model"

//Создаем магазин redux
const store =  createStore(reducer,applyMiddleware(thunk))

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
