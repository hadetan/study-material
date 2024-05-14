import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice";
//while exporting make sure in counterslice there should'nt be any curly braces around it else it will not be able to read it and throw many errors.

export const store = configureStore({
    reducer: {
        counter: counterSlice
    }
})