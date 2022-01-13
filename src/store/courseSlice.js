/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import { createSlice } from '@reduxjs/toolkit';

export const courseSlice = createSlice({
    name: 'courseData',
    initialState: {
        courseId: null
    },
    reducers: {
        storeIdCourse: (state, action) => {
            state.courseId = action.payload;
            console.log(state.courseId)
        }
    }
});

export const courseReducer = courseSlice.reducer;

export const { storeIdCourse } = courseSlice.actions
