/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */

import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboardTeacher, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import YoutubePlayer from '../../components/YoutubePlayer/YoutubePlayer';
import Navbar from '../../components/Navbar/Navbar';
import CollapsedContentPreview from '../../components/CollapsedContentPreview/CollapsedContentPreview';
import SidebarPreview from '../../components/SidebarPreview/SidebarPreview';
import Reviews from '../../components/Reviews/Reviews';
import CourseInformationPreview from '../../components/CourseInformationPreview/CourseInformationPreview';
import { Link, useNavigate, useParams } from 'react-router-dom';
import PricingPlans from '../../components/PricingPlans/PricingPlans';
import axios from 'axios';

const CoursePreview = () => {
    let params = useParams();
    const domain = 'https://241a-182-2-71-0.ngrok.io'
    const ApiSections = `${domain}/courses/${params.course_id}`;

    const [course, setCourse] = useState({});

    useEffect(() => {
        axios.get(ApiSections)
            .then(response => {
                setCourse(response.data.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, []);
    function getVideoId(url) {
        url === undefined ? "https://www.youtube.com/embed/4YKpBYo61Cs" : url
        let result = "";
        for (let i = url.length - 1; i >= 1; i--) {
            if (url[i] === "/") {
                return result
            } else {
                result = url[i] + result;
            }
        }
    }
    // console.log(params.course_id);

    return (
        <div className='bg-neutral-content min-h-screen'>
            {/* Centered Content */}
            <div className='w-11/12 mx-auto'>
                {/* Container For The Content */}
                <div className=''>
                    <div className=' mx-auto text-base-100 py-4 flex flex-col lg:flex-row'>
                        {/* Video Container */}
                        <div className='basis-8/12 bg-neutral-content'>
                            <h3 className='text-primary font-extrabold text-4xl mt-4 mb-6'>{course?.name}</h3>

                            <YoutubePlayer
                                videoId={getVideoId(`${course?.chapters?.[0].lessons?.[-0].video}`)}
                            />
                            <div className='hidden lg:block'>
                                <CourseInformationPreview
                                    data={course}
                                />
                            </div>
                            {/* Mobile View */}
                            <div className="lg:hidden collapse w-full  rounded-lg bg-transparent border-2 border-primary collapse-arrow my-4" >
                                <input type="checkbox" />
                                <div className="collapse-title text-xl font-medium">
                                    Course Information
                                </div>
                                <div className="collapse-content">
                                    <CourseInformationPreview
                                        data={course}
                                        courseId={params.course_id}
                                    />
                                </div>
                            </div>
                            {/* <div className='my-4'>
                                <PricingPlans/>
                            </div> */}
                        </div>
                        {/* End Of Video Container */}
                        {/* Container For The Sidebar */}
                        <div className='basis-4/12 lg:px-4 flex-grow'>
                            {/* Sidebar desktop view */}
                            <div className='hidden lg:block'>
                                <SidebarPreview
                                    data={course?.chapters}
                                    courseId={params.course_id}
                                />
                            </div>
                            {/* Sidebar mobile view */}
                            <div className="lg:hidden collapse w-full  rounded-lg bg-transparent border-2 border-primary collapse-arrow my-4" >
                                <input type="checkbox" />
                                <div className="collapse-title text-xl font-medium">
                                    Course Content
                                </div>
                                <div className="collapse-content">
                                    <SidebarPreview
                                        data={course?.chapters}
                                        courseId={params.course_id}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Of Container For The Content */}
            </div>
        </div>
    )
}

export default CoursePreview