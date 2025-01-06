import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
    tasks: ITask[],
    filter: 'all' | 'high' | 'medium' | 'low',
}

const initialState: IInitialState = {
    tasks: [
        {
            id: '676932a8bff8a9f9d2c9f64c',
            title: 'Initialize Frontend',
            description: 'Create task management project, home page, and routing, redux',
            dueDate: '2025-01-05',
            isCompleted: false,
            priority: 'High',
        },
        {
            id: '676932a8bff8a9f9d2c9f64a',
            title: 'Create github repo',
            description: 'Create github repo, home page, and routing, redux',
            dueDate: '2025-01-05',
            isCompleted: false,
            priority: 'Medium',
        },
        {
            id: '676932a8bff8a9f9d2c9f64d',
            title: 'Create Backend Project',
            description: 'Create backend project, typescript, node.js, express.js',
            dueDate: '2025-01-05',
            isCompleted: false,
            priority: 'Low',
        },
    ],
    filter: 'all',
};

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {},
});

export const selectTasks = (state: RootState) => {
    return state.todo.tasks;
};

export const selectFilter = (state: RootState) => {
    return state.todo.filter;
};

export default taskSlice.reducer;