import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux"
import rootReduce from "./reducers";
import {ActionType} from "./reducers/counter";
import {Provider} from "react-redux";
import AppProvider from "./AppProvider";
import {middleware} from "./reducers/middleware";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);



const store = createStore(rootReduce)
const storeProvider = createStore(rootReduce,middleware)
const render = () => root.render(
    <React.StrictMode>
        <App
            value={store.getState()}
            onIncrement={() => store.dispatch({type: ActionType.INCREMENT})}
            onDecrement={() => store.dispatch({type: ActionType.DECREMENT})}
        />
        <Provider store={storeProvider}>
            <AppProvider/>
        </Provider>
    </React.StrictMode>
);

render()
store.subscribe(render)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
