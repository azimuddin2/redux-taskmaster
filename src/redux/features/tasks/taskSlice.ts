import { RootState } from "@/redux/store";
import { ITask, TPriority } from "@/types";
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
            assignedTo: "N3nL1JNF_JwPaEXKNwXaf",
        },
        {
            id: "N3nL1JNF_JwPaEXKNwXaW",
            isCompleted: true,
            title: "Front end Development",
            description: "Front end web development using javascript, typescript, react.js, react router, redux",
            priority: "low",
            dueDate: "2025-01-10T18:00:00.000Z",
            assignedTo: null,
        },
        {
            id: "fYnnUB8scT3QDCtgB8SDm",
            isCompleted: false,
            title: "Backend end Development",
            description: "Front end web development using javascript, typescript, node.js, express.js",
            priority: "medium",
            dueDate: "2025-01-16T18:00:00.000Z",
            assignedTo: "N3nL1JNF_JwPaEXKNwXae"
        }
    ],
    filter: 'all',
};

type DraftTask = Pick<ITask, "title" | "description" | "priority" | "dueDate">;

const createTask = (taskData: DraftTask): ITask => {
    return {
        id: nanoid(),
        isCompleted: false,
        assignedTo: null,
        ...taskData
    };
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
        updateFilter: (state, action: PayloadAction<TPriority>) => {
            state.filter = action.payload;
        },
    },
});

export const selectTasks = (state: RootState) => {
    const filter = state.todo.filter;

    if (filter === "low") {
        return state.todo.tasks.filter((task) => task.priority === "low");
    } else if (filter === "medium") {
        return state.todo.tasks.filter((task) => task.priority === "medium");
    } else if (filter === "high") {
        return state.todo.tasks.filter((task) => task.priority === "high");
    } else {
        return state.todo.tasks;
    }
};

export const selectFilter = (state: RootState) => {
    return state.todo.filter;
};

export const {
    addTask,
    toggleCompleteState,
    deleteTask,
    updateFilter
} = taskSlice.actions;

export default taskSlice.reducer;