/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import bgImage from '../../../assets/undraw_resume_re_hkth.svg';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Register = props => {
    const initialValues = {
        fullname: "",
        emailAddress: "",
        age: "",
        password: "",
        checkPassword: "",
        occupation: "",
        phoneNumber: ""
    }
    const [formData, setFormData] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        setFormErrors(validate(formData));

        if (Object.keys(formErrors).length !== 0) {
            console.log(formErrors);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.keys(formErrors).length === 0) {
            console.log(formData);
        }
        console.log("there's errors")
    }

    const validate = (values) => {
        const errors = {};
        const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!values.fullname) {
            errors.fullname = "Fullname is required!"
        }
        if (!values.emailAddress) {
            errors.emailAddress = "Email Address is required!"
        }
        if (!values.fullname) {
            errors.fullname = "Fullname is required!"
        }
        if (!values.age) {
            errors.age = "Age is required!"
        }
        if (!values.password) {
            errors.password = "Password is required!"
        }
        if (!values.checkPassword) {
            errors.checkPassword = "Check Password is required!"
        }
        if (!values.occupation) {
            errors.occupation = "Occupation is required!"
        }
        if (!values.phoneNumber) {
            errors.phoneNumber = "Phone Number is required!"
        }
        return errors;
    }

    return (
        <div className="p-10 bg-base-200">
            <h1 className='text-2xl font-bold'>Get Started</h1>
            <p>already have account ? <Link to='#'>Login</Link></p>
            <br />
            <div className="flex">
                <div className="flex-auto w-64 border-black mx-5">
                    <form onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input type="text" id='fullname' name='fullname' placeholder="Full Name" className="input" value={formData.fullname} onChange={handleChange} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email Address</span>
                            </label>
                            <input type="text" id='emailAddress' name='emailAddress' placeholder="Email Address" className="input" value={formData.emailAddress} onChange={handleChange} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Age</span>
                            </label>
                            <input type="text" id='age' name='age' placeholder="Age" className="input" value={formData.age} onChange={handleChange} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" id='password' name='password' placeholder="Password" className="input" value={formData.password} onChange={handleChange} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Check Password</span>
                            </label>
                            <input type="text" id='checkPassword' name='checkPassword' placeholder="Check Password" className="input" value={formData.checkPassword} onChange={handleChange} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Occupation</span>
                            </label>
                            <select id='occupation' name='occupation' className="select select-bordered w-full max-w-xs" value={formData.occupation} onChange={handleChange}>
                                <option value="none" disabled selected>Choose your superpower</option>
                                <option value="tele">telekinesis</option>
                                <option value="time">time travel</option>
                                <option value="invi">invisibility</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input type="text" id='phoneNumber' name='phoneNumber' placeholder="Phone Number" className="input" value={formData.phoneNumber} onChange={handleChange} />
                        </div>
                        <div className="form-control">
                            <br />
                            <button className="btn btn-primary" type='submit'>Register</button>
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
