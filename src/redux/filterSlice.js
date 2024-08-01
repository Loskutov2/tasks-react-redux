import { createSlice } from "@reduxjs/toolkit";

const initialState = {status: "all"};

export const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setStatusFilter(state, action){
            state.status=action.payload
        }}
})

export const { setStatusFilter } = filterSlice.actions
export const filtersReduser = filterSlice.reducer