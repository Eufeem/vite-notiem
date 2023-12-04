import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import roleSlice from "./roleSlice";

export const store = configureStore({
    reducer: {
        user: userSlice,
        role: roleSlice
    }
})