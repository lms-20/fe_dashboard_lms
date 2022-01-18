/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faPlayCircle ,faAngleDoubleRight,faFileAlt,faFlag } from '@fortawesome/free-solid-svg-icons';

const CoursePreview = () => {
    const howManySections = [1,1];
    // Test for how much the video in the section will be
    const howManyVideos = [1,1,1,1];
    return(
        <div className='bg-neutral-content'>
             {/* Navbar */}
             <div className='bg-neutral'>
                    {/* Navbar Center */}
                    <div className='w-11/12 mx-auto px-8 py-4 flex items-center'>
                        <div className=' items-center flex grayscale opacity-70 hover:grayscale-0 transition-all hover:opacity-100 cursor-pointer text-primary'>
                            <div className='flex h-8 w-8 items-center justify-center rounded-full bg-current'>
                                <FontAwesomeIcon icon = {faArrowLeft} className='text-neutral text-xl '/>
                            </div>    
                            <p className='text-current text-sm ml-2'>Back to home</p>
                        </div> 
                        
                        <div className="divider divider-vertical  before:bg-base-100 after:bg-base-100  grayscale opacity-70 hover:grayscale-0 transition-all hover:opacity-100"></div> 
                        <h2 className=' text-base-100 grayscale opacity-70 hover:grayscale-0 transition-all hover:opacity-100 '>React - The Complete Guide (incl Hooks, React Router, Redux)</h2>
                    </div>
                    {/* End Of Navbar Center */}
                </div>
                {/* End Of Navbar */}
            <div className='w-11/12 mx-auto'>
               
                {/* Container For The Content */}
                <div className=''>
                    <div className=' mx-auto px-8 text-base-100 py-4 flex'>
                    {/* Video Content */}
                        <div className='basis-8/12 bg-neutral-content'>
                            <iframe width="100%" height="500" src="https://www.youtube.com/embed/O_GWbkXIqEY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                        {/* Container For The Sidebar */}
                        <div className='basis-4/12 px-4 flex-grow'>
                            {/* Sidebar */}
                            <div className='bg-neutral flex-col rounded-lg p-4 '>
                                {/* Header */}
                                <div className='flex items-center bg-primary p-2 rounded-lg grayscale opacity-70 hover:grayscale-0 transition-all hover:opacity-100 '>
                                    <FontAwesomeIcon icon = {faAngleDoubleRight} className='text-4xl text-neutral-content mr-2 ' />
                                    <p className='text-neutral-content font-bold text-xl w-full text-center -ml-4'>Course Content</p>
                                </div>
                                <div className='flex justify-center my-4'>
                                    <a href = "#" className='text-xs text-base-300 grayscale opacity-70 hover:grayscale-0 transition-all hover:opacity-100 '>Are you have a problem? <span className='text-primary underline decoration-solid'>Request Consultation</span></a>
                                </div>
                                {/* Card Section */}
                                {
                                    howManySections.map((elm,idx) => {
                                        return(
                                            <div key = {idx} className='rounded-lg my-3'>
                                                {/* Collapse Container */}
                                                <div className="collapse w-96 border rounded-box border-base-300 hover:border-primary collapse-arrow">
                                                    {/* This input purpose is,if the arrow is clicked,the div parent will expand */}
                                                    <input type="checkbox"/> 
                                                    <div className="collapse-title">
                                                        <p className='font-bold'>Section 1 : Introduction</p>
                                                        <p className='text-sm'>5 Videos</p>
                                                    </div> 
                                                    {/* Collapse Content */}
                                                    <div className="collapse-content"> 
                                                        {/* The First Collapse Content Is Always The Resource Of The Section */}
                                                        <a href = "#" title = "Download The Resource For This Section"className=' p-1 border border-primary my-1 inline-block  grayscale opacity-70 hover:grayscale-0 transition-all hover:opacity-100'>
                                                            <FontAwesomeIcon icon={faFileAlt} className='mx-1'/>
                                                            <span className='mx-1'>Resources</span>
                                                        </a>
                                                        {/* Card For Refrence To The Video */}
                                                        {
                                                            howManyVideos.map((elm,idx) => {
                                                                return(
                                                                    <div key = {idx} className="p-2 card-bordered rounded-lg mt-4 grayscale opacity-70 hover:grayscale-0 transition-all hover:opacity-100">
                                                                        <div className="form-control">
                                                                            <div className="cursor-pointer p-2 flex items-center justify-start">
                                                                                <FontAwesomeIcon icon={faPlayCircle} className='text-xl mr-4'></FontAwesomeIcon>
                                                                                {/* To Do,Onclick function on this span element,so if the element is clicked it will go to video url */}
                                                                                <span className="label-text text-primary font-medium">1.What is React JS?</span> 
                                                                                <input type="checkbox" className="checkbox border-primary ml-auto"/>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                        {/* End Of Card For Refrence To The Video */}
                                                        {/* Quiz */}
                                                        <div className="p-2 card-bordered rounded-lg mt-4 grayscale opacity-70 hover:grayscale-0 transition-all hover:opacity-100">
                                                            <div className="form-control">
                                                                <div className="cursor-pointer p-2 flex items-center justify-start">
                                                                    <FontAwesomeIcon icon={faFlag} className='text-xl mr-4'></FontAwesomeIcon>
                                                                    {/* To Do,Onclick function on this span element,so if the element is clicked it will go to video url */}
                                                                    <span className="label-text text-primary font-medium">Quiz | Section 1 : Introduction </span> 
                                                                    <input type="checkbox" className="checkbox border-primary ml-auto"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* End Of Collapse Container */}
                                            </div> 
                                        )
                                    })
                                }
                                {/* End Of Card Section */}
                            </div>
                            {/* End Of Sidebar */}
                        </div>
                        {/* End Of Sidebar Container */}
                    </div>
                </div>
                {/* End Of Container For The Content */}
            </div>
        </div>
    )
}

export default CoursePreview