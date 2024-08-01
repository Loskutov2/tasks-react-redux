import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        changeValue(state, action){
            return {
                ...state,
                value: state.value+action.payload
            }
        }
    }
})

export const { changeValue } = counterSlice.actions
export const store = configureStore({reducer:counterSlice.reducer})