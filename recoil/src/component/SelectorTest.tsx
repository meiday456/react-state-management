import {numStateAddRandom, todoListStatsState} from "../selector/Selector";
import {useRecoilValue, useResetRecoilState, useSetRecoilState} from "recoil";
import {numState} from "../atom/Atoms";


const SelectorTest = ()=>{
    const num = useRecoilValue(numState)
    const getNum = useRecoilValue(numStateAddRandom)
    const setNum = useSetRecoilState(numStateAddRandom)
    // const resetNum = useResetRecoilState(numState) //atom을 지정하는경우 기본 값으로 초기화된다.
    const resetNum = useResetRecoilState(numStateAddRandom)

    return (
        <>
            <h1>atom number {num }</h1>
            <h1>selector get: {getNum}</h1>
            <button onClick={()=>setNum(5)}>값을 바꿔 보세요</button>
            <button onClick={resetNum}>값을 초기화 해보세요</button>
        </>

    )
}
export default SelectorTest