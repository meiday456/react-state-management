import {DefaultValue, selector} from "recoil";
import {numState, textState, todoListFilterState, todoListState} from "../atom/Atoms";
import {Todo} from "../interface/TodoInterface";

export const charCountState = selector<number>({
    key: "charCountState",
    get: ({get}) => {
        const value = get(textState)
        return value.length
    }
})

export const filteredTodoListState = selector<Todo[]>({
    key: "filteredTodoListState",
    get: ({get}) => {
        const filter = get(todoListFilterState);
        const list = get(todoListState)

        switch (filter) {
            case 'Show Completed':
                return list.filter((item) => item.isComplete)
            case 'Show Uncompleted':
                return list.filter((item) => !item.isComplete)
            default:
                return list;
        }
    }
})

export const todoListStatsState = selector({
    key: "todoListStatsState",
    get: ({get}) => {
        const todoList = get(todoListState)
        const totalNum = todoList.length
        const totalCompletedNum = todoList.filter((item) => item.isComplete).length
        const totalUncompletedNum = todoList.filter((item) => !item.isComplete).length
        const percentCompletedNum = totalNum === 0 ? 0 : (100 / totalNum * totalCompletedNum).toFixed(2)

        return {
            totalNum, totalCompletedNum, totalUncompletedNum, percentCompletedNum
        }
    }
})


//get의 리턴 타입과 set의 콜백 파라미터의 값이 일치해야한다.
export const numStateAddRandom = selector<number>({
    key: "numStateOverZero",
    get: ({get}) => { //필수 함수
        return get(numState) + (Math.random())
    },
    //resetter를 호출하면 newValue는 defaultValue 인스턴스가 된다.
    set: ({set, reset}, newValue) => { //set 선언으로 값을 변경할 수 있다
        if (newValue instanceof DefaultValue) {
            console.log('numState',numState)
            reset(numState)
        } else {
            set(numState, newValue as number + (Math.random()))
        }
    }
})