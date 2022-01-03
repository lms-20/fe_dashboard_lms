/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import bgImage from '../../../assets/undraw_resume_re_hkth.svg';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useRef } from 'react';
import axios from 'axios';

const delay = (sec) => {
    return new Promise(resolve => {
        setTimeout(resolve, sec)
    })
}

const Register = props => {
    const { register, handleSubmit, formState: { errors }, watch, formState, reset } = useForm();
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const password = useRef({});
    password.current = watch("password", "");
    const ApiUrl = `https://6141ca84357db50017b3dd36.mockapi.io/users`;

    const onSubmit = async (data) => {
        axios.post(
            ApiUrl,
            data,
            { headers: { 'Content-Type': 'application/json' } }
        )
            .then(response => {
                reset();
                console.log(response.data)
            })
            .catch(error => { console.log(error.data) });
    }

    return (
        <div className="p-10 bg-base-200">
            <h1 className='text-2xl font-bold'>Get Started</h1>
            <p>already have account ? <Link to='#'>Login</Link></p>
            <br />
            <div className="flex">
                <div className="flex-auto w-64 border-black mx-5">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input type="text" id='fullname' name='fullname' placeholder="Full Name" className={!errors.fullname?.type ? 'input' : 'input input-error'} {...register("fullname", { required: true })} />
                            <div className="label">
                                <span className='text-red-500 text-sm'>{errors.fullname?.type === "required" && "Fullname required"}</span>
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email Address</span>
                            </label>
                            <input type="text" id='emailAddress' name='emailAddress' placeholder="Email Address" className={!errors.emailAddress?.type ? 'input' : 'input input-error'} {...register("emailAddress", { required: true, pattern: emailRegex })} />
                            <div className="label">
                                <span className='text-red-500 text-sm'>
                                    {errors.emailAddress?.type === "required" && "Email Address required"}
                                    {errors.emailAddress?.type === "pattern" && "Invalid Email Address"}
                                </span>
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Age</span>
                            </label>
                            <input type="text" id='age' name='age' placeholder="Age" className={!errors.age?.type ? 'input' : 'input input-error'} {...register("age", { required: true })} />
                            <div className="label">
                                <span className='text-red-500 text-sm'>{errors.age?.type === "required" && "Age required"}</span>
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" id='password' name='password' placeholder="Password" className={!errors.password?.type ? 'input' : 'input input-error'} {...register("password", { required: true })} />
                            <div className="label">
                                <span className='text-red-500 text-sm'>{errors.password?.type === "required" && "Password required"}</span>
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Check Password</span>
                            </label>
                            <input type="password" id='checkPassword' name='checkPassword' placeholder="Check Password" className={!errors.checkPassword?.type ? 'input' : 'input input-error'} {...register("checkPassword", { required: true, validate: value => value === password.current || "The passwords do not match" })} />
                            <div className="label">
                                <span className='text-red-500 text-sm'>
                                    {errors.checkPassword?.type === "required" && "CheckPassword required"}
                                    {errors.checkPassword?.type === "validate" && "The passwords do not match"}
                                </span>
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Occupation</span>
                            </label>
                            <select id='occupation' name='occupation' className={!errors.occupation?.type ? 'select select-bordered w-full max-w-xs' : 'select select-bordered w-full max-w-xs select-error'} {...register("occupation", { required: true })}>
                                <option value="none" disabled>Choose your superpower</option>
                                <option value="tele">telekinesis</option>
                                <option value="time">time travel</option>
                                <option value="invi">invisibility</option>
                            </select>
                            <div className="label">
                                <span className='text-red-500 text-sm'>{errors.occupation?.type === "required" && "Occupation required"}</span>
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input type="text" id='phoneNumber' name='phoneNumber' placeholder="Phone Number" className={!errors.phoneNumber?.type ? 'input' : 'input input-error'} {...register("phoneNumber", { required: true })} />
                            <div className="label">
                                <span className='text-red-500 text-sm'>{errors.phoneNumber?.type === "required" && "PhoneNumber required"}</span>
                            </div>
                        </div>
                        <div className="form-control">
                            <br />
                            <button className="btn btn-primary" type='submit' disabled={formState.isSubmitting}>Register</button>
                        </div>
                    </form>
                </div>
                <div className="flex-auto w-32 border-black">
                    <img src={bgImage} alt="image" />
                </div>
            </div>
        </div>
    )
}

Register.propTypes = {

}

export default Register
