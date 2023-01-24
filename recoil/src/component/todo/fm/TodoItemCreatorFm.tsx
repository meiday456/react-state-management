import {useState} from "react";
import {useRecoilCallback, useSetRecoilState} from "recoil";
import {TodoListStateFm} from "../../../atom/family/TodoAtomsFm";


const TodoItemCreatorFm = () => {

    const [inputValue, setInputValue] = useState('')
    const [idNum , setIDNum] = useState(1)

    //set 함수만을 가져와 사용하는 것 같음
    // const setTodoList = useSetRecoilState(todoListState);

    const addItem = useRecoilCallback(({snapshot, set}) => () => {
        const todoList = snapshot.getLoadable(TodoListStateFm).getValue()
        set(TodoListStateFm,[...todoList, { id : idNum , text : inputValue , isComplete : false}])
        setIDNum(num=>num+1)

        setInputValue('')
    })

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }

    return (
        <div>
            <input type="text" value={inputValue} onChange={onChange}/>
            <button onClick={addItem}>Add</button>
        </div>

    )
}

export default TodoItemCreatorFm
