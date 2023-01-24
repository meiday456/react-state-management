import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import {elementPositionStateFamily} from "../atom/AtomFamily";
import {useEffect, useRef} from "react";

interface Props {
    elementID : string
}


//요소 마다 가지는 element 값 을 사용하고자 한다면 atomFamily를 사용할 수 있다.
const ElementListItem = ({elementID}:Props)=>{

    const myRef = useRef<HTMLDivElement>(null);
    const position = useRecoilValue(elementPositionStateFamily([10,10]))


    // useEffect(() => {
    //     console.log(myRef.current!.offsetLeft,myRef.current!.offsetTop)
    //     setPosition([myRef.current!.offsetLeft,myRef.current!.offsetTop])
    // }, []);


    return (
        <div ref={myRef}>
            Element : {elementID},
            <>
            Position : {position}
            </>
        </div>
    )
}

export default ElementListItem