/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form';
// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle, faEye, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const AddNewCourse = props => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
        console.log('aaaaa')
        console.log(data);
        reset();
    }

    return (
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
                            <button type='submit'>Next Move</button>
                        </div>
                        {/* End Of Form Container */}
                    </div>
                </form>
                {/* End Of Form Container */}
            </div>
        </div>
    )
}

AddNewCourse.propTypes = {

}

export default AddNewCourse
