/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */

import React, {useState,useEffect} from 'react';
import { Link, Outlet,useNavigate } from 'react-router-dom';

import axios from 'axios';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham-dark.css';


const Feedback = () => {
    let navigate = useNavigate();
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

        // {make: "Toyota", model: "Celica", price: 35000},
        // {make: "Ford", model: "Mondeo", price: 32000},
        // {make: "Porsche", model: "Boxter", price: 72000}


    return(
        // Page Container
        <div className='mt-8 flex flex-col  w-11/12 mx-auto'>
            <h2 className='text-center text-xl lg:text-4xl font-extrabold text-primary'>Feedback</h2>
            <div className='flex justify-center flex-wrap mt-4'>
                <button onClick={() => navigate("/feedback/reqCourse")} className='btn  btn-hover-primary btn-rounded mx-2'>Request Courses</button>
                <button onClick={() => navigate("/feedback/reqCounselling")} className='btn  btn-hover-primary btn-rounded mx-2'>Request Counselling</button>
            </div>
            <div className='ag-theme-balham-dark mt-10' style={{height: 400, width: "100%"}}>
               <Outlet/>
            </div>



        {/* End Of Page Container */}
        </div>
        
    )
}

export default Feedback