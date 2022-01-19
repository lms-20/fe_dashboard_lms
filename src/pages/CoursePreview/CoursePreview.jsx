/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';
import YoutubePlayer from '../../components/YoutubePlayer/YoutubePlayer';
import Navbar from '../../components/Navbar/Navbar';
import CollapsedContentPreview from '../../components/CollapsedContentPreview/CollapsedContentPreview';
import SidebarPreview from '../../components/SidebarPreview/SidebarPreview';

const CoursePreview = () => {
    return(
        <div className='bg-neutral-content min-h-screen'>
            <Navbar/>
            {/* Centered Content */}
            <div className='w-11/12 mx-auto'>
                {/* Container For The Content */}
                <div className=''>
                    <div className=' mx-auto text-base-100 py-4 flex'>
                        {/* Video Container */}
                        <div className='basis-8/12 bg-neutral-content'>
                            <h3 className='text-primary font-extrabold text-4xl mb-4'>Judul Course</h3>
                            {/* Author */}
                            <div className='mb-2'>
                                <div className='flex items-center'>
                                    <FontAwesomeIcon icon = {faChalkboardTeacher}  className='text-3xl text-base-300'/>
                                    <div className='flex flex-col justify-center text-base-300 pl-2'>
                                        <p className='text-sm'>Mentor by : Dan Abramov</p>
                                        <p className='text-sm'>Software Engineer</p>
                                    </div>
                                </div>
                            </div>
                            {/* End Of Author */}
                            <YoutubePlayer/>
                            {/* Information */}
                            <div className='flex my-4'>
                                <div className=' btn bg-transparent border-primary text-base-100 rounded-full btn-hover-primary mr-4'>345 Students</div>
                                <div className=' btn bg-transparent border-primary text-base-100 rounded-full btn-hover-primary mr-4'>120 Videos</div>
                                <div className=' btn bg-transparent border-primary text-base-100 rounded-full btn-hover-primary mr-4'>Beginner</div>
                                <div className=' btn bg-transparent border-primary text-base-100 rounded-full btn-hover-primary mr-4'>Premium</div>
                            </div>
                            {/* Description */}
                            <div>
                                <h3 className='text-primary font-extrabold text-2xl mb-4'>Description</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id velit ut dignissimos voluptate totam inventore et voluptates odio exercitationem quia eveniet deleniti cum amet incidunt, molestiae non officia praesentium? Assumenda?</p>
                            </div>
                            {/* End Of Description */}
                            {/*  */}
                        </div>
                        {/* End Of Video Container */}
                        {/* Container For The Sidebar */}
                        <div className='basis-4/12 px-4 flex-grow'>
                            <SidebarPreview/>
                        </div> 
                    </div>
                </div>
                {/* End Of Container For The Content */}
            </div>
        </div>
    )
}

export default CoursePreview