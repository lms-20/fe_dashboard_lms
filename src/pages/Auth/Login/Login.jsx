/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import axios from 'axios';
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
    const globalState = useSelector(state => state.user);

    const onSubmit = (data) => {
        setIsLoading(true);
        axios.post(
            ApiUrl,
            data,
            { headers: { 'Content-Type': 'application/json' } }
        )
            .then(response => {
                setIsLoading(false);
                dispatch(login(data))
                navigate('/');
            })
            .catch(error => {
                setIsLoading(false);
                MySwal.fire({
                    icon: 'error',
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
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="card-body">
                    <div className="p-10 card bg-base-200">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className={!errors.email?.type ? 'input' : 'input input-error'} {...register("email", { required: true, pattern: emailRegex })} />
                            <div className="label">
                                <span className='text-red-500 text-sm'>
                                    {errors.email?.type === "required" && "Email required"}
                                    {errors.email?.type === "pattern" && "Invalid Email Address"}
                                </span>
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className={!errors.password?.type ? 'input' : 'input input-error'} {...register("password", { required: true })} />
                            <div className="label">
                                <span className='text-red-500 text-sm'>{errors.password?.type === "required" && "Password required"}</span>
                            </div>
                        </div>
                        <div className="form-control">
                            <br />
                            <button className="btn btn-primary" type='submit' disabled={isLoading}>Login</button>
                            <br />
                            <Link to="/register" className='text-center'>Register</Link>
                        </div>
                    </div>
                </div>
            </form>
        </Fragment>
    )
}

Login.propTypes = {

}

export default Login
