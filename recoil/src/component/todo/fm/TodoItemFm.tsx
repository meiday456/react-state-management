import {Todo} from "../../../interface/TodoInterface";
import {useRecoilState} from "recoil";
import {TodoItemStateFm, TodoListStateFm} from "../../../atom/family/TodoAtomsFm";
import React, {useCallback} from "react";

interface Props {
    id : number,
    text : string
}

const TodoItemFm = ({id , text}:Props) => {

    //이렇게 선언하여 사용하는 경우에 list 정보와 item이 가지는 atom 정보는 값이 상이하게 된다.
    //그렇기 때문에 식별값을 가지고 atomFamily를 생성해주는것이 바람 직하다
    //이 와 같은 입력 text로는 구분이 어려움 delete를 하는경우에도 자기 자긴의 컴포넌트를 삭제해야하는데
    //list에서 array method로 컴포넌트를 생성하기 때문에 제어가 불가능하다.
    const [todo, setTodo] = useRecoilState(TodoItemStateFm({id, text}))

    const [todoList, setTodoList] = useRecoilState(TodoListStateFm);
    // const index = todoList.findIndex((listItem) => listItem === item);
    //
    const editItemText = useCallback(
        (text:string) => {
            console.log('text',text)
            console.log('todo',todo)
            setTodo({...todo , text : text})
        },
        [todo],
    );
    //
    const toggleItemCompletion = () => {
        setTodo({
            ...todo , isComplete : !todo.isComplete
        })
    };
    //이렇게 삭제하는경우에  todoList 가 변경이 되어 리렌더링이 실시가 된다,
    const deleteItem = () => {
        const newList = removeItemAtIndex(todoList, todo.id);
        setTodoList(newList);
    };
    //

    return (
        <div>
            <input type="text" value={todo.text}
                   onChange={(event:React.ChangeEvent<HTMLInputElement>)=>editItemText(event.target.value)}
            />
            <input type="checkbox" checked={todo.isComplete}
                   onChange={toggleItemCompletion}
            />
            <button
                onClick={deleteItem}
            >X</button>
        </div>
    )
}

export default React.memo(TodoItemFm)
// export default TodoItemFm


// function replaceItemAtIndex(arr:Todo[], index:number, newValue:Todo) {
//     return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
// }
//
function removeItemAtIndex(arr:Todo[], id:number) {
    const newArr = [...arr]
    const findIndex = arr.findIndex((todo)=>todo.id === id)
    if (findIndex >-1){
        newArr.splice(findIndex ,1)
    }

    return newArr;
}