/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form';

const Login = props => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <Fragment>
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
                            <button className="btn btn-primary" type='submit'>Login</button>
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
