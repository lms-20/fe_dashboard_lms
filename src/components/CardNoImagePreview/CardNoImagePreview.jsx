/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

const CardNoImagePreview = () => {
    return(
        <div className="p-2 card-bordered rounded-lg mt-4 grayscale opacity-70 hover:grayscale-0 transition-all hover:opacity-100">
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
}

export default CardNoImagePreview