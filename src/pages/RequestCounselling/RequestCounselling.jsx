/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';



const RequestCounselling = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }, watch, reset } = useForm();


    return(
        /* Pages Container */
        <div className='min-h-screen bg-neutral-content relative'>
             <div className='absolute top-4 left-4'>
                <div className='flex items-center cursor-pointer' onClick={() => navigate("")}>
                    <div className='flex h-8 w-8 items-center justify-center rounded-full bg-primary'>
                            <FontAwesomeIcon icon = {faArrowLeft} className='text-neutral text-xl '/>
                    </div>
                    <div className=''>
                        <p className='text-primary text-sm ml-2'>Back to course</p>
                    </div>
                </div>
            </div>
            <div className = "min-h-screen flex justify-center items-center">
                {/* Form Container */}
                <form  className = "w-full lg:w-2/4 mx-auto">

                    <div className="card-body">
                        {/* Border Form Container */}
                        <div className="p-10 card">
                            <div className='flex flex-col items-center text-base-300 mb-2'>
                                <h2 className='text-xl lg:text-4xl font-extrabold text-primary text-center'>Are You Need Help?</h2>
                                <p className='text-sm mt-1 text-center'>Please tell us your problem while you are learning</p>
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg text-base-100 font-bold">Section Course</span>
                            </label>
                            <select id='section' name='section' className={`${!errors.section?.type ? 'select' : 'select border-2 border-error'}  w-full transition-all text-neutral-content text-md focus:outline-primary focus:bg-base-100  placeholder:text-base-300 `} {...register("section", { required: true })}>
                                <option value="none" disabled>Choose your superpower</option>
                                <option value="tele">telekinesis</option>
                                <option value="time">time travel</option>
                                <option value="invi">invisibility</option>
                            </select>
                            <div className="label justify-start">
                                {errors.section ? <FontAwesomeIcon icon = {faTimesCircle} className='text-error mr-2'/> : ""}
                                <span className='text-error text-sm font-bold'>{errors.section?.type === "required" && "Occupation required"}</span>
                            </div>
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
                        <div className="form-control flex flex-col items-center  mt-8">
                            <button className="btn w-full bg-transparent border-2 border-primary btn-hover-primary" type='submit' >Send Your Problem</button>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    )

}

export default RequestCounselling