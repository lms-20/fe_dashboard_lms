/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { Fragment, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle,faEye,faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const RequestCourse = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    return(
            <Fragment>
          
            {/* Pages Container */}
            <div className='min-h-screen bg-neutral-content relative'>
                {/* Navigation for go to the homepage lms */}
                <div className='absolute top-4 left-4'>
                    <div className='flex items-center cursor-pointer' onClick={() => navigate("/")}>
                        <div className='flex h-8 w-8 items-center justify-center rounded-full bg-primary'>
                                <FontAwesomeIcon icon = {faArrowLeft} className='text-neutral text-xl '/>
                        </div>
                        <div className=''>
                            <p className='text-primary text-sm ml-2'>Back to home</p>
                        </div>
                    </div>
                </div>
                {/* Form Flex Container */}
                <div className = "min-h-screen flex justify-center items-center">
                    {/* Form Container */}
                    <form  className = "w-full lg:w-2/4 mx-auto ">

                        <div className="card-body">
                            {/* Border Form Container */}
                            <div className="p-10 card">
                                <div className='flex flex-col items-center text-base-300 mb-2'>
                                    <h2 className='text-xl lg:text-4xl font-extrabold text-primary text-center'>Are You Looking For A New Course?</h2>
                                    <p className='text-sm mt-1 text-center'>Send your request,we will thinking about it</p>
                                </div>
                                <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-lg text-base-100 font-bold">Course Name</span>
                                        </label>
                                        <input type="text" id='emailAddress' name='name' placeholder="The name of course what you imagine" className={`${!errors.name?.type ? 'input' : 'input border-2 border-error'}  transition-all text-neutral-content text-lg focus:outline-primary focus:bg-base-100  placeholder:text-base-300 `}  {...register("name", { required: true })} />
                                        <div className="label justify-start">
                                            {errors.emailAddress ? <FontAwesomeIcon icon = {faTimesCircle} className='text-error mr-2'/> : ""}
                                            <span className='text-error text-sm font-bold'>
                                                {errors.emailAddress?.type === "required" && "Email is required"}
                                                {errors.emailAddress?.type === "pattern" && "Invalid Email Address"}
                                            </span>
                                        </div>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg text-base-100 font-bold">Course Category</span>
                                    </label>
                                    <select id='category' name='occupation' className={`${!errors.category?.type ? 'select' : 'select border-2 border-error'}  w-full transition-all text-neutral-content text-md focus:outline-primary focus:bg-base-100  placeholder:text-base-300 `} {...register("category", { required: true })}>
                                        <option value="none" disabled>Choose your superpower</option>
                                        <option value="tele">telekinesis</option>
                                        <option value="time">time travel</option>
                                        <option value="invi">invisibility</option>
                                    </select>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg text-base-100 font-bold">Short Description</span>
                                    </label>
                                    <textarea id = "description" placeholder="Please,give our team short description about what you want" className="textarea h-24 textarea-bordered textarea-primary transition-all text-neutral-content text-lg focus:outline-primary focus:bg-base-100  placeholder:text-base-300 " {...register("description", { required: true })}/>

                                
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg text-base-100 font-bold">Goals</span>
                                    </label>
                                    <textarea id ="goals" placeholder="Please,describe your goals " className="textarea h-24 textarea-bordered textarea-primary transition-all text-neutral-content text-lg focus:outline-primary focus:bg-base-100  placeholder:text-base-300 "{...register("goals", { required: true })}/>

                                
                                </div>
                                <div className="form-control flex flex-col items-center">
                                    <button className="btn w-full mt-4 bg-transparent border-2 border-primary btn-hover-primary" type='submit' >Login</button>
                                </div>
                            </div>
                            {/* End Of Form Container */}
                        </div>
                    </form>
                    {/* End Of Form Container */}
                </div>
                {/* Emd Of Form Flex Container */}
            </div>
            
        </Fragment>
    )
}

export default RequestCourse