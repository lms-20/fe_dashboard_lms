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
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
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
    const ApiUrl = `http://yr19g.mocklab.io/users`;
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const token = useSelector(state => state.userData.user?.data.token);

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
            <div className='min-h-screen bg-neutral-content'>
                {/* Form Flex Container */}
                <div className = "min-h-screen flex justify-center items-center">
                    <form  className = "w-full lg:w-2/4 mx-auto"onSubmit={handleSubmit(onSubmit)}>
                        <div className="card-body">
                            <div className="p-10 card border-2 border-primary">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg text-primary font-bold">Email</span>
                                    </label>
                                    {/* input transition-all focus:outline-primary text-neutral-content text-lg placeholder:text-base-300 */}
                                    <input type="text" placeholder="Email" className={`${!errors.email?.type ? 'input' : 'input border-2 border-error'}  transition-all text-neutral-content text-lg focus:outline-primary focus:bg-base-100  placeholder:text-base-300 `} {...register("email", { required: true, pattern: emailRegex })} />
                                    <div className="label justify-start">
                                        {errors.email ? <FontAwesomeIcon icon = {faTimesCircle} className='text-error mr-2'/> : ""}
                                        <span className='text-error text-sm font-bold'>
                                            {errors.email?.type === "required" && "Email required"}
                                            {errors.email?.type === "pattern" && "Invalid Email Address"}
                                        </span>
                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg text-primary font-bold">Password</span>
                                    </label>
                                    <input type="password" placeholder="Password" className={`${!errors.password?.type ? 'input' : 'input border-2 border-error'}  transition-all text-neutral-content text-lg focus:outline-primary focus:bg-base-100  placeholder:text-base-300 `} {...register("password", { required: true })} />
                                    <div className="label justify-start">
                                        {errors.password ? <FontAwesomeIcon icon = {faTimesCircle} className='text-error mr-2'/> : ""}
                                        <span className='text-error text-sm font-bold'>{errors.password?.type === "required" && "Password required"}</span>
                                    </div>
                                </div>
                                <div className="form-control flex flex-col items-center">
                                    <button className="btn w-full mt-4 bg-transparent border-2 border-primary btn-hover-primary" type='submit' disabled={isLoading}>Login</button>
                                    <div className='flex items-center mt-8'>
                                        <p className='text-base-300 text-sm'>Are you dont have an account?</p>
                                        <Link to="/register" className='text-sm ml-1 text-info'>Register Here</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            
        </Fragment>
    )
}

Login.propTypes = {

}

export default Login
