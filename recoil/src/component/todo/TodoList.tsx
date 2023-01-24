import {useRecoilValue} from "recoil";
import TodoItemCreator from "./TodoItemCreator";
import TodoItem from "./TodoItem";
import TodoListFilters from "./TodoListFilters";
import {filteredTodoListState} from "../../selector/Selector";
import TodoListStats from "./TodoListStats";

const TodoList = () => {
    // const todoList = useRecoilValue(todoListState)//값만을 가져와서 사용하는것 같음
    const todoList = useRecoilValue(filteredTodoListState)//값만을 가져와서 사용하는것 같음


    return (
        <>
            <TodoListStats/>
            <TodoListFilters/>
            <TodoItemCreator/>
            {
                todoList.map((todoItem) => {
                    return <TodoItem key={todoItem.id} item={todoItem}/>
                })
            }
        </>
    )
}
export default TodoList