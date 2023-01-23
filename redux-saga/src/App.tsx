import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./store/counterStore";
import {actions} from "./saga/counterSaga";

function App() {

    const dispatch = useDispatch()
    const counter = useSelector((state: RootState) => state.counter.num)

    const increaseHandle = () => {
        dispatch(actions.increase())
    }

    const decreaseHandle = () => {
        dispatch(actions.decrease())
    }

    return (
        <div className="App">
            <h2>store num : {counter}</h2>
            <button onClick={increaseHandle} >saga 더하기</button>
            <button onClick={decreaseHandle} >saga 빼기</button>
        </div>
    );
}

export default App;
