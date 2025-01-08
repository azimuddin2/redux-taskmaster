import { RootState } from "@/redux/store";
import { IUser } from "@/types";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
    users: IUser[],
};

const initialState: IInitialState = {
    users: [
        {
            id: "N3nL1JNF_JwPaEXKNwXaf",
            name: "Azim"
        },
        {
            id: "N3nL1JNF_JwPaEXKNwXak",
            name: "Anisul"
        },
        {
            id: "N3nL1JNF_JwPaEXKNwXae",
            name: "Ayman"
        },
    ],
};

type DraftUser = Pick<IUser, "name">;

const createUser = (userData: DraftUser): IUser => {
    return { id: nanoid(), ...userData };
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<DraftUser>) => {
            const userData = createUser(action.payload);
            state.users.push(userData);
        },
        removeUser: (state, action: PayloadAction<string>) => {
            state.users = state.users.filter((user) => user.id !== action.payload);
        },
    },
});

export const selectUsers = (state: RootState) => {
    return state.user.users;
};

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;