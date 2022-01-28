/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { Fragment, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import axios from 'axios';
// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle, faEye, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
//SWAL
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
//REACT SPINNERS
import ClipLoader from "react-spinners/ClipLoader";
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../store/userSlice';

const style = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: "9999"
};

const Login = props => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const ApiUrl = `http://128.199.232.31:3030/users/login`;
    // const ApiUrl = `https://dbaf-182-2-39-138.ngrok.io/users/login`;
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const token = useSelector(state => state.userData.user?.data.token);
    // For toggle,if the eye in input password fieed is clicked,the password is shown
    const [isPasswordShown, setIsPasswordShown] = useState(false);

    useEffect(() => {
        if (token) {
            navigate('/');
        }
    }, [token])
    const onSubmit = (data) => {
        setIsLoading(true);
        axios.post(
            ApiUrl,
            data,
            { headers: { 'Content-Type': 'application/json' } }
        )
            .then(response => {
                setIsLoading(false);
                dispatch(login(response.data))
                navigate('/');
            })
            .catch(error => {
                setIsLoading(false);
                MySwal.fire({
                    icon: 'error',
                    color: '#66FCF1',
                    background: '#1F2833',
                    iconColor: '#ff5724',
                    title: 'Error!',
                    text: error,
                    showConfirmButton: false
                })
                console.log(error);
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
                    <div className='flex items-center cursor-pointer' onClick={() => navigate("/landing")}>
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
                    <form className="w-full lg:w-2/4 mx-auto" onSubmit={handleSubmit(onSubmit)}>

                        <div className="card-body">
                            {/* Border Form Container */}
                            <div className="p-10 card">
                                <div className='flex flex-col items-center text-base-300 mb-2'>
                                    <h2 className='text-xl lg:text-4xl font-extrabold text-primary text-center'>Start Learning</h2>
                                    <p className='text-sm mt-1 text-center'>You must be login into your account to access the courses</p>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg text-base-100 font-bold">Email</span>
                                    </label>
                                    {/* input transition-all focus:outline-primary text-neutral-content text-lg placeholder:text-base-300 */}
                                    <input type="text" placeholder="Email" className={`${!errors.emailAddress?.type ? 'input' : 'input border-2 border-error'}  transition-all text-neutral-content text-lg focus:outline-primary focus:bg-base-100  placeholder:text-base-300 `} {...register("emailAddress", { required: true, pattern: emailRegex })} />
                                    <div className="label justify-start">
                                        {errors.emailAddress ? <FontAwesomeIcon icon={faTimesCircle} className='text-error mr-2' /> : ""}
                                        <span className='text-error text-sm font-bold'>
                                            {errors.emailAddress?.type === "required" && "Email required"}
                                            {errors.emailAddress?.type === "pattern" && "Invalid Email Address"}
                                        </span>
                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg text-base-100 font-bold">Password</span>
                                    </label>
                                    <div className='flex flex-nowrap items-center'>
                                        <input type={isPasswordShown ? "text" : "password"} placeholder="Password" className={`${!errors.password?.type ? 'input' : 'input border-2 border-error'}  w-full transition-all text-neutral-content text-lg focus:outline-primary focus:bg-base-100  placeholder:text-base-300 `} {...register("password", { required: true })} />
                                        <FontAwesomeIcon icon={faEye} className={`${isPasswordShown ? "text-info" : "text-base-300"} text-2xl -ml-10`} onClick={() => setIsPasswordShown((curr) => !curr)} />
                                    </div>

                                    <div className="label justify-start">
                                        {errors.password ? <FontAwesomeIcon icon={faTimesCircle} className='text-error mr-2' /> : ""}
                                        <span className='text-error text-sm font-bold'>{errors.password?.type === "required" && "Password required"}</span>
                                    </div>
                                </div>
                                <div className="form-control flex flex-col items-center">
                                    <button className="btn w-full mt-4 bg-transparent border-2 border-primary text-base-100 btn-hover-primary" type='submit' disabled={isLoading}>Login</button>
                                    <div className="flex flex-col w-full mt-8">
                                        <div className='flex flex-col lg:flex-row items-center lg:items-start justify-center'>
                                            <p className='text-base-300 text-sm'>Are you dont have an account?</p>
                                            <Link to="/register" className='text-sm ml-1 text-info'>Register Here</Link>
                                        </div>
                                        <div className="divider text-primary">OR</div>
                                        <div className='flex flex-col lg:flex-row items-center lg:items-start justify-center'>
                                            <p className='text-base-300 text-sm'>Are you forgot your password?</p>
                                            <Link to="/register" className='text-sm ml-1 text-info'>Forgot Password</Link>
                                        </div>
                                    </div>


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

Login.propTypes = {

}

export default Login
