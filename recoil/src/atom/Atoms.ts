import {atom} from "recoil";
import {Todo} from "../interface/TodoInterface";


export const textState = atom({
    key : 'textState',
    default : "",
    effects : [

        ({onSet})=>{ //logging
            onSet(str=>{
                console.debug('current text ',str)
            })
        },
        ({onSet})=>{ // 로깅의 더 복잡한 예시에서는 변화의 히스토리를 유지할 수 있습니다
            onSet((newValue, oldValue,isReset)=>{
                console.debug('current newValue ',newValue)
                console.debug('current oldValue ',oldValue)
                console.debug('current isReset ',isReset)
            })
        }
    ]
})



export const todoListState = atom<Todo[]>({
    key:"todoListState",
    default : []
})

export const todoListFilterState = atom({
    key : "todoListFilterState",
    default : "Show All"
})


export const numState = atom<number>({
    key : "numState",
    default : 10
})
