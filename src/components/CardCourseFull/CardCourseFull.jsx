/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faSignal } from '@fortawesome/free-solid-svg-icons';
import heroImg from "../../assets/undraw_online_learning.svg";
import axios from 'axios';
import PropTypes from 'prop-types';


const CardCourseFull = (props) => {
    // const ApiSections = `https://6141ca84357db50017b3dd36.mockapi.io/courses`;
    // const ApiSections = 'https://d58c-140-213-161-53.ngrok.io/courses';
    // const [courses, setCourses] = useState([]);
    let navigate = useNavigate();

    const elm = props.course;

 

    const validateImageInput = (data) => {
        const isValid = data?.slice(0,4);
        return isValid === "http" ? data : "https://ik.imagekit.io/rizkysr90/thought-catalog-505eectW54k-unsplash__1__CN3SRWz7Z.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1643043475277";
    
    }    
    return (
        <>
            <div  className="card-compact bg-neutral transition-all hover:scale-105 flex flex-col drop-shadow-lg mr-3 basis-3/12 rounded-lg">
                <figure className=' px-4 pt-4 flex h-56'>
                    <img src={validateImageInput(elm?.thumbnail)} className='rounded-box w-fit flex-grow object-cover' />
                </figure>
                <div className="card-body flex flex-col">
                    <div className='overflow-hidden break-all mb-1'>
                        <h2 className="font-bold text-base-100 text-lg">{elm?.name}</h2>

                    </div>
                    <p className='text-base-300 h-6 overflow-hidden break-all mb-4'>Mentor by : {elm?.mentor?.name}</p>
                    <div className='flex h-6 items-center mb-2 mt-auto'>
                        <div className='h-6 overflow-hidden basis-6/12 break-all'>
                            <p className='text-base-300'>
                                <FontAwesomeIcon icon={faLightbulb} className='mr-2'></FontAwesomeIcon>
                                {elm?.category?.name}
                            </p>
                        </div>

                        <div className='basis-6/12 flex justify-end'>
                            <p className='text-right text-base-300  font-bold'>
                                <FontAwesomeIcon icon={faSignal} className='mr-2'></FontAwesomeIcon>
                                {elm?.level}
                            </p>
                        </div>
                    </div>
                    <div className='flex items-center mb-2 '>
                        <div className='grow'>
                            <p className='font-bold text-primary text-2xl'>{elm?.price === 0 ? "Free" : `Rp${new Intl.NumberFormat(['ban', 'id']).format(elm?.price)}`}</p>
                        </div>
                        <div className='text-sm text-base-300 flex flex-col'>
                            <p>{elm?.typekelas}</p>
                            <p className='font-bold text-sm text-right'>58 Videos</p>
                        </div>
                    </div>
                    <div className='mt-auto'>
                        <button onClick={() => navigate(`/courses/${elm?.id}`)} className='btn bg-transparent border-2 border-primary text-base-100 btn-hover-primary w-full mt-auto'>Check it</button>
                    </div>
                </div>
            </div>
              
            {/* <div className='mt-8 lg:hidden'>
                <div className="alert flex-row lg:hidden bg-transparent px-0 py-4">
                    <div className="flex justify-start text-base-100">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#2196f3" className="w-6 h-6 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p>Swipe to see more</p>
                    </div>
                </div>
                <div className="lg:hidden  carousel rounded-box">
                    {
                        courses.slice(0, 4).map((elm, idx) => {
                            return (
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
                        })
                    }

                </div>
            </div> */}
        </>
    )
}

export default CardCourseFull
CardCourseFull.propTypes = {
    course : PropTypes.object
}