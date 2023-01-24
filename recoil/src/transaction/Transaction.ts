import {useRecoilTransaction_UNSTABLE} from "recoil";
import {numState, textState} from "../atom/Atoms";

//다중업데이트 콜
//여러 value에 대한 리턴 callback 함수
export const goForward = useRecoilTransaction_UNSTABLE(({get, set, reset}) =>()=>{

    const text = get(textState)
    const num = get(numState)

    console.log(text)
    console.log(num)

},[textState,numState])