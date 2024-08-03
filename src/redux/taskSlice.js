import { createSlice } from "@reduxjs/toolkit"
import { getTasks, addTask, deleteTask } from "./operations"

// const initialState = [
//     { id: 0, text: "Learn HTML and CSS", completed: true },
//     { id: 1, text: "Get good at JavaScript", completed: true },
//     { id: 2, text: "Master React", completed: false },
//     { id: 3, text: "Discover Redux", completed: false },
//     { id: 4, text: "Build amazing apps", completed: false }
// ] 

export const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        items: [],
        isLoading: false,
        error: null
    },
    reducers: {
        deleteTask(state, action){
            return state.filter(task=>task.id!==action.payload)
        },
        toggleComplete(state, action){
            return state.map(item => {
                    return item.id!==action.payload?item:{...item, completed:!item.completed}
            })}
        },
    extraReducers: (builder) => {
        builder
        .addCase(getTasks.pending, (state) => {
            state.isLoading=true
        })
        .addCase(getTasks.fulfilled, (state, action) => {
            state.isLoading=false
            state.error = null
            state.items = action.payload
        })
        .addCase(getTasks.rejected, (state, action) =>{
            state.error = action.payload
        })

        .addCase(addTask.pending, (state) => {
            state.isLoading=true
        })
        .addCase(addTask.fulfilled, (state, action) => {
            state.isLoading=false
            state.error = null
            state.items.push(action.payload.data)
        })
        .addCase(addTask.rejected, (state, action) =>{
            state.error = action.payload
        })

        .addCase(deleteTask.pending, (state) => {
            state.isLoading=true
        })
        .addCase(deleteTask.fulfilled, (state, action) => {
            state.isLoading=false
            state.error = null
            const taskIdx = state.items.findIndex(item=>item.id === action.payload)
            state.items.slice(taskIdx, 1)
        })
        .addCase(deleteTask.rejected, (state, action) =>{
            state.error = action.payload
        })
    }}
)

export const { toggleComplete } = taskSlice.actions
export const taskReduser = taskSlice.reducer