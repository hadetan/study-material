import { createSlice } from "@reduxjs/toolkit";

const MsgSlice = createSlice({
    name: "msgSlice",
    initialState: {
        msg: ""
    },
    reducers: {
        setMsg: (state, action) => {
            state.msg = action.payload;
        },
        resetMsg: (state, _action) => {
            state.msg = "";
        }
    }
});

export default MsgSlice.reducer;

export const { setMsg, resetMsg } = MsgSlice.actions;