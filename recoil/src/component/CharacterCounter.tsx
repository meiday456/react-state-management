import {useRecoilValue} from "recoil";
import {charCountState} from "../selector/Selector";


const CharacterCounter = ()=>{
    // const [text, setText] = useRecoilState(textState)

    const length = useRecoilValue(charCountState)

    return (
        <div>CharaterCount : {length}</div>
    )
}

export default CharacterCounter