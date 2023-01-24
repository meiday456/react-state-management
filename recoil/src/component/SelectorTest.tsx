import {numStateAddRandom, todoListStatsState} from "../selector/Selector";
import {atom, DefaultValue, selectorFamily, useRecoilValue, useResetRecoilState, useSetRecoilState} from "recoil";
import {numState} from "../atom/Atoms";


const myNumberState = atom({
    key: 'MyNumber',
    default: 2,
});

const myMultipliedState = selectorFamily<number, number>({
    key: 'MyMultipliedNumber',
    get: (multiplier) => ({get}) => {
        console.debug('??~~~')
        return get(myNumberState) * multiplier;
    },

    // optional set
    set: (multiplier) => ({set, reset}, newValue) => {
        console.debug('??')
        if (newValue instanceof DefaultValue) {

            reset(myNumberState)
        } else {
            set(myNumberState, newValue / multiplier);
        }
    },
});

const SelectorTest = () => {
    const num = useRecoilValue(numState)
    const getNum = useRecoilValue(numStateAddRandom)
    const setNum = useSetRecoilState(numStateAddRandom)
    // const resetNum = useResetRecoilState(numState) //atom을 지정하는경우 기본 값으로 초기화된다.
    const resetNum = useResetRecoilState(numStateAddRandom)


    // defaults to 2
    const number = useRecoilValue(myNumberState);

    // defaults to 200
    const multipliedNumber = useRecoilValue(myMultipliedState(100));

    return (
        <>
            <h1>atom number {num}</h1>
            <h1>selector get: {getNum}</h1>
            <button onClick={() => setNum(5)}>값을 바꿔 보세요</button>
            <button onClick={resetNum}>값을 초기화 해보세요</button>
            <br/>
            <h2>selectorFamily test</h2>
            <h3>number : {number}</h3>
            <h3>multipliedNumber number : {multipliedNumber}</h3>
        </>

    )
}
export default SelectorTest
