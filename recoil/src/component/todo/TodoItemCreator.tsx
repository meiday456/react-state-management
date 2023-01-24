import {useState} from "react";
import {useSetRecoilState} from "recoil";
import {todoListState} from "../../atom/Atoms";


const TodoItemCreator = () => {

    const [inputValue, setInputValue] = useState('')

    //set 함수만을 가져와 사용하는 것 같음
    const setTodoList = useSetRecoilState(todoListState);

    const addItem = () => {
        setTodoList((oldTodoList)=> [
            ...oldTodoList, {
                id: getId(),
                text: inputValue,
                isComplete: false
            }
        ])
        setInputValue('')
    }

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

export default TodoItemCreator

let id = 0;

function getId() {
    return id++
}