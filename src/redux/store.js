import { configureStore} from '@reduxjs/toolkit'
import { taskReduser } from './taskSlice';
import { filtersReduser } from './filterSlice';

export const store = configureStore({
    reducer: {
        tasks: taskReduser,
        filters: filtersReduser 
    }
})
