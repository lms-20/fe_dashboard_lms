/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const CardNoImagePreview = (props) => {
    return(
        props.data?.map((elm) => {
            return(
                <div key = {elm.id} className="p-2 card-bordered rounded-lg mt-4 grayscale opacity-70 hover:grayscale-0 transition-all hover:opacity-100 cursor-not-allowed">
                    <div className="form-control">
                        <div className=" p-2 flex items-center justify-start">
                            <FontAwesomeIcon icon={faLock} className='text-xl mr-4'></FontAwesomeIcon>
                            {/* To Do,Onclick function on this span element,so if the element is clicked it will go to video url */}
                            <span className="label-text text-primary font-medium">{`${elm.order}.${elm.name} `}</span> 
                        </div>
                    </div>
                </div>
            )
        })
        
    )
}

export default CardNoImagePreview
CardNoImagePreview.propTypes = {
    data : PropTypes.array
}