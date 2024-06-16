import { createSlice } from "@reduxjs/toolkit";

const NotingSlice = createSlice({
    name: "NotingSlice",
    initialState: {
        note: []
    },
    reducers: {
        createNoting: (state, action) => {
            state.note.push(action.payload);
        },
        deleteNoting: (state, action) => {
            state.note = state.note.filter(note => note.id !== action.payload)
        }
    }
});

export default NotingSlice.reducer;

export const { createNoting, deleteNoting} = NotingSlice.actions;