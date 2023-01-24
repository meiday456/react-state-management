import React, {Suspense, useState} from 'react';
import './App.css';
import TextInput from "./component/TextInput";
import CharacterCounter from "./component/CharacterCounter";
import SelectorTest from "./component/SelectorTest";
import CurrentUserInfo from "./component/CurrentUserInfo";
import {currentUserIdState, currentUserQueryFm} from "./atom/AsynchronousAtoms";
import {useRecoilValue, useSetRecoilState} from "recoil";
import ElementListItem from "./component/ElementListItem";
import TodoList from "./component/todo/TodoList";


function App() {

    const [tab ,setTab] = useState<number>(1)
    const currentUserId = useRecoilValue(currentUserIdState)
    const setCurrentUserIdState = useSetRecoilState(currentUserIdState)

    //파라미터를 받아서 값을 다르게 호출할수 있음
    const currentUserQueryFmState = useRecoilValue(currentUserQueryFm(5))

    const eList = ["1","2","3","4","5"]

    return (
        <div className="App">
            {/*<TextInput></TextInput>*/}
            {/*<CharacterCounter></CharacterCounter>*/}
              <TodoList></TodoList>
            {/*  <hr/>*/}
            {/*  <SelectorTest/>*/}
            {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~₩*/}
            {/*promise resolve 되기전에 suspense로 먼저 출력할 것을 정의 할 수 있다.*/}
            {/*Suspense라는 React의 신기술을 사용하면 컴포넌트의 랜더링을
                어떤 작업이 끝날 때까지 잠시 중단시키고 다른 컴포넌트를 먼저 랜더링할 수 있습니다. */}
            {/*<Suspense fallback={<div>Loading</div>}>*/}
            {/*    <CurrentUserInfo/>*/}
            {/*</Suspense>*/}

            {/*recoil loadable*/}

            {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~₩*/}
            {/*<div>*/}
            {/*    selector 캐싱 확인*/}
            {/*    <button onClick={()=> {*/}
            {/*        setTab(1)*/}
            {/*        setCurrentUserIdState(currentUserId+1)*/}
            {/*    }}>1번으로 변경 하면서 id 값 증가</button>*/}
            {/*    <button onClick={()=> {*/}
            {/*        setTab(1)*/}
            {/*    }}>1번으로 변경</button>*/}
            {/*    <button onClick={()=>setTab(2)}>2번으로 변경</button>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    {*/}
            {/*        (tab === 1) ?<CurrentUserInfo/> : <h2>다른 탭</h2>*/}
            {/*    }*/}
            {/*    {*/}
            {/*        currentUserQueryFmState ?<h2>{currentUserQueryFmState.name}</h2> : <></>*/}
            {/*    }*/}
            {/*</div>*/}

            {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~₩*/}
            {/*{*/}
            {/*    eList.map((item)=>{*/}
            {/*        return <ElementListItem elementID={item}/>*/}
            {/*    })*/}
            {/*}*/}

        </div>
    );
}

export default App;
