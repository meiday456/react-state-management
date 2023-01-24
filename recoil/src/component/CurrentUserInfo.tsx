import {useRecoilValue, useRecoilValueLoadable} from "recoil";
import {currentUserQuery} from "../atom/AsynchronousAtoms";


const CurrentUserInfo = ()=>{

    // const userInfo = useRecoilValue(currentUserQuery)
    const userInfoLoadable = useRecoilValueLoadable(currentUserQuery)

    switch(userInfoLoadable.state){
        case 'hasValue':
            return (
                <>
                    <div>
                        {userInfoLoadable.contents.name}
                    </div>
                </>
            )
        case 'loading':
            return <div>Loading!</div>
        case 'hasError':
            throw userInfoLoadable.contents
    }
}

export default CurrentUserInfo