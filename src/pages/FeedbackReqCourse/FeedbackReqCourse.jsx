/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */

import React, { useState, useEffect } from "react";
import axios from 'axios';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham-dark.css';
import { useSelector } from "react-redux";

const FeedbackReqCourse = () => {
    const token = useSelector(state => state.userData.user?.data.token);
    const apiUrl = "https://bef3-182-2-68-139.ngrok.io/req-courses"
    const [reqCourse, setReqCourse] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const retrieveReqCourses = async () => {
        const response = await axios.get(apiUrl, { headers: { "Authorization": `Bearer ${token}` } });
        return response.data;

    }

    useEffect(() => {
        const getAllMyReqCourses = async () => {
            try {
                setIsLoading(true);
                const data = await retrieveReqCourses();
                // console.log(data.data)
                if (data) {
                    setIsLoading(false);
                    setReqCourse(data.data);
                }
                // console.log("ini adalah",allMyCourses);
            } catch {
                setIsError(true);
                setIsLoading(false);
            }
        }
        getAllMyReqCourses();
    }, [])
    const rowData = reqCourse.map((elm) => {
        const row = {
            ID: elm.id,
            Name: elm.name,
            Goal: elm.goal,
            Description: elm.description
        }
        return row
    })
    return (
        <>
            <AgGridReact
                rowData={rowData}>
                <AgGridColumn field="ID" style={{ height: 400, width: 300 }} sortable={true} filter={true} ></AgGridColumn>
                <AgGridColumn field="Name" sortable={true} filter={true} ></AgGridColumn>
                <AgGridColumn field="Goal" sortable={true} filter={true} ></AgGridColumn>
                <AgGridColumn field="Description" sortable={true} filter={true} ></AgGridColumn>
            </AgGridReact>
        </>
    )
}
export default FeedbackReqCourse