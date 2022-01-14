/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useDispatch } from 'react-redux';
// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle, faEye, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
//SWAL
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
//REACT SPINNERS
import ClipLoader from "react-spinners/ClipLoader";


const style = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: "9999"
};

const AddNewSection = props => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const ApiUrl = `https://6141ca84357db50017b3dd36.mockapi.io/courses`;
    const dispatch = useDispatch();

    const onSubmit = async (data) => {
        setIsLoading(true);
        axios.post(
            ApiUrl,
            data,
            { headers: { 'Content-Type': 'application/json' } }
        )
            .then(response => {
                setIsLoading(false);
                // dispatch(storeIdCourse(response.data.id))
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

            <div className='min-h-screen bg-neutral-content relative'>
                <div className="min-h-screen flex justify-center items-center">
                    {/* Form Container */}
                    <form className="w-full lg:w-2/4 mx-auto" onSubmit={handleSubmit(onSubmit)}>
                        <div className="card-body">
                            {/* Border Form Container */}
                            <div className="p-10 card">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg text-base-100 font-bold">category</span>
                                    </label>
                                    <select id='category' name='category' className={`${!errors.category?.type ? 'select' : 'select border-2 border-error'}  w-full transition-all text-neutral-content text-md focus:outline-primary focus:bg-base-100  placeholder:text-base-300 `} {...register("category", { required: true })}>
                                        <option value="none" disabled>Choose your superpower</option>
                                        <option value="backend">Backend</option>
                                        <option value="frontend">Frontend</option>
                                        <option value="devops">DevOps</option>
                                    </select>
                                    <div className="label justify-start">
                                        {errors.category ? <FontAwesomeIcon icon={faTimesCircle} className='text-error mr-2' /> : ""}
                                        <span className='text-error text-sm font-bold'>{errors.category?.type === "required" && "category required"}</span>
                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg text-base-100 font-bold">description</span>
                                    </label>
                                    {/* input transition-all focus:outline-primary text-neutral-content text-lg placeholder:text-base-300 */}
                                    <input type="text" placeholder="description" className={`${!errors.description?.type ? 'input' : 'input border-2 border-error'}  transition-all text-neutral-content text-lg focus:outline-primary focus:bg-base-100  placeholder:text-base-300 `} {...register("description", { required: true })} />
                                    <div className="label justify-start">
                                        {errors.description ? <FontAwesomeIcon icon={faTimesCircle} className='text-error mr-2' /> : ""}
                                        <span className='text-error text-sm font-bold'>
                                            {errors.description?.type === "required" && "description required"}
                                            {errors.description?.type === "pattern" && "Invalid description Address"}
                                        </span>
                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg text-base-100 font-bold">description</span>
                                    </label>
                                    {/* input transition-all focus:outline-primary text-neutral-content text-lg placeholder:text-base-300 */}
                                    <input type="text" placeholder="description" className={`${!errors.description?.type ? 'input' : 'input border-2 border-error'}  transition-all text-neutral-content text-lg focus:outline-primary focus:bg-base-100  placeholder:text-base-300 `} {...register("description", { required: true })} />
                                    <div className="label justify-start">
                                        {errors.description ? <FontAwesomeIcon icon={faTimesCircle} className='text-error mr-2' /> : ""}
                                        <span className='text-error text-sm font-bold'>
                                            {errors.description?.type === "required" && "description required"}
                                            {errors.description?.type === "pattern" && "Invalid description Address"}
                                        </span>
                                    </div>
                                </div>
                                <button type='submit' disabled={isLoading}>Next Move</button>
                            </div>
                            {/* End Of Form Container */}
                        </div>
                    </form>
                    {/* End Of Form Container */}
                </div>
            </div>
        </Fragment>
    )
}

AddNewSection.propTypes = {

}

export default AddNewSection
