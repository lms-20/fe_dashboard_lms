/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faSignal } from '@fortawesome/free-solid-svg-icons';
import heroImg from "../../assets/undraw_online_learning.svg";
import axios from 'axios';

const CardCourseFull = () => {
    const ApiSections = `https://6141ca84357db50017b3dd36.mockapi.io/courses`;
    const [courses, setCourses] = useState([]);
    let a = [1, 2, 3, 4]

    useEffect(() => {
        axios.get(ApiSections)
            .then(response => {
                response?.data.forEach(dataSections => {
                    setCourses(
                        prevstate => [...prevstate, dataSections]
                    )
                })
            })
            .catch(error => {
                console.log(error)
            })
    }, []);


    return (
        <>
            <div className='mt-8 hidden lg:flex'>
                {courses.slice(0, 4).map((elm, idx) => {
                    return (
                        <div key={idx} className="card-compact bg-neutral drop-shadow-lg mr-3 basis-3/12 rounded-lg">
                            <figure className=' px-4 pt-4'>
                                <img src={elm.thumbnail} className='rounded-box' />
                            </figure>
                            <div className="card-body">
                                <div className='h-10 overflow-hidden break-all mb-2'>
                                    <h2 className="font-bold text-base-100 text-ellipsis">{elm.name}</h2>

                                </div>
                                <p className='text-base-300 h-6 overflow-hidden break-all mb-4'>Mentor by : {elm.mentor}</p>
                                <div className='flex h-6 items-center mb-2'>
                                    <div className='h-6 overflow-hidden basis-6/12 break-all'>
                                        <p className='text-base-300'>
                                            <FontAwesomeIcon icon={faLightbulb} className='mr-2'></FontAwesomeIcon>
                                            {elm.category}
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
                                        <p className='font-bold text-primary text-2xl'>Rp{elm.price}</p>
                                    </div>
                                    <div className='text-sm text-base-300 flex flex-col'>
                                        <p>{elm.typekelas}</p>
                                        <p className='font-bold text-sm text-right'>58 Videos</p>
                                    </div>
                                </div>
                                <div>
                                    <Link to="" className='btn bg-transparent border-2 border-primary text-base-100 btn-hover-primary w-full'>Check it</Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='mt-8 lg:hidden'>
                <div className="alert flex-row lg:hidden bg-transparent px-0 py-4">
                    <div className="flex justify-start text-base-100">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#2196f3" className="w-6 h-6 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p>Swipe to see more</p>
                    </div>
                </div>
                <div className="lg:hidden carousel rounded-box">
                    {
                        courses.slice(0, 4).map((elm, idx) => {
                            return (
                                <div className='w-full carousel-item' key={idx}>
                                    <div key={idx} className="card-compact bg-neutral drop-shadow-lg mr-3 basis-3/12 flex-grow rounded-lg">
                                        <figure className=' px-4 pt-4'>
                                            <img src={elm.thumbnail} className='rounded-box' />
                                        </figure>
                                        <div className="card-body">
                                            <div className='h-10 overflow-hidden break-all mb-2'>
                                                <h2 className="font-bold text-base-100 text-ellipsis">{elm.name}</h2>

                                            </div>
                                            <p className='text-base-300 h-6 overflow-hidden break-all mb-4'>Mentor by : {elm.mentor}</p>
                                            <div className='flex h-6 items-center mb-2'>
                                                <div className='h-6 overflow-hidden basis-6/12 break-all'>
                                                    <p className='text-base-300'>
                                                        <FontAwesomeIcon icon={faLightbulb} className='mr-2'></FontAwesomeIcon>
                                                        {elm.category}
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
                                                    <p className='font-bold text-primary text-2xl'>Rp{elm.price}</p>
                                                </div>
                                                <div className='text-sm text-base-300 flex flex-col'>
                                                    <p>{elm.typekelas}</p>
                                                    <p className='font-bold text-sm text-right'>58 Videos</p>
                                                </div>
                                            </div>
                                            <div>
                                                <Link to="" className='btn bg-transparent border-2 border-primary text-base-100 btn-hover-primary w-full'>Check it</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </>
    )
}

export default CardCourseFull