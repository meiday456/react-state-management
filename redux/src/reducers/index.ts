import {combineReducers} from "redux";
import todos from "./todos"
import counter from "./counter"
const rootReduce = combineReducers({
    counter,
    todos
})

export default rootReduce

//ReturnType<typeof _____> 는 특정 함수의 반환값을 추론해줍니다
export type RootState = ReturnType<typeof rootReduce>