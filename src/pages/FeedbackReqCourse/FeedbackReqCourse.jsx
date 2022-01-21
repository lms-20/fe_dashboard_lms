/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */

import React, {useState,useEffect} from "react";
import axios from 'axios';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham-dark.css';

const FeedbackReqCourse = () => {
    const apiUrl = "https://61d3c74ab4c10c001712ba8e.mockapi.io/requestCourse"
    const [reqCourse,setReqCourse] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const retrieveReqCourses = async () => {
        const response = await axios.get(apiUrl);
        return response.data;

    }

    useEffect(() => {
        const getAllMyReqCourses = async () => {
            try {
                setIsLoading(true);
                const data = await retrieveReqCourses();
                if (data) {
                    setIsLoading(false);
                    setReqCourse(data);
                }
                // console.log("ini adalah",allMyCourses);
            } catch {
                setIsError(true);
                setIsLoading(false);
            }
        }
        getAllMyReqCourses();
    },[])
    const rowData = reqCourse.map((elm) => {
        const row = {
            ID : elm.id,
            Category : elm.category_id.name,
            Name : elm.name,
            Goal : elm.goal,
            Description : elm.description
        }
        return row
    })
    return(
        <AgGridReact
        rowData={rowData}>
            <AgGridColumn field="ID" style={{height: 400, width: 300}} sortable={ true } filter={ true } ></AgGridColumn>
            <AgGridColumn field="Category" sortable={ true } filter={ true }  ></AgGridColumn>
            <AgGridColumn field="Name" sortable={ true } filter={ true } ></AgGridColumn>
            <AgGridColumn field="Goal" sortable={ true } filter={ true } ></AgGridColumn>
            <AgGridColumn field="Description" sortable={ true } filter={ true } ></AgGridColumn>
        </AgGridReact>
    )
}
export default FeedbackReqCourse