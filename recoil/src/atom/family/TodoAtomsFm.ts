import {atom, atomFamily} from "recoil";
import {Todo} from "../../interface/TodoInterface";


export const TodoItemStateFm = atomFamily <
    Todo,//리턴 타입
    {id : number, text: string}//atomFamily 팩토리 함수 호출 파라미터
    >
({
    key : 'todoItemStateFm',
    default : (param)=>{ //selectorFamily를 사용하면 다른 상태를 참조할수 있다.
        return {
            id : param.id,
            text : param.text,
            isComplete : false
        }
    }
})

export const TodoListStateFm = atom<Todo[]>({
    key:"todoListStateFm",
    default : [],
    effects : [
        ({onSet})=>{
            onSet((newValue, oldValue, isReset)=>{
                console.debug('current newValue ',newValue)
                console.debug('current oldValue ',oldValue)
            })
        }
    ]
})
