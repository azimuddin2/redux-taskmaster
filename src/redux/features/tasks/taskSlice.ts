import { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
    task: ITask[],
}

const initialState: IInitialState = {
    task: [
        {
            id: '676932a8bff8a9f9d2c9f64c',
            title: 'Initialize Frontend',
            description: 'Create task management project, home page, and routing, redux',
            dueDate: '2025-01-05',
            isCompleted: false,
            priority: 'High',
        },
        {
            id: '676932a8bff8a9f9d2c9f64c',
            title: 'Create github repo',
            description: 'Create task management project, home page, and routing, redux',
            dueDate: '2025-01-05',
            isCompleted: false,
            priority: 'Medium',
        },
    ],
};

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {},
});

export default taskSlice.reducer;