/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom'
import Card from '../../components/Card/Card';
import { useSelector } from 'react-redux';


const MyClass = props => {
    const globalStateUser = useSelector(state => state.userData?.user);
    // Init API endpoint
    const apiUrl = "https://6141ca84357db50017b3dd36.mockapi.io/courses";
    const apiPivot = "https://61e62635ce3a2d0017358fa7.mockapi.io/pivot";
    const [myCourses, setMyCourses] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    // Function for request get with axios
    const retrieveMyCourses = async () => {
        const response = await axios.get(globalStateUser?.data.role === 'admin' ? apiUrl : apiPivot);
        return response.data.data;

    }
    useEffect(() => {
        const getAllMyCourses = async () => {
            try {
                setIsLoading(true);
                const allMyCourses = await retrieveMyCourses();
                if (allMyCourses) {
                    setIsLoading(false);
                    setMyCourses(allMyCourses);
                }
                // console.log("ini adalah",allMyCourses);
            } catch {
                setIsError(true);
                setIsLoading(false);
            }
        }
        getAllMyCourses();
    }, [])

    return (
        // Pages Container
        <div className=' mt-8 flex flex-col  w-11/12 mx-auto'>
            <h2 className='text-center text-xl lg:text-4xl font-extrabold text-primary'>Its your available course yet</h2>
            <div className='flex justify-center flex-wrap mt-4'>
                <Link to="" className='btn  btn-hover-primary btn-rounded mx-2 bg-transparent border-2 border-primary text-base-100'>All Courses</Link>
                <Link to="" className='btn  btn-hover-primary btn-rounded mx-2 bg-transparent border-2 border-primary text-base-100'>On Progress</Link>
                <Link to="" className='btn  btn-hover-primary btn-rounded mx-2 bg-transparent border-2 border-primary text-base-100'>Finished</Link>
            </div>
            {isLoading === true ? <p>Loading Bro</p> : isError == true ? <p>Error Bro</p> :
                // {/* Course Content Container */}
                <div className='w-96 mx-auto lg:w-full lg:mx-0'>
                    <div className='hidden lg:flex flex mt-4 flex-wrap'>
                        {/* Card only appear in desktop view */}
                        {
                            myCourses.map((course) => {
                                return (
                                    // console.log(course.course)
                                    <Card
                                        key={course.id}
                                        course={globalStateUser?.data.role === 'admin' ? course : course.course}
                                    />
                                )
                            })
                        }
                    </div>
                    {/*Mobile View Screen*/}

                    <div className="alert flex-row lg:hidden bg-transparent px-0 py-4">
                        <div className="flex justify-start">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#2196f3" className="w-6 h-6 mr-2">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p>Swipe to see more</p>
                        </div>
                    </div>
                    {/* Carousel container and only appear in mobile view */}
                    <div className="lg:hidden carousel rounded-box">
                        {
                            // Rendering Carousel Items
                            // myCourses.map((course) => {
                            //     return (
                            //         <div className='w-full carousel-item' key={course.id}>
                            //             <Card
                            //                 course={course}
                            //                 width="full"
                            //             />
                            //         </div>


                            //     )
                            // })
                        }

                    </div>
                    {/* End of carousel */}

                    {/* End of mobile view container */}


                </div>
            }
            {/* End of course content */}
            {globalStateUser?.data.role === 'admin'
                ?
                <Link className='btn btn-primary' to='/addcourse'>Add New Course</Link>
                :
                null
            }
        </div>
        // End of pages container
    )
}

MyClass.propTypes = {

}

export default MyClass;
