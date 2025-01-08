import { RootState } from "@/redux/store";
import { IUser } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

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
    ],
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
});

export const selectUsers = (state: RootState) => {
    return state.user.users;
};

export default userSlice.reducer;