import {atom} from "recoil";
import {Todo} from "../interface/TodoInterface";


export const textState = atom({
    key : 'textState',
    default : ""
})



export const todoListState = atom<Todo[]>({
    key:"todoListState",
    default : []
})

export const todoListFilterState = atom({
    key : "todoListFilterState",
    default : "Show All"
})

