import {Todo} from "../../interface/TodoInterface";
import {useRecoilState} from "recoil";
import {todoListState} from "../../atom/Atoms";

interface Props {
    item: Todo
}

const TodoItem = ({item}: Props) => {
    const [todoList, setTodoList] = useRecoilState(todoListState);
    const index = todoList.findIndex((listItem) => listItem === item);

    const editItemText = ({target: {value}}: { target: { value: string } }) => {
        const newList = replaceItemAtIndex(todoList, index, {
            ...item,
            text: value,
        });

        setTodoList(newList);
    };

    const toggleItemCompletion = () => {
        const newList = replaceItemAtIndex(todoList, index, {
            ...item,
            isComplete: !item.isComplete,
        });

        setTodoList(newList);
    };

    const deleteItem = () => {
        const newList = removeItemAtIndex(todoList, index);

        setTodoList(newList);
    };


    return (
        <div>
            <input type="text" value={item.text} onChange={editItemText}/>
            <input type="checkbox" checked={item.isComplete} onChange={toggleItemCompletion}/>
            <button onClick={deleteItem}>X</button>
        </div>
    )
}

export default TodoItem

function replaceItemAtIndex(arr:Todo[], index:number, newValue:Todo) {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr:Todo[], index:number) {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
}