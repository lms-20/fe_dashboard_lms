/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { Fragment, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
//REACT SPINNERS
import ClipLoader from "react-spinners/ClipLoader"
import { useSelector } from 'react-redux';

const RequestCourse = () => {
    const token = useSelector(state => state.userData.user?.data.token);
    const style = {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: "9999"
    };
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }, watch, reset } = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const domain = `http://rizkysr90.space:3030`;
    const ApiUrl = `${domain}/req-courses`;

    const onSubmit = async (data) => {
        setIsLoading(true);
        console.log(data)
        axios.post(
            ApiUrl,
            data,
            { headers: { "Authorization": `Bearer ${token}` } }
        )
            .then(response => {
                setIsLoading(false);
                MySwal.fire({
                    icon: 'success',
                    title: 'Succes',
                    showConfirmButton: false,
                    timer: 2000
                })
                reset();
            })
            .catch(error => {
                setIsLoading(false);
            });
    }
    return (
        <Fragment>
            <div style={style}>
                <ClipLoader color="#ffffff" loading={isLoading} size={150} />
            </div>
            {/* Pages Container */}
            <div className='min-h-screen bg-neutral-content relative'>
                {/* Navigation for go to the homepage lms */}
                <div className='absolute top-4 left-4'>
                    <div className='flex items-center cursor-pointer' onClick={() => navigate("/")}>
                        <div className='flex h-8 w-8 items-center justify-center rounded-full bg-primary'>
                            <FontAwesomeIcon icon={faArrowLeft} className='text-neutral text-xl ' />
                        </div>
                        <div className=''>
                            <p className='text-primary text-sm ml-2'>Back to home</p>
                        </div>
                    </div>
                </div>
                {/* Form Flex Container */}
                <div className="min-h-screen flex justify-center items-center">
                    {/* Form Container */}
                    <form className="w-full lg:w-2/4 mx-auto " onSubmit={handleSubmit(onSubmit)}>

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
                                    <input type="text" id='name' name='name' placeholder="The name of course what you imagine" className={`${!errors.name?.type ? 'input' : 'input border-2 border-error'}  transition-all text-neutral-content text-lg focus:outline-primary focus:bg-base-100  placeholder:text-base-300 `}  {...register("name", { required: true })} />
                                    <div className="label justify-start">
                                        {errors.name ? <FontAwesomeIcon icon={faTimesCircle} className='text-error mr-2' /> : ""}
                                        <span className='text-error text-sm font-bold'>
                                            {errors.name?.type === "required" && "Course name is required"}
                                        </span>
                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg text-base-100 font-bold">Short Description</span>
                                    </label>
                                    <textarea id="description" placeholder="Please,give our team short description about what you want" className="textarea h-24 textarea-bordered textarea-primary transition-all text-neutral-content text-lg focus:outline-primary focus:bg-base-100  placeholder:text-base-300 " {...register("description", { required: true })} />
                                    <div className="label justify-start">
                                        {errors.description ? <FontAwesomeIcon icon={faTimesCircle} className='text-error mr-2' /> : ""}
                                        <span className='text-error text-sm font-bold'>
                                            {errors.description?.type === "required" && "Description is required"}
                                        </span>
                                    </div>

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg text-base-100 font-bold">Goals</span>
                                    </label>
                                    <textarea id="goal" placeholder="Please,describe your goals " className="textarea h-24 textarea-bordered textarea-primary transition-all text-neutral-content text-lg focus:outline-primary focus:bg-base-100  placeholder:text-base-300 "{...register("goal", { required: true })} />
                                    <div className="label justify-start">
                                        {errors.goal ? <FontAwesomeIcon icon={faTimesCircle} className='text-error mr-2' /> : ""}
                                        <span className='text-error text-sm font-bold'>
                                            {errors.goal?.type === "required" && "The goal is required"}
                                        </span>
                                    </div>

                                </div>
                                <div className="form-control flex flex-col items-center">
                                    <button className="btn w-full mt-4 bg-transparent border-2 border-primary btn-hover-primary text-base-100" type='submit' >Send Request</button>
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