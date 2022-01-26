/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { Fragment, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { storeIdCourse, setFalseCourseAdded } from '../../store/courseSlice';
// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle, faEye, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
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
    const token = useSelector(state => state.userData.user?.data.token);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const [categories, setCategories] = useState([]);
    const [mentors, setMentors] = useState([]);
    const ApiUrl = `https://bef3-182-2-68-139.ngrok.io/courses`;
    const ApiCategories = `https://bef3-182-2-68-139.ngrok.io/categories`;
    const ApiMentors = `https://bef3-182-2-68-139.ngrok.io/mentors`;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(ApiCategories)
            .then(response => {
                response.data.data.forEach(dataCategories => {
                    setCategories(preffState => [...preffState, dataCategories])
                })
            })
    }, [])

    useEffect(() => {
        axios.get(ApiMentors)
            .then(response => {
                response.data.data.forEach(dataCategories => {
                    setMentors(preffState => [...preffState, dataCategories])
                })
            })
    }, [])

    const onSubmit = async (data) => {
        setIsLoading(true);
        console.log(data)
        axios.post(
            ApiUrl,
            data,
            { headers: { "Authorization": `Bearer ${token}` } }
        )
            .then(response => {
                setIsLoading(false);
                dispatch(storeIdCourse(response.data.data.id))
                dispatch(setFalseCourseAdded(true))
                navigate('/addsection')
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
                    <form className="w-full lg:w-4/5 mx-auto" onSubmit={handleSubmit(onSubmit)}>
                        <div className="card-body">
                            {/* Border Form Container */}
                            <div className="p-10 card">
                                <div className='my-8'>
                                    <h2 className='text-primary text-4xl font-extrabold'>Add Course</h2>
                                    <p className='text-base-100 '>Course Information</p>
                                </div>
                                <div className="form-control flex flex-row items-start my-4">
                                    <label className="label flex flex-col items-start p-0 basis-1/5 mr-8" htmlFor='name'>
                                        <p className="label-text text-lg text-primary text-xl font-bold">Name</p>
                                        <p className='text-base-300 text-xs'>Include course name,the course name should have minimum 40 characters</p>
                                    </label>
                                    <div className=' flex-grow'>
                                        <input type="text" placeholder="Insert your product name" name="name" id="name" className={`${!errors.name?.type ? 'input' : 'input border-2 border-error'}  my-2 w-full transition-all text-neutral-content text-lg focus:outline-primary focus:bg-base-100  placeholder:text-base-300`} {...register("name", { required: true })} />
                                        <div className="label justify-start">
                                            {errors.name ? <FontAwesomeIcon icon={faTimesCircle} className='text-error mr-2' /> : ""}
                                            <span className='text-error text-sm font-bold'>
                                                {errors.name?.type === "required" && "name required"}
                                                {errors.name?.type === "pattern" && "Invalid name Address"}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-control flex flex-row my-4">
                                    <div className='flex flex-col items-start basis-1/5 mr-8'>
                                        <p className='text-lg text-primary text-xl font-bold'>General</p>
                                        <p className='text-base-300 text-xs'>The general information about the course</p>
                                    </div>
                                    <div className='flex flex-grow flex-row justify-around'>
                                        <div className='form-control basis-1/4 mr-10 flex flex-col'>
                                            <label className="label p-0 flex flex-col items-start mb-4">
                                                <span className="label-text text-lg text-base-100 font-bold">Category</span>
                                                <p className='text-base-300 text-xs'>Categories according to the field studied</p>
                                            </label>
                                            <select id='category_id' name='category_id' className={`${!errors.category_id?.type ? 'select' : 'select border-2 border-error'}  w-full transition-all text-neutral-content text-md focus:outline-primary focus:bg-base-100  placeholder:text-base-300 `} {...register("category_id", { required: true, setValueAs: v => parseInt(v), })}>
                                                <option value="none" disabled>Chose categories</option>
                                                {
                                                    categories.map((elm, idx) => {
                                                        return <option key={idx} value={elm.id}>{elm.name}</option>
                                                    })
                                                }
                                            </select>
                                            <div className="label justify-start">
                                                {errors.category_id ? <FontAwesomeIcon icon={faTimesCircle} className='text-error mr-2' /> : ""}
                                                <span className='text-error text-sm font-bold'>{errors.category_id?.type === "required" && "category required"}</span>
                                            </div>
                                        </div>
                                        <div className='form-control basis-1/4 mr-10 flex flex-col'>
                                            <label className="label p-0 flex flex-col items-start mb-4">
                                                <span className="label-text text-lg text-base-100 font-bold">Mentor</span>
                                                <p className='text-base-300 text-xs'>Mentor is who teach the course</p>
                                            </label>
                                            <select id='mentor_id' name='mentor_id' className={`${!errors.mentor_id?.type ? 'select' : 'select border-2 border-error'} mt-auto w-full transition-all text-neutral-content text-md focus:outline-primary focus:bg-base-100  placeholder:text-base-300 `} {...register("mentor_id", { required: true, setValueAs: v => parseInt(v), })}>
                                                <option value="none" disabled>Choose mentor_id</option>
                                                {
                                                    mentors.map((elm, idx) => {
                                                        return <option key={idx} value={elm.id}>{elm.name}</option>
                                                    })
                                                }
                                            </select>
                                            <div className="label justify-start">
                                                {errors.mentor_id ? <FontAwesomeIcon icon={faTimesCircle} className='text-error mr-2' /> : ""}
                                                <span className='text-error text-sm font-bold'>{errors.mentor_id?.type === "required" && "mentor required"}</span>
                                            </div>
                                        </div>
                                        <div className='form-control basis-1/4 mr-10 flex flex-col'>
                                            <label className="label p-0 flex flex-col items-start mb-4">
                                                <span className="label-text text-lg text-base-100 font-bold">Level</span>
                                                <p className='text-base-300 text-xs'>Level course is according to material of the course</p>
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
                                    </div>
                                </div>
                                <div className="form-control flex flex-row items-start my-4">
                                    <label className="label flex flex-col items-start p-0 basis-1/5 mr-8">
                                        <span className="label-text text-lg  font-bold text-primary">Thumbnail</span>
                                        <p className='text-base-300 text-xs'>The general information about the course</p>
                                    </label>
                                    {/* input transition-all focus:outline-primary text-neutral-content text-lg placeholder:text-base-300 */}
                                    <div className='flex-grow'>
                                        <input type="text" placeholder="Insert Thumbnail Course" className={`${!errors.thumbnail?.type ? 'input' : 'input border-2 border-error'}  my-2 w-full transition-all text-neutral-content text-lg focus:outline-primary focus:bg-base-100  placeholder:text-base-300 `} {...register("thumbnail", { required: true })} />
                                        <div className="label justify-start">
                                            {errors.thumbnail ? <FontAwesomeIcon icon={faTimesCircle} className='text-error mr-2' /> : ""}
                                            <span className='text-error text-sm font-bold'>
                                                {errors.thumbnail?.type === "required" && "thumbnail required"}
                                                {errors.thumbnail?.type === "pattern" && "Invalid thumbnail Address"}
                                            </span>
                                        </div>
                                    </div>

                                </div>
                                <div className="form-control flex flex-row items-start my-4">
                                    <label className="label flex flex-col items-start p-0 basis-1/5 mr-8">
                                        <span className="label-text text-lg  font-bold text-primary">Kode</span>
                                        <p className='text-base-300 text-xs'>Unique code for a course to define something unique</p>
                                    </label>
                                    {/* input transition-all focus:outline-primary text-neutral-content text-lg placeholder:text-base-300 */}
                                    <div className='flex-grow'>
                                        <input type="text" placeholder="kode" className={`${!errors.kode?.type ? 'input' : 'input border-2 border-error'} w-full my-2 transition-all text-neutral-content text-lg focus:outline-primary focus:bg-base-100  placeholder:text-base-300 `} {...register("kode", { required: true })} />
                                        <div className="label justify-start">
                                            {errors.kode ? <FontAwesomeIcon icon={faTimesCircle} className='text-error mr-2' /> : ""}
                                            <span className='text-error text-sm font-bold'>
                                                {errors.kode?.type === "required" && "kode required"}
                                                {errors.kode?.type === "pattern" && "Invalid kode Address"}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-control flex flex-row items-start my-4">
                                    <label className="label flex flex-col items-start p-0 basis-1/5 mr-8">
                                        <span className="label-text text-lg  font-bold text-primary">Type</span>
                                        <p className='text-base-300 text-xs'>Type course is about free or premium course</p>
                                    </label>
                                    <div className='flex-grow flex my-2'>
                                        <label className="cursor-pointer label mr-4">
                                            <input type="radio" name="type" defaultChecked="true" className="radio mr-2 radio-primary" value="premium" {...register('type', { required: true })} />
                                            <span className="label-text text-lg text-base-100">Premium</span>
                                        </label>
                                        <label className="cursor-pointer label">
                                            <input type="radio" name="type" className="radio radio-primary mr-2" value="free" {...register('type', { required: true })} />
                                            <span className="label-text text-lg text-base-100">Free</span>
                                        </label>
                                    </div>

                                </div>
                                <div className="form-control flex flex-row items-start my-4">
                                    <label className="label flex flex-col items-start p-0 basis-1/5 mr-8">
                                        <span className="label-text text-lg  font-bold text-primary">Status</span>
                                        <p className='text-base-300 text-xs'>Status course is about is the course is available for any user</p>
                                    </label>
                                    <div className='flex-grow flex my-2'>
                                        <label className="cursor-pointer label mr-4">
                                            <input type="radio" name="status" defaultChecked="true" className="radio radio-primary mr-2" value="draft" {...register('status', { required: true })} />
                                            <span className="label-text text-lg text-base-100">Draft</span>

                                        </label>
                                        <label className="cursor-pointer label">
                                            <input type="radio" name="status" className="radio radio-primary mr-2" value="published" {...register('status', { required: true })} />
                                            <span className="label-text text-lg text-base-100">Published</span>
                                        </label>
                                    </div>

                                </div>
                                <div className="form-control flex flex-row items-start my-4">
                                    <label className="label flex flex-col items-start p-0 basis-1/5 mr-8">
                                        <span className="label-text text-lg  font-bold text-primary">Certificate</span>
                                        <p className='text-base-300 text-xs'>Status course is about is the course is available for any user</p>
                                    </label>
                                    <div className='flex-grow flex my-2'>
                                        <label className="cursor-pointer label">
                                            <input type="radio" name="certificate" defaultChecked="true" className="radio radio-primary mr-2" value={true} {...register('certificate', { required: true, setValueAs: v => Boolean(v), })} />
                                            <span className="label-text text-lg text-base-100 mr-4">Yes</span>
                                        </label>
                                        <label className="cursor-pointer label">
                                            <input type="radio" name="certificate" className="radio radio-primary mr-2" value={false} {...register('certificate', { required: true, setValueAs: v => Boolean(v), })} />
                                            <span className="label-text text-lg text-base-100">No</span>
                                        </label>
                                    </div>

                                </div>
                                <div className="form-control flex flex-row items-start my-4">
                                    <label className="label flex flex-col items-start p-0 basis-1/5 mr-8">
                                        <span className="label-text text-lg  font-bold text-primary">Price</span>
                                        <p className='text-base-300 text-xs'>Price is how much money that user spend if the course is premium</p>
                                    </label>
                                    {/* input transition-all focus:outline-primary text-neutral-content text-lg placeholder:text-base-300 */}
                                    <div className='flex-grow'>
                                        <input type="number" placeholder="price" className={`${!errors.price?.type ? 'input' : 'input border-2 border-error'}  w-full my-2 transition-all text-neutral-content text-lg focus:outline-primary focus:bg-base-100  placeholder:text-base-300 `} {...register("price", { required: true, setValueAs: v => parseInt(v), })} />
                                        <div className="label justify-start">
                                            {errors.price ? <FontAwesomeIcon icon={faTimesCircle} className='text-error mr-2' /> : ""}
                                            <span className='text-error text-sm font-bold'>
                                                {errors.price?.type === "required" && "price required"}
                                                {errors.price?.type === "pattern" && "Invalid price Address"}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-control flex flex-row items-start my-4">
                                    <label className="label flex flex-col items-start p-0 basis-1/5 mr-8">
                                        <span className="label-text text-lg  font-bold text-primary">Description</span>
                                        <p className='text-base-300 text-xs'>Describe the information about the course</p>
                                    </label>
                                    <div className='flex-grow'>
                                        <input type="text" placeholder="description" className={`${!errors.description?.type ? 'input' : 'input border-2 border-error'} w-full my-2  transition-all text-neutral-content text-lg focus:outline-primary focus:bg-base-100  placeholder:text-base-300 `} {...register("description", { required: true })} />
                                        <div className="label justify-start">
                                            {errors.description ? <FontAwesomeIcon icon={faTimesCircle} className='text-error mr-2' /> : ""}
                                            <span className='text-error text-sm font-bold'>
                                                {errors.description?.type === "required" && "description required"}
                                                {errors.description?.type === "pattern" && "Invalid description Address"}
                                            </span>
                                        </div>
                                    </div>
                                    {/* input transition-all focus:outline-primary text-neutral-content text-lg placeholder:text-base-300 */}
                                </div>
                                <div className='flex justify-end '>
                                    <button type='submit' disabled={isLoading} className='btn btn-lg text-base-100 btn-hover-primary bg-transparent border-2 border-primary'>Next Move</button>
                                </div>
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
