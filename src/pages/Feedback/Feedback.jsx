/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */

import React, { useState, useEffect } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

import axios from 'axios';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham-dark.css';


const Feedback = () => {
    let navigate = useNavigate();

    return (
        // Page Container
        <div className='mt-8 flex flex-col  w-11/12 mx-auto'>
            <h2 className='text-center text-xl lg:text-4xl font-extrabold text-primary'>Feedback</h2>
            <div className='flex justify-center flex-wrap mt-4'>
                <button onClick={() => navigate("/feedback/reqCourse")} className='btn  btn-hover-primary btn-rounded mx-2'>Request Courses</button>
                <button onClick={() => navigate("/feedback/reqCounselling")} className='btn  btn-hover-primary btn-rounded mx-2'>Request Counselling</button>
            </div>
            <div className='ag-theme-balham-dark mt-10' style={{ height: 400, width: "100%" }}>
                <Outlet />
            </div>



            {/* End Of Page Container */}
        </div>

    )
}

export default Feedback