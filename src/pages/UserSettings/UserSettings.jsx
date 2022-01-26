/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle, faEye, faUser } from '@fortawesome/free-solid-svg-icons';
import propTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

const UserSettings = () => {
    const token = useSelector(state => state.userData.user?.data.token);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const apiUrl = "https://bef3-182-2-68-139.ngrok.io/users/fetch"
    const [isFormDisabled, setIsFormDisabled] = useState(true);
    const [userResponse, setUserResponse] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isPasswordShown, setIsPasswordShown] = useState(false);

    const retrieveUser = async () => {
        const response = await axios.get(apiUrl, { headers: { "Authorization": `Bearer ${token}` } });
        return response.data
    }

    useEffect(() => {
        const getUser = async () => {
            try {
                setIsLoading(true)
                const userData = await retrieveUser();
                console.log(userData.data)
                if (userData) {
                    setIsLoading(false);
                    setUserResponse(userData.data)
                }
            } catch {
                setIsLoading(false)
                setIsError(true)
            }
        }
        getUser()
    }, [])

    const onSubmit = async (data) => {
        setIsFormDisabled((current) => !current)
        try {
            const updateData = await axios.put(apiUrl, data, { headers: { "Authorization": `Bearer ${token}` } })
            alert('SUCCESS!! :-)\n\n' + updateData);
        } catch (error) {
            setIsLoading(false)
            setIsError(true)
        }
    }

    useEffect(() => {
        reset(userResponse)
    }, [userResponse])

    return (

        <div className='mt-8 flex flex-col  w-11/12 mx-auto'>

            {isLoading === true ? "Loading bro" : isError === true ? "Error bro" :

                // User Information Container 
                <div className=' w-full mx-0 lg:w-3/5 lg:mx-auto bg-neutral rounded-md p-4'>
                    {/*Content Container  */}
                    <div className='rounded-lg border-2 border-primary p-4'>
                        {/* Card Container */}
                        <div className='flex rounded-lg transition-all w-full hover:shadow-md hover:shadow-primary hover:-translate-y-1 '>
                            {/* Profile Image */}
                            <div className='hidden lg:flex justify-center'>
                                <div className="avatar ml-4 ">
                                    <div className="rounded-lg w-full h-40  ">
                                        <FontAwesomeIcon icon={faUser} className='text-9xl  text-current  w-full  h-full' />
                                    </div>
                                </div>
                            </div>
                            {/* Info */}
                            <div className='flex grow flex-col px-4 basis-2/4'>
                                <div className=' basis-6/12 grow flex flex-col items-center justify-center'>
                                    <p className='font-bold text-2xl'>{userResponse.fullname}</p>
                                    <p className=''>{userResponse.occupation}</p>
                                </div>
                                {/* <div className='w-full mb-5'>
                                    <Link to="" className='btn btn-hover-primary w-full self-end bg-transparent border-2 text-base-100 border-primary'>Change Password</Link>
                                </div> */}
                            </div>
                        </div>
                        {/* End Of Card Container */}

                        {/* Form Container */}
                        {userResponse &&
                            <form onSubmit={handleSubmit(onSubmit)}>
                                {/* Fullname input */}
                                <div className="form-control text-base-100 my-4">
                                    <label className="label">
                                        <span className="label-text text-inherit font-bold">Name</span>
                                    </label>
                                    <input name="fullname" disabled={isFormDisabled} type="text" placeholder="Fullname" className="input transition-all focus:outline-primary text-neutral-content text-lg placeholder:text-base-300 disabled:text-base-100 disabled:bg-primary-focus disabled:border-none"{...register("fullname", { required: true })} />
                                    {/* <input onChange = {handleChange} name = "fullname" disabled = {isFormDisabled} type="text" value = {userEdited.name}  placeholder="Fullname"  className="input transition-all focus:outline-primary text-neutral-content text-lg placeholder:text-base-300 disabled:text-base-100 disabled:bg-primary-focus disabled:border-none"/> */}
                                    <div className="label justify-start">
                                        {errors.fullname ? <FontAwesomeIcon icon={faTimesCircle} className='text-error mr-2' /> : ""}
                                        <span className='text-error text-sm font-bold'>
                                            {errors.fullname?.type === "required" && "Name is required"}
                                        </span>
                                    </div>
                                </div>
                                <div className="form-control text-base-100 my-4">
                                    <label className="label">
                                        <span className="label-text text-inherit font-bold">Email</span>
                                    </label>
                                    <input name='emailAddress' disabled={isFormDisabled} type="email" placeholder="Email" className="input transition-all focus:outline-primary text-neutral-content text-lg placeholder:text-base-300 disabled:text-base-100 disabled:bg-primary-focus disabled:border-none" {...register("emailAddress", { required: true, pattern: emailRegex })} />
                                    <div className="label justify-start">
                                        {errors.emailAddress ? <FontAwesomeIcon icon={faTimesCircle} className='text-error mr-2' /> : ""}
                                        <span className='text-error text-sm font-bold'>
                                            {errors.emailAddress?.type === "required" && "Email is required"}
                                            {errors.emailAddress?.type === "pattern" && "Invalid Email Address"}
                                        </span>
                                    </div>
                                </div>
                                <div className="form-control text-base-100 my-4">
                                    <label className="label">
                                        <span className="label-text text-inherit font-bold">Age</span>
                                    </label>
                                    <input name='age' disabled={isFormDisabled} type="text" placeholder="Age" className="input transition-all focus:outline-primary text-neutral-content text-lg placeholder:text-base-300 disabled:text-base-100 disabled:bg-primary-focus disabled:border-none" {...register("age", { required: true, setValueAs: v => parseInt(v) })} />
                                    <div className="label justify-start">
                                        {errors.age ? <FontAwesomeIcon icon={faTimesCircle} className='text-error mr-2' /> : ""}
                                        <span className='text-error text-sm font-bold'>
                                            {errors.age?.type === "required" && "Age is required"}
                                        </span>
                                    </div>
                                </div>
                                {/* <div className="form-control text-base-100 my-4">
                                    <label className="label">
                                        <span className="label-text text-inherit font-bold">Password</span>
                                    </label>
                                    <div className='flex flex-nowrap items-center w-full'>
                                        <input name='password' disabled={isFormDisabled} type={isPasswordShown ? "text" : "password"} placeholder="Password" className="input w-full transition-all focus:outline-primary text-neutral-content text-lg placeholder:text-base-300 disabled:text-base-100 disabled:bg-primary-focus disabled:border-none"  {...register("password", { required: true })} />
                                        <FontAwesomeIcon icon={faEye} className={`${isPasswordShown ? "text-info" : "text-base-300"} text-2xl -ml-10`} onClick={() => setIsPasswordShown((curr) => !curr)} />
                                    </div>
                                    <div className="label justify-start">
                                        {errors.password ? <FontAwesomeIcon icon={faTimesCircle} className='text-error mr-2' /> : ""}
                                        <span className='text-error text-sm font-bold'>{errors.password?.type === "required" && "Password required"}</span>
                                    </div>
                                </div>
                                <div className="form-control text-base-100 my-4">
                                    <label className="label">
                                        <span className="label-text text-inherit font-bold">Occupation</span>
                                    </label>
                                    <select disabled={isFormDisabled} id='occupation' name='occupation' className="select w-full transition-all focus:outline-primary text-neutral-content text-lg placeholder:text-base-300 disabled:text-base-100 disabled:bg-primary-focus disabled:border-none" {...register("occupation", { required: true })}>
                                        <option value="none" disabled>Choose your superpower</option>
                                        <option value="tele">telekinesis</option>
                                        <option value="time">time travel</option>
                                        <option value="invi">invisibility</option>
                                    </select>
                                    <div className="label justify-start">
                                        {errors.occupation ? <FontAwesomeIcon icon={faTimesCircle} className='text-error mr-2' /> : ""}
                                        <span className='text-error text-sm font-bold'>{errors.occupation?.type === "required" && "Occupation required"}</span>
                                    </div>
                                </div> */}
                                <div className="form-control text-base-100 my-4">
                                    <label className="label">
                                        <span className="label-text text-inherit font-bold">Phone</span>
                                    </label>
                                    <input name='phoneNumber' disabled={isFormDisabled} type="text" placeholder="Phone Number" className="input transition-all focus:outline-primary text-neutral-content text-lg placeholder:text-base-300 disabled:text-base-100 disabled:bg-primary-focus disabled:border-none" {...register("phoneNumber", { required: true })} />
                                    <div className="label justify-start">
                                        {errors.phoneNumber ? <FontAwesomeIcon icon={faTimesCircle} className='text-error mr-2' /> : ""}
                                        <span className='text-error text-sm font-bold'>{errors.phoneNumber?.type === "required" && "Phone Number required"}</span>
                                    </div>
                                </div>
                                <div className='mt-8 flex justify-end'>
                                    <div className={`${isFormDisabled === true ? "hidden" : ""} btn hover:bg-warning mx-4 text-base-100 border-warning`} onClick={() => {
                                        reset()
                                        setIsFormDisabled((current) => !current)
                                    }
                                    }>Cancel</div>
                                    {isFormDisabled ?
                                        <div className='btn btn-hover-primary bg-transparent text-base-100 border-2 border-primary' onClick={() => setIsFormDisabled((current) => !current)}>Edit Data</div>
                                        :
                                        <button className='btn btn-hover-primary bg-transparent text-base-100 border-2 border-primary' type='submit'>Save Changes</button>
                                    }
                                    {/* <div className='btn btn-hover-primary bg-transparent border-primary' onClick={() => setIsFormDisabled((current) => !current)}>{`${isFormDisabled === true ? "Edit Data" : "Save Changes"}`}</div> */}
                                </div>

                            </form>
                        }
                        {/* End of form container */}
                    </div>
                    {/*End Of Content Container */}
                </div>
                // End of user information container

            }
        </div>
    )
}

UserSettings.propTypes = {

}

export default UserSettings