/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import CardNoImagePreview from '../CardNoImagePreview/CardNoImagePreview';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faFlag } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';


const CollapsedContentPreview = (props) => {
    return(
        <>
        
        {props.data?.map((elm) => {
            return (
                <div className='rounded-lg my-3' key = {elm.id}>
                    {/* Collapse Container */}
                    <div className="collapse w-full border rounded-box border-base-300 hover:border-primary collapse-arrow">
                        {/* This input purpose is,if the arrow is clicked,the div parent will expand */}
                        <input type="checkbox"/> 
                        <div className="collapse-title">
                            <p className='font-bold'>{`Section ${elm.order} : ${elm.name}`}</p>
                            <p className='text-sm'>{`${elm.lessons.length}`} Videos</p>
                        </div> 
                        {/* Collapse Content */}
                        <div className="collapse-content"> 
                            {/* The First Collapse Content Is Always The Resource Of The Section */}
                            <span href = "#" title = "Download The Resource For This Section"className=' p-1 cursor-not-allowed border border-primary my-1 inline-block  grayscale opacity-70 hover:grayscale-0 transition-all hover:opacity-100'>
                                <FontAwesomeIcon icon={faFileAlt} className='mx-1'/>
                                <span className='mx-1'>Resources</span>
                            </span>
                            <CardNoImagePreview
                                data = {elm.lessons}
                            />
                        
                            {/* Quiz */}
                            <div className="p-2 card-bordered rounded-lg mt-4 grayscale opacity-70 hover:grayscale-0 transition-all hover:opacity-100">
                                <div className="form-control">
                                    <div className="cursor-not-allowed p-2 flex items-center justify-start">
                                        <FontAwesomeIcon icon={faFlag} className='text-xl mr-4'></FontAwesomeIcon>
                                        {/* To Do,Onclick function on this span element,so if the element is clicked it will go to video url */}
                                        <span className="label-text text-primary font-medium">Quiz | Section 1 : Judul Quiz </span> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
        }
     </>   
    )

}

export default CollapsedContentPreview
CollapsedContentPreview.propTypes = {
    data : PropTypes.array
}
