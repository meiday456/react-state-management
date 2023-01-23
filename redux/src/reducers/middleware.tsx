import {applyMiddleware} from "redux";

const loggerMiddleware = (store:any) => (next:any) =>(action:any)=>{
    console.log("store",store)
    console.log("action",action)
    next(action)
}

export const middleware = applyMiddleware(loggerMiddleware)