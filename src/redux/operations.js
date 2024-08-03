import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL='https://62584f320c918296a49543e7.mockapi.io'

export const getTasks = createAsyncThunk('tasks/getTasks', async () => {
    try {
        const res = await axios.get('/tasks')
        return res.data        
    } catch (err) {
        console.log(err)
    }
})

export const addTask = createAsyncThunk('tasks/addTask', async (text) => {
    try {
        const newTask = await axios.post("/tasks", {text})
        return newTask    
    } catch (err) {
        console.log(err)
    }
}) 

export const deleteTask = createAsyncThunk('tasks/deleteTask', async (id) => {
    try {
        const deleteTask = await axios.delete(`/tasks/${id}`)
        return deleteTask   
    } catch (err) {
        console.log(err)
    }
}) 

export const toggleComplete = createAsyncThunk('tasks/toggleComplete', async (id) => {
    try {
        const deleteTask = await axios.delete(`/tasks/${id}`)
        return deleteTask   
    } catch (err) {
        console.log(err)
    }
}) 