import {takeLatest,put} from "redux-saga/effects"
import {decreaseNum, increaseNum} from "../store/counterStore";
import {createAction} from "@reduxjs/toolkit";


enum types {
    INCREASE_SAGA = 'INCREASE_SAGA',
    DECREASE_SAGA = 'DECREASE_SAGA'
}

const actions = {
    increase : createAction(types.INCREASE_SAGA),
    decrease : createAction(types.DECREASE_SAGA)
}


function* doIncrease(){
    yield put(increaseNum())

}

function* doDecrease(){
    yield put(decreaseNum())
}

function* counterSaga(){
    yield takeLatest(types.INCREASE_SAGA,doIncrease)
    yield takeLatest(types.DECREASE_SAGA,doDecrease)
}



export default counterSaga
export {actions}