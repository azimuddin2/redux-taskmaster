import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
    tasks: ITask[],
    filter: 'all' | 'high' | 'medium' | 'low',
}

const initialState: IInitialState = {
    tasks: [
        {
            id: "l2J5y9OxrkSUvusjXek2M",
            isCompleted: false,
            title: "Full Stack Web Development",
            description: "Full stack web development using javascript, typescript, react.js, react router, redux, node.js, express.js",
            priority: "high",
            dueDate: "2025-01-07T18:00:00.000Z",
        },
        {
            id: "N3nL1JNF_JwPaEXKNwXaW",
            isCompleted: true,
            title: "Front end Development",
            description: "Front end web development using javascript, typescript, react.js, react router, redux",
            priority: "low",
            dueDate: "2025-01-10T18:00:00.000Z",
        },
        {
            id: "fYnnUB8scT3QDCtgB8SDm",
            isCompleted: false,
            title: "Backend end Development",
            description: "Front end web development using javascript, typescript, node.js, express.js",
            priority: "medium",
            dueDate: "2025-01-16T18:00:00.000Z",
        }
    ],
    filter: 'all',
};

type DraftTask = Pick<ITask, "title" | "description" | "priority" | "dueDate">;

const createTask = (taskData: DraftTask): ITask => {
    return { id: nanoid(), isCompleted: false, ...taskData };
};

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<DraftTask>) => {
            const taskData = createTask(action.payload)
            state.tasks.push(taskData);
        },
        toggleCompleteState: (state, action: PayloadAction<string>) => {
            state.tasks.forEach((task) =>
                task.id === action.payload
                    ? (task.isCompleted = !task.isCompleted) : task
            );
        },
        deleteTask: (state, action: PayloadAction<string>) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload);
        },
    },
});

export const selectTasks = (state: RootState) => {
    return state.todo.tasks;
};

export const selectFilter = (state: RootState) => {
    return state.todo.filter;
};

export const { addTask, toggleCompleteState, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;