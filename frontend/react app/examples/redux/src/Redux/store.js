import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "./Slices/MessageSlice";
import NoteReducer from "./Slices/NoteSlice";
import MsgReducer from "./Slices/MsgsSlice";
import NotingReducer from "./Slices/NotingSlice";

export default configureStore({
    reducer: {
        messageReducer,
        NoteReducer,
        MsgReducer,
        NotingReducer
    }
});