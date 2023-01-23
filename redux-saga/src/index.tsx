import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {applyMiddleware, configureStore} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga"
import counterStore from "./store/counterStore";
import counterSaga from "./saga/counterSaga";
import {Provider} from "react-redux"

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: counterStore,
    middleware: [sagaMiddleware]
})


root.render(
    <React.StrictMode>
        <Provider store={store}>

            <App/>
        </Provider>
    </React.StrictMode>
);
sagaMiddleware.run(counterSaga)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
