import {combineReducers, createAction, createSlice, PayloadAction} from "@reduxjs/toolkit";

interface Props {
    num: number
}

const initialState: Props = {
    num: 0
}

const counterStore = createSlice({
    name: `counterStore`,
    initialState,
    reducers: {
        increaseNum: function (state: Props = initialState, action: PayloadAction) {
            return {
                ...state, num: state.num + 1
            }
        },
        decreaseNum: function (state: Props = initialState, action: PayloadAction) {
            return {
                ...state, num: state.num - 1
            }
        }
    }
})


const rootReducer = combineReducers({
    counter : counterStore.reducer
})

export const {increaseNum , decreaseNum} =  counterStore.actions
export type RootState = ReturnType<typeof rootReducer>
export default rootReducer


