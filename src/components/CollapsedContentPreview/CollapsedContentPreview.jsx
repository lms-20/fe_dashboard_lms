/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import CardNoImagePreview from '../CardNoImagePreview/CardNoImagePreview';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faFlag } from '@fortawesome/free-solid-svg-icons';

const CollapsedContentPreview = () => {
    return(
        <div className='rounded-lg my-3'>
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
                    <CardNoImagePreview/>
                
                    {/* Quiz */}
                    <div className="p-2 card-bordered rounded-lg mt-4 grayscale opacity-70 hover:grayscale-0 transition-all hover:opacity-100">
                        <div className="form-control">
                            <div className="cursor-pointer p-2 flex items-center justify-start">
                                <FontAwesomeIcon icon={faFlag} className='text-xl mr-4'></FontAwesomeIcon>
                                {/* To Do,Onclick function on this span element,so if the element is clicked it will go to video url */}
                                <span className="label-text text-primary font-medium">Quiz | Section 1 : Judul Quiz </span> 
                                <input type="checkbox" className="checkbox border-primary ml-auto"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default CollapsedContentPreview