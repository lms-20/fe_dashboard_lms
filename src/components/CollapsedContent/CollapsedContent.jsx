/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from "react";
import PropTypes from 'prop-types';
import CardNoImage from "../CardNoImage/CardNoImage";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faFlag } from "@fortawesome/free-solid-svg-icons";

const CollapsedContent = (props) => {
    return (
        <div className="collapse w-full my-4 border rounded-box border-base-300 hover:border-primary collapse-arrow">
            {/* This input purpose is,if the arrow is clicked,the div parent will expand */}
            <input type="checkbox" />
            <div className="collapse-title">
                <p className='font-bold'>Judul Section</p>
                <p className='text-sm'>N Videos</p>
            </div>
            <div className="collapse-content">
                {/* The First Collapse Content Is Always The Resource Of The Section */}
                <a href="#" target="_blank" rel='noreferrer' title="Download The Resource For This Section" className=' p-1 border border-primary my-1 inline-block  grayscale opacity-70 hover:grayscale-0 transition-all hover:opacity-100'>
                    <FontAwesomeIcon icon={faFileAlt} className='mx-1' />
                    <span className='mx-1' >Resources</span>
                </a>
                <CardNoImage
                    IsQuizTime={props.changeState}
                />
                {/* Quiz Card */}
                <div className="p-2 card-bordered rounded-lg mt-4 grayscale opacity-70 hover:grayscale-0 transition-all hover:opacity-100">
                    <div className="form-control">
                        <div className="cursor-pointer p-2 flex items-center justify-start">
                            <FontAwesomeIcon icon={faFlag} className='text-xl mr-4'></FontAwesomeIcon>
                            {/* To Do,Onclick function on this span element,so if the element is clicked it will go to video url */}
                            <span onClick={() => {
                                props.changeState(true)
                            }} className="label-text text-primary font-medium">Quiz | Judul Quiz </span>
                            <input type="checkbox" className="checkbox border-primary ml-auto" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

CollapsedContent.propTypes = {
    changeState: PropTypes.func
};
export default CollapsedContent