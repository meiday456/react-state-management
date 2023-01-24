import TodoItemCreatorFm from "./TodoItemCreatorFm";
import {useRecoilValue} from "recoil";
import {TodoListStateFm} from "../../../atom/family/TodoAtomsFm";
import TodoItemFm from "./TodoItemFm";

const TodoListFm = () => {

    const todoList = useRecoilValue(TodoListStateFm)



    return (
        <>
            <TodoItemCreatorFm/>
            {
                todoList.map((todoItem) => {
                    return <TodoItemFm id = {todoItem.id} text={todoItem.text}/>
                })
            }
        </>
    )
}
export default TodoListFm