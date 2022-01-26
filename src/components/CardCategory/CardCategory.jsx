/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";

const CardCategory = ({ id, name, courses }) => {
    let navigate = useNavigate();
    return (
            <div className="card mb-8 bg-neutral lg:card-side basis-5/12 flex-grow mr-6 cursor-pointer" onClick={() => navigate(`/categories/${id}`)}>
                <div className="card-body">
                    <div>
                        <div className='inline-block bg-primary px-3 py-2 rounded-lg'>
                            <FontAwesomeIcon icon={faLightbulb} className=' text-2xl  inline-block align-middle'></FontAwesomeIcon>
                        </div>
                    </div>
                    <p className='font-bold text-base-100 mt-4'>{name}</p>
                    <div className='flex text-primary items-center justify-between mt-1'>
                        <p>{courses.length} Courses</p>
                        <FontAwesomeIcon icon={faArrowRight} className='text-lg ' />
                    </div>
                </div>
            </div>
    )
}

export default CardCategory
