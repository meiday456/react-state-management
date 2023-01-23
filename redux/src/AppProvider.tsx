import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./reducers";
import {ActionType} from "./reducers/counter";

type Props = {
    value: any
    onIncrement: () => void
    onDecrement: () => void
}

function AppProvider() {

    const dispatch = useDispatch();
    const [todoValue, setTodoValue] = useState("");
    const value = useSelector((state: RootState) => state.counter)


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTodoValue(e.target.value)
    }

    const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setTodoValue("")
    }


    return (
        <div className="App">
            Clicked : {value} times
            <button
                onClick={() => {
                    dispatch({type: ActionType.INCREMENT})
                }}
            >
                +
            </button>
            <button
                onClick={ ()=>{
                    dispatch({type : ActionType.DECREMENT})}
                }
            >
                -
            </button>
            <form onSubmit={addTodo}>
                <input type="text" value={todoValue} onChange={handleChange}/>
                <input type="submit"/>
            </form>
        </div>
    );
}

export default AppProvider;
