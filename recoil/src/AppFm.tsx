import React, {useState} from 'react';
import './App.css';
import CurrentUserInfo from "./component/CurrentUserInfo";
import {currentUserIdState, currentUserQueryFm} from "./atom/AsynchronousAtoms";
import {useRecoilValue, useSetRecoilState} from "recoil";
import TodoListFm from "./component/todo/fm/TodoListFm";


export default function AppFm() {

    return (
        <div className="App">
            <TodoListFm/>
        </div>
    );
}


