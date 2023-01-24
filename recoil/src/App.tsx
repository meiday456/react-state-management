import React, {Suspense, useState} from 'react';
import './App.css';
import TextInput from "./component/TextInput";
import CharacterCounter from "./component/CharacterCounter";
import SelectorTest from "./component/SelectorTest";
import CurrentUserInfo from "./component/CurrentUserInfo";
import {currentUserIdState} from "./atom/AsynchronousAtoms";
import {useRecoilValue, useSetRecoilState} from "recoil";


function App() {

    const [tab ,setTab] = useState<number>(1)
    const currentUserId = useRecoilValue(currentUserIdState)
    const setCurrentUserIdState = useSetRecoilState(currentUserIdState)

    return (
        <div className="App">
            {/*<TextInput></TextInput>*/}
            {/*<CharacterCounter></CharacterCounter>*/}
            {/*  <TodoList></TodoList>*/}
            {/*  <hr/>*/}
            {/*  <SelectorTest/>*/}

            {/*promise resolve 되기전에 suspense로 먼저 출력할 것을 정의 할 수 있다.*/}
            {/*Suspense라는 React의 신기술을 사용하면 컴포넌트의 랜더링을
                어떤 작업이 끝날 때까지 잠시 중단시키고 다른 컴포넌트를 먼저 랜더링할 수 있습니다. */}
            {/*<Suspense fallback={<div>Loading</div>}>*/}
            {/*    <CurrentUserInfo/>*/}
            {/*</Suspense>*/}

            {/*recoil loadable*/}
            <div>
                selector 캐싱 확인
                <button onClick={()=> {
                    setTab(1)
                    setCurrentUserIdState(currentUserId+1)
                }}>1번으로 변경 하면서 id 값 증가</button>
                <button onClick={()=> {
                    setTab(1)
                }}>1번으로 변경</button>
                <button onClick={()=>setTab(2)}>2번으로 변경</button>
            </div>
            <div>
                {
                    (tab === 1) ?<CurrentUserInfo/> : <h2>다른 탭</h2>
                }

            </div>
        </div>
    );
}

export default App;
