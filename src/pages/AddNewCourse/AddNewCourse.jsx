/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form';
import axios from 'axios';
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

const AddNewCourse = props => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const ApiUrl = `https://6141ca84357db50017b3dd36.mockapi.io/courses`;

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

            <div className='min-h-screen bg-neutral-content relative'>
                <div className="min-h-screen flex justify-center items-center">
                    {/* Form Container */}
                    <form className="w-full lg:w-2/4 mx-auto" onSubmit={handleSubmit(onSubmit)}>
                        <div className="card-body">
                            {/* Border Form Container */}
                            <div className="p-10 card">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg text-base-100 font-bold">name</span>
                                    </label>
                                    <input type="text" placeholder="name" className={`${!errors.name?.type ? 'input' : 'input border-2 border-error'}  transition-all text-neutral-content text-lg focus:outline-primary focus:bg-base-100  placeholder:text-base-300`} {...register("name", { required: true })} />
                                    <div className="label justify-start">
                                        {errors.name ? <FontAwesomeIcon icon={faTimesCircle} className='text-error mr-2' /> : ""}
                                        <span className='text-error text-sm font-bold'>
                                            {errors.name?.type === "required" && "name required"}
                                            {errors.name?.type === "pattern" && "Invalid name Address"}
                                        </span>
                                    </div>
                                </div>
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
                                        <span className="label-text text-lg text-base-100 font-bold">mentor</span>
                                    </label>
                                    <select id='mentor' name='mentor' className={`${!errors.mentor?.type ? 'select' : 'select border-2 border-error'}  w-full transition-all text-neutral-content text-md focus:outline-primary focus:bg-base-100  placeholder:text-base-300 `} {...register("mentor", { required: true })}>
                                        <option value="none" disabled>Choose your superpower</option>
                                        <option value="whyyu">Whyyu</option>
                                        <option value="sandikagalih">Sandhika Galih</option>
                                        <option value="eko">Eko</option>
                                    </select>
                                    <div className="label justify-start">
                                        {errors.mentor ? <FontAwesomeIcon icon={faTimesCircle} className='text-error mr-2' /> : ""}
                                        <span className='text-error text-sm font-bold'>{errors.mentor?.type === "required" && "mentor required"}</span>
                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg text-base-100 font-bold">level</span>
                                    </label>
                                    <select id='level' name='level' className={`${!errors.level?.type ? 'select' : 'select border-2 border-error'}  w-full transition-all text-neutral-content text-md focus:outline-primary focus:bg-base-100  placeholder:text-base-300 `} {...register("level", { required: true })}>
                                        <option value="none" disabled>Choose your superpower</option>
                                        <option value="middle">Middle</option>
                                        <option value="advanced">Advanced</option>
                                        <option value="demigod">Demigod</option>
                                    </select>
                                    <div className="label justify-start">
                                        {errors.level ? <FontAwesomeIcon icon={faTimesCircle} className='text-error mr-2' /> : ""}
                                        <span className='text-error text-sm font-bold'>{errors.level?.type === "required" && "level required"}</span>
                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg text-base-100 font-bold">thumbnail</span>
                                    </label>
                                    {/* input transition-all focus:outline-primary text-neutral-content text-lg placeholder:text-base-300 */}
                                    <input type="text" placeholder="thumbnail" className={`${!errors.thumbnail?.type ? 'input' : 'input border-2 border-error'}  transition-all text-neutral-content text-lg focus:outline-primary focus:bg-base-100  placeholder:text-base-300 `} {...register("thumbnail", { required: true })} />
                                    <div className="label justify-start">
                                        {errors.thumbnail ? <FontAwesomeIcon icon={faTimesCircle} className='text-error mr-2' /> : ""}
                                        <span className='text-error text-sm font-bold'>
                                            {errors.thumbnail?.type === "required" && "thumbnail required"}
                                            {errors.thumbnail?.type === "pattern" && "Invalid thumbnail Address"}
                                        </span>
                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg text-base-100 font-bold">kode</span>
                                    </label>
                                    {/* input transition-all focus:outline-primary text-neutral-content text-lg placeholder:text-base-300 */}
                                    <input type="text" placeholder="kode" className={`${!errors.kode?.type ? 'input' : 'input border-2 border-error'}  transition-all text-neutral-content text-lg focus:outline-primary focus:bg-base-100  placeholder:text-base-300 `} {...register("kode", { required: true })} />
                                    <div className="label justify-start">
                                        {errors.kode ? <FontAwesomeIcon icon={faTimesCircle} className='text-error mr-2' /> : ""}
                                        <span className='text-error text-sm font-bold'>
                                            {errors.kode?.type === "required" && "kode required"}
                                            {errors.kode?.type === "pattern" && "Invalid kode Address"}
                                        </span>
                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg text-base-100 font-bold">Type</span>
                                    </label>
                                    <label className="cursor-pointer label">
                                        <span className="label-text">Premium</span>
                                        <input type="radio" name="typekelas" defaultChecked="true" className="radio" value="premium" {...register('typekelas', { required: true })} />
                                    </label>
                                    <label className="cursor-pointer label">
                                        <span className="label-text">Free</span>
                                        <input type="radio" name="typekelas" className="radio" value="free" {...register('typekelas', { required: true })} />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg text-base-100 font-bold">Status</span>
                                    </label>
                                    <label className="cursor-pointer label">
                                        <span className="label-text">Draft</span>
                                        <input type="radio" name="status" defaultChecked="true" className="radio" value="draft" {...register('status', { required: true })} />
                                    </label>
                                    <label className="cursor-pointer label">
                                        <span className="label-text">Published</span>
                                        <input type="radio" name="status" className="radio" value="published" {...register('status', { required: true })} />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg text-base-100 font-bold">Certificate</span>
                                    </label>
                                    <label className="cursor-pointer label">
                                        <span className="label-text">Yes</span>
                                        <input type="radio" name="certificate" defaultChecked="true" className="radio" value="yes" {...register('certificate', { required: true })} />
                                    </label>
                                    <label className="cursor-pointer label">
                                        <span className="label-text">No</span>
                                        <input type="radio" name="certificate" className="radio" value="no" {...register('certificate', { required: true })} />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg text-base-100 font-bold">price</span>
                                    </label>
                                    {/* input transition-all focus:outline-primary text-neutral-content text-lg placeholder:text-base-300 */}
                                    <input type="text" placeholder="price" className={`${!errors.price?.type ? 'input' : 'input border-2 border-error'}  transition-all text-neutral-content text-lg focus:outline-primary focus:bg-base-100  placeholder:text-base-300 `} {...register("price", { required: true })} />
                                    <div className="label justify-start">
                                        {errors.price ? <FontAwesomeIcon icon={faTimesCircle} className='text-error mr-2' /> : ""}
                                        <span className='text-error text-sm font-bold'>
                                            {errors.price?.type === "required" && "price required"}
                                            {errors.price?.type === "pattern" && "Invalid price Address"}
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

AddNewCourse.propTypes = {

}

export default AddNewCourse
