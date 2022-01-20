/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboardTeacher,faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import YoutubePlayer from '../../components/YoutubePlayer/YoutubePlayer';
import Navbar from '../../components/Navbar/Navbar';
import CollapsedContentPreview from '../../components/CollapsedContentPreview/CollapsedContentPreview';
import SidebarPreview from '../../components/SidebarPreview/SidebarPreview';
import Reviews from '../../components/Reviews/Reviews';
import CourseInformationPreview from '../../components/CourseInformationPreview/CourseInformationPreview';
import { Link } from 'react-router-dom';
import PricingPlans from '../../components/PricingPlans/PricingPlans';

const CoursePreview = () => {
    return(
        <div className='bg-neutral-content min-h-screen'>
            {/* Centered Content */}
            <div className='w-11/12 mx-auto'>
                {/* Container For The Content */}
                <div className=''>
                    <div className=' mx-auto text-base-100 py-4 flex flex-col lg:flex-row'>
                        {/* Video Container */}
                        <div className='basis-8/12 bg-neutral-content'>
                            <h3 className='text-primary font-extrabold text-4xl mb-4'>Judul Course</h3>
                            
                            <YoutubePlayer/>
                            <div className='hidden lg:block'>
                                <CourseInformationPreview/>
                            </div>
                            {/* Mobile View */}
                            <div className="lg:hidden collapse w-full  rounded-lg bg-transparent border-2 border-primary collapse-arrow my-4" >
                                <input type="checkbox" /> 
                                <div className="collapse-title text-xl font-medium">
                                    Course Information
                                </div>
                                <div className="collapse-content">
                                    <CourseInformationPreview/>
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
                                <SidebarPreview/>
                            </div>
                            {/* Sidebar mobile view */}
                            <div className="lg:hidden collapse w-full  rounded-lg bg-transparent border-2 border-primary collapse-arrow my-4" >
                                <input type="checkbox" /> 
                                <div className="collapse-title text-xl font-medium">
                                    Course Content
                                </div>
                                <div className="collapse-content">
                                    <SidebarPreview/>
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