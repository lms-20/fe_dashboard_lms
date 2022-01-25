/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardCourseFull from '../../components/CardCourseFull/CardCourseFull';
import CardCourseFullMobile from '../../components/CardCourseFullMobile/CardCourseFullMobile';

const AllCourse = () => {
    const domain = 'http://5b28-140-213-168-132.ngrok.io'
    const ApiSections = `${domain}/courses`;
    const [courses, setCourses] = useState([]);
    // let navigate = useNavigate();

    useEffect(() => {
        axios.get(ApiSections)
            .then(response => {
                response.data.data.forEach(dataSections => {
                    setCourses(prevState => [...prevState, dataSections])
                   
                })
            })
            .catch(error => {
                console.log(error)
            })
    }, []);
    return(
        <div className='min-h-screen  bg-neutral-content'>
            <div className='w-11/12 mx-auto my-10'>
                <div className='flex justify-center'>
                    <h3 className='text-primary font-extrabold text-4xl'>All Courses</h3>
                </div>
                <div className='mt-8 hidden lg:flex'>
                {
                    courses.map((elm, idx) => {
                        return(
                            <CardCourseFull
                                key={elm.id}
                                course = {elm}
                            />
                        )
                        
                    })
                }
            </div>
            <div className='mt-1 lg:hidden'>
                <div className="alert flex-row lg:hidden bg-transparent px-0 py-4">
                    <div className="flex justify-start text-base-100">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#2196f3" className="w-6 h-6 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p>Swipe to see more</p>
                    </div>
                </div>
                <div className="lg:hidden  carousel rounded-box">
                    {
                        courses.map((elm, idx) => {
                            return(
                                <CardCourseFullMobile
                                    key={elm.id}
                                    course = {elm}
                                />
                            )
                            
                        })
                    }
                </div>
            </div>
            </div>
           
        
        </div>
    )
}

export default AllCourse;