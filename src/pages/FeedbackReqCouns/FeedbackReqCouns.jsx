/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */

import React, {useState,useEffect} from "react";
import axios from 'axios';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham-dark.css';

const FeedbackReqCouns = () => {
    
    const apiUrl = "https://61d3c74ab4c10c001712ba8e.mockapi.io/requestCouns"
    const [reqCouns,setReqCounse] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const retrieveReqCouns = async () => {
        const response = await axios.get(apiUrl);
        return response.data;

    }

    useEffect(() => {
        const getAllMyReqCouns = async () => {
            try {
                setIsLoading(true);
                const data = await retrieveReqCouns();
                if (data) {
                    setIsLoading(false);
                    setReqCounse(data);
                }
                // console.log("ini adalah",allMyCourses);
            } catch {
                setIsError(true);
                setIsLoading(false);
            }
        }
        getAllMyReqCouns();
    },[])
    const rowData = reqCouns.map((elm) => {
        const row = {
            Course : elm.name,
            Section : elm.section,
            Description : elm.description,
            Goal : elm.goal,
            Email: elm.email,
            Posted : elm.createdAt
        }
        return row
    })

    return(
        <AgGridReact
        rowData={rowData}>
            <AgGridColumn field="Course" style={{height: 400, width: 300}} sortable={ true } filter={ true } ></AgGridColumn>
            <AgGridColumn field="Section" sortable={ true } filter={ true }  ></AgGridColumn>
            <AgGridColumn field="Description" sortable={ true } filter={ true } ></AgGridColumn>
            <AgGridColumn field="Goal" sortable={ true } filter={ true } ></AgGridColumn>
            <AgGridColumn field="Email" sortable={ true } filter={ true } ></AgGridColumn>
            <AgGridColumn field="Posted" sortable={ true } filter={ true } ></AgGridColumn>

        </AgGridReact>
    )
}
export default FeedbackReqCouns;