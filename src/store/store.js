/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./userSlice";

export const store = configureStore({
    reducer
});
