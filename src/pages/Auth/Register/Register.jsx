/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import bgImage from '../../../assets/undraw_join_of2w.svg';
import PropTypes from 'prop-types'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Fragment, useEffect, useRef, useState } from 'react';
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
import { useSelector } from 'react-redux';


// const delay = (sec) => {
//     return new Promise(resolve => {
//         setTimeout(resolve, sec)
//     })
// }

const style = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: "9999"
};

const Register = props => {
    const { register, handleSubmit, formState: { errors }, watch, reset } = useForm();
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const password = useRef({});
    password.current = watch("password", "");
    const ApiUrl = `https://6141ca84357db50017b3dd36.mockapi.io/users`;
    // const ApiUrl = `https://dbaf-182-2-39-138.ngrok.io/users/register`;
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const token = useSelector(state => state.userData.user?.data.token);
    const [isPasswordShown, setIsPasswordShown] = useState(false);


    useEffect(() => {
        if (token) {
            navigate('/');
        }
    }, [token])

    const onSubmit = async (data) => {
        setIsLoading(true);
        axios.post(
            ApiUrl,
            data,
            { headers: { 'Content-Type': 'application/json' } }
        )
            .then(response => {
                setIsLoading(false);
                MySwal.fire({
                    icon: 'success',
                    title: 'Succes register account!',
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
            <div className="bg-neutral">
                {/* Navigation for go to the homepage lms */}
                <div className='absolute top-4 left-4'>
                    <div className='flex items-center cursor-pointer' onClick={() => navigate('/landing')}>
                        <div className='flex h-8 w-8 items-center justify-center rounded-full bg-primary'>
                            <FontAwesomeIcon icon={faArrowLeft} className='text-neutral text-xl ' />
                        </div>
                        <div className=''>
                            <p className='text-primary text-sm ml-2'>Back to home</p>
                        </div>
                    </div>
                </div>
                {/* Flex Container For Content */}
                <div className='flex flex-col lg:flex-row-reverse mx-auto'>
                    {/* Left Content Container*/}
                    <div className='bg-neutral-content lg:basis-6/12 lg:p-12'>
                        {/* Left Content */}
                        <div className='flex flex-col w-9/12 py-16 lg:py-0 mx-auto lg:w-full'>
                            <div className='flex flex-col items-center mb-4'>
                                <h2 className='text-xl lg:text-4xl font-extrabold text-primary text-center'>Get Started</h2>
                                <p className='text-base-300'>Are you already have an account ? <Link to='/login' className='text-info'>Login</Link></p>
                            </div>

                            <form onSubmit={handleSubmit(onSubmit)} className='mb-4'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg text-base-100 font-bold">Name</span>
                                    </label>
                                    <input type="text" id='fullname' name='fullname' placeholder="Full Name" className={`${!errors.fullname?.type ? 'input' : 'input border-2 border-error'}  transition-all text-neutral-content text-lg focus:outline-primary focus:bg-base-100  placeholder:text-base-300 `} {...register("fullname", { required: true })} />
                                    <div className="label justify-start">
                                        {errors.fullname ? <FontAwesomeIcon icon={faTimesCircle} className='text-error mr-2' /> : ""}
                                        <span className='text-error text-sm font-bold'>
                                            {errors.fullname?.type === "required" && "Name is required"}
                                        </span>
                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg text-base-100 font-bold">Email Address</span>
                                    </label>
                                    <input type="text" id='emailAddress' name='emailAddress' placeholder="Email Address" className={`${!errors.emailAddress?.type ? 'input' : 'input border-2 border-error'}  transition-all text-neutral-content text-lg focus:outline-primary focus:bg-base-100  placeholder:text-base-300 `}  {...register("emailAddress", { required: true, pattern: emailRegex })} />
                                    <div className="label justify-start">
                                        {errors.emailAddress ? <FontAwesomeIcon icon={faTimesCircle} className='text-error mr-2' /> : ""}
                                        <span className='text-error text-sm font-bold'>
                                            {errors.emailAddress?.type === "required" && "Email is required"}
                                            {errors.emailAddress?.type === "pattern" && "Invalid Email Address"}
                                        </span>
                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg text-base-100 font-bold">Age</span>
                                    </label>
                                    <input type="number" id='age' name='age' placeholder="Age" className={`${!errors.age?.type ? 'input' : 'input border-2 border-error'}  transition-all text-neutral-content text-lg focus:outline-primary focus:bg-base-100  placeholder:text-base-300 `} {...register("age", { required: true, setValueAs: v => parseInt(v), })} />
                                    <div className="label justify-start">
                                        {errors.age ? <FontAwesomeIcon icon={faTimesCircle} className='text-error mr-2' /> : ""}
                                        <span className='text-error text-sm font-bold'>
                                            {errors.age?.type === "required" && "Age is required"}
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
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg text-base-100 font-bold">Check Password</span>
                                    </label>
                                    <input type="password" id='checkPassword' name='checkPassword' placeholder="Check Password" className={`${!errors.checkPassword?.type ? 'input' : 'input border-2 border-error'}  w-full transition-all text-neutral-content text-lg focus:outline-primary focus:bg-base-100  placeholder:text-base-300 `} {...register("checkPassword", { required: true, validate: value => value === password.current || "The passwords do not match" })} />
                                    <div className="label justify-start">
                                        {errors.checkPassword ? <FontAwesomeIcon icon={faTimesCircle} className='text-error mr-2' /> : ""}
                                        <span className='text-error text-sm font-bold'>
                                            {errors.checkPassword?.type === "required" && "Check Password is required"}
                                            {errors.checkPassword?.type === "validate" && "The passwords do not match"}
                                        </span>
                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg text-base-100 font-bold">Occupation</span>
                                    </label>
                                    <select id='occupation' name='occupation' className={`${!errors.occupation?.type ? 'select' : 'select border-2 border-error'}  w-full transition-all text-neutral-content text-md focus:outline-primary focus:bg-base-100  placeholder:text-base-300 `} {...register("occupation", { required: true })}>
                                        <option value="none" disabled>Choose your superpower</option>
                                        <option value="tele">telekinesis</option>
                                        <option value="time">time travel</option>
                                        <option value="invi">invisibility</option>
                                    </select>
                                    <div className="label justify-start">
                                        {errors.occupation ? <FontAwesomeIcon icon={faTimesCircle} className='text-error mr-2' /> : ""}
                                        <span className='text-error text-sm font-bold'>{errors.occupation?.type === "required" && "Occupation required"}</span>
                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg text-base-100 font-bold">Phone Number</span>
                                    </label>
                                    <input type="text" id='phoneNumber' name='phoneNumber' placeholder="Phone Number" className={`${!errors.phoneNumber?.type ? 'input' : 'input border-2 border-error'}  w-full transition-all text-neutral-content text-lg focus:outline-primary focus:bg-base-100  placeholder:text-base-300 `} {...register("phoneNumber", { required: true })} />
                                    <div className="label justify-start">
                                        {errors.phoneNumber ? <FontAwesomeIcon icon={faTimesCircle} className='text-error mr-2' /> : ""}
                                        <span className='text-error text-sm font-bold'>{errors.phoneNumber?.type === "required" && "Phone Number required"}</span>
                                    </div>
                                </div>
                                <div className="form-control">
                                    <button className="btn w-full mt-6 bg-transparent border-2 border-primary btn-hover-primary text-base-100" type='submit' disabled={isLoading}>Register</button>
                                </div>
                            </form>
                        </div>

                    </div>
                    {/* Right Content Container */}
                    <div className="basis-6/12 hidden lg:flex flex-col items-center justify-center">
                        <div className='w-4/5'>
                            <img src={bgImage} alt="image" />
                        </div>
                        <div className='w-4/5 mt-10'>
                            <p className='text-xl lg:text-4xl font-extrabold text-primary'>Be Greedy For Knowledge</p>
                            <p className='text-base-300 text-lg'>Learn everything and rule the world.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

Register.propTypes = {

}

export default Register
