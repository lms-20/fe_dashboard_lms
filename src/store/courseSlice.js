/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import { createSlice } from '@reduxjs/toolkit';

export const courseSlice = createSlice({
    name: 'courseData',
    initialState: {
        courseId: null,
        courseAdded: null,
        sectionAdded: null,
        quizAdded: null,
        linkVideo: null,
    },
    reducers: {
        storeIdCourse: (state, action) => {
            state.courseId = action.payload;
        },
        deleteIdCourse: (state, action) => {
            state.courseId = null
        },
        setFalseCourseAdded: (state, action) => {
            state.courseAdded = action.payload
        },
        setFalseSectionAdded: (state, action) => {
            state.sectionAdded = action.payload
        },
        setFalseQuizAdded: (state, action) => {
            state.quizAdded = action.payload
        },
        completedAddCoursePackages: (state, action) => {
            state.courseAdded = action.payload
            state.sectionAdded = action.payload
            state.quizAdded = action.payload
        },
        setLinkVideo: (state, action) => {
            state.linkVideo = action.payload
        }
    }
});

export const courseReducer = courseSlice.reducer;

export const { storeIdCourse, deleteIdCourse, setFalseCourseAdded, setFalseSectionAdded, setFalseQuizAdded, completedAddCoursePackages, setLinkVideo } = courseSlice.actions
