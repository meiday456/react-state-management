import {selector} from "recoil";
import {textState, todoListFilterState, todoListState} from "../atom/Atoms";

export const charCountState = selector({
    key: "charCountState",
    get: ({get}) => {
        const value = get(textState)
        return value.length
    }
})

export const filteredTodoListState = selector({
    key: "filteredTodoListState",
    get: ({get}) => {
        const filter = get(todoListFilterState);
        const list = get(todoListState)

        switch(filter){
            case 'Show Completed':
                return list.filter((item)=>item.isComplete)
            case 'Show Uncompleted':
                return list.filter((item)=>!item.isComplete)
            default:
                return list;
        }
    }
})

export const todoListStatsState = selector({
    key : "todoListStatsState",
    get:({get})=>{
        const todoList = get(todoListState)
        const totalNum = todoList.length
        const totalCompletedNum = todoList.filter((item)=>item.isComplete).length
        const totalUncompletedNum = todoList.filter((item)=>!item.isComplete).length
        const percentCompletedNum =totalNum === 0 ? 0:  (100 / totalNum * totalCompletedNum).toFixed(2)
        
        return {
            totalNum,totalCompletedNum,totalUncompletedNum,percentCompletedNum
        }
    }
})