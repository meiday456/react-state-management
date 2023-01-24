import {atomFamily} from "recoil";


export const elementPositionStateFamily = atomFamily({
    key : "ElementPosition",
    // default : [0,0]
    default : param => param,
    effects : [
        ()=>{

        }
    ]
})



