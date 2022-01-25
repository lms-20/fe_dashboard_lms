/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */

import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faSignal } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';


const CardCourseFullMobile = (props) => {
    let navigate = useNavigate();

    const elm = props.course;
    
    const validateImageInput = (data) => {
        const isValid = data?.slice(0,4);
        return isValid === "http" ? data : "https://ik.imagekit.io/rizkysr90/thought-catalog-505eectW54k-unsplash__1__CN3SRWz7Z.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1643043475277";
    
    }    
    return(
        <div className='w-full carousel-item' key={elm.id}>
            <div key={elm.id} className="card-compact bg-neutral flex flex-col drop-shadow-lg mr-3 basis-3/12 flex-grow rounded-lg">
                <figure className=' px-4 pt-4 basis-6/12 h-56 flex'>
                    <img src={validateImageInput(elm.thumbnail)} className='rounded-box w-fit flex-grow object-cover' />
                </figure>
                <div className="card-body flex flex-col">
                    <div className='overflow-hidden break-all mb-2'>
                        <h2 className="font-bold text-base-100 text-ellipsis text-lg ">{elm.name}</h2>
                    </div>
                    <p className='text-base-300 h-6 overflow-hidden break-all mb-4'>Mentor by : {elm.mentor?.name}</p>
                    <div className='flex h-6 items-center mb-2'>
                        <div className='h-6 overflow-hidden basis-6/12 break-all'>
                            <p className='text-base-300'>
                                <FontAwesomeIcon icon={faLightbulb} className='mr-2'></FontAwesomeIcon>
                                {elm.category?.name}
                            </p>
                        </div>

                        <div className='basis-6/12 flex justify-end'>
                            <p className='text-right text-base-300  font-bold'>
                                <FontAwesomeIcon icon={faSignal} className='mr-2'></FontAwesomeIcon>
                                {elm.level}
                            </p>
                        </div>
                    </div>
                    <div className='flex items-center mb-2'>
                        <div className='grow'>
                            <p className='font-bold text-primary text-2xl'>Rp{new Intl.NumberFormat(['ban', 'id']).format(elm.price)}</p>
                        </div>

                        

                        <div className='text-sm text-base-300 flex flex-col'>
                            <p>{elm.typekelas}</p>
                            <p className='font-bold text-sm text-right'>58 Videos</p>

                        </div>
                    </div>
                    <div className='mt-auto'>
                        <button onClick={() => navigate(`/courses/${elm.id}`)} className='btn bg-transparent border-2 border-primary text-base-100 btn-hover-primary w-full mt-auto'>Check it</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardCourseFullMobile
CardCourseFullMobile.propTypes = {
    course : PropTypes.object
}