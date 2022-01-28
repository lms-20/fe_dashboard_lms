/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { Fragment, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useForm, useFieldArray } from 'react-hook-form';
import axios from 'axios';
// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle, faTrash, faPlusCircle, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
//SWAL
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
//REACT SPINNERS
import ClipLoader from "react-spinners/ClipLoader";
import { useSelector } from 'react-redux';


const style = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: "9999"
};

const AddNewLesson = props => {
    const { register, handleSubmit, formState: { errors }, reset, control } = useForm({
        defaultValues: {
            items: [{ chapter_id: 0, name: "", video: "" }]
        }
    });
    const token = useSelector(state => state.userData.user?.data.token);

    const [isLoading, setIsLoading] = useState(false);
    const ApiSections = `http://rizkysr90.space:3030/chapters`;
    const ApiUrl = `http://rizkysr90.space:3030/lessons`;
    const navigate = useNavigate();
    const { fields, append, remove } = useFieldArray({
        control,
        name: "items"
    });
    const [sections, setSections] = useState([]);

    const sectionAdded = useSelector(state => state.courseData.sectionAdded);
    useEffect(() => {
        if (!sectionAdded || sectionAdded === false) {
            navigate('/addsection')
        }
    }, []);

    useEffect(() => {
        axios.get(ApiSections)
            .then(response => {
                response?.data.data.forEach(dataSections => {
                    setSections(
                        prevstate => [...prevstate, dataSections]
                    )
                })
            })
            .catch(error => {
                console.log(error)
            })
    }, []);

    const onSubmit = async (data) => {
        // console.log(data.items)
        data.items.forEach(element => {
            element.chapter_id = parseInt(element.chapter_id);

            setIsLoading(true);
            axios.post(
                ApiUrl,
                element,
                { headers: { "Authorization": `Bearer ${token}` } }
            )
                .then(response => {
                    setIsLoading(false);
                    navigate('/addquiz')
                })
                .catch(error => {
                    setIsLoading(false);
                });
        });
    }

    return (
        <Fragment>
            <div style={style}>
                <ClipLoader color="#ffffff" loading={isLoading} size={150} />
            </div>

            <div className='min-h-screen bg-neutral-content relative'>
                <div className="min-h-screen flex justify-center items-center">
                    <form className="w-full lg:w-2/4 mx-auto" onSubmit={handleSubmit(onSubmit)}>
                        <div className='mb-4 flex items-center'>
                            <div>
                                <p className='text-base-100'>Section Info</p>
                                <h2 className='text-primary text-4xl font-extrabold'>
                                    Add Lessons
                                </h2>
                            </div>
                            <div className='ml-auto'>
                                <button className='btn bg-transparent text-base-100 border-2 border-primary btn-hover-primary' type='button' onClick={() => append({ chapter_id: 0, name: "", video: "" })}>
                                    <FontAwesomeIcon icon={faPlusCircle} className='mr-2' />
                                    Tambah Form</button>
                            </div>
                        </div>
                        {fields.map((field, index) => {
                            return (
                                <div className="collapse w-full border border-2 border-primary rounded-box collapse-arrow my-4" key={field.id}>
                                    <input type="checkbox" className='' />
                                    <div className="collapse-title text-xl text-base-100 font-medium">
                                        {`Lessons ${index + 1}`}
                                    </div>
                                    <div className="collapse-content">
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text text-lg text-base-100 font-bold">Section </span>
                                            </label>
                                            <select id='chapter_id' name='chapter_id' className={`${!errors.chapter_id?.type ? 'select' : 'select border-2 border-error'}  w-full transition-all text-neutral-content text-md focus:outline-primary focus:bg-base-100  placeholder:text-base-300 `} {...register(`items[${index}].chapter_id`, { required: true })}>
                                                <option value="" disabled >Choose your superpower</option>
                                                {
                                                    sections.map((data, index) => {
                                                        return <option key={index} value={data.id}>{data.name}</option>
                                                    })
                                                }
                                            </select>
                                            <div className="label justify-start">
                                                {errors.chapter_id ? <FontAwesomeIcon icon={faTimesCircle} className='text-error mr-2' /> : ""}
                                                <span className='text-error text-sm font-bold'>{errors.chapter_id?.type === "required" && "chapter_id required"}</span>
                                            </div>
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text text-lg text-base-100 font-bold">Name</span>
                                            </label>
                                            <input type="text" placeholder="name" className={`${!errors.name?.type ? 'input' : 'input border-2 border-error'}  transition-all text-neutral-content text-lg focus:outline-primary focus:bg-base-100  placeholder:text-base-300 `} {...register(`items[${index}].name`, { required: true })} />
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
                                                <span className="label-text text-lg text-base-100 font-bold">URL Video</span>
                                            </label>
                                            <input type="text" placeholder="video" className={`${!errors.video?.type ? 'input' : 'input border-2 border-error'}  transition-all text-neutral-content text-lg focus:outline-primary focus:bg-base-100  placeholder:text-base-300 `} {...register(`items[${index}].video`, { required: true })} />
                                            <div className="label justify-start">
                                                {errors.video ? <FontAwesomeIcon icon={faTimesCircle} className='text-error mr-2' /> : ""}
                                                <span className='text-error text-sm font-bold'>
                                                    {errors.video?.type === "required" && "video required"}
                                                    {errors.video?.type === "pattern" && "Invalid video Address"}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="form-control">
                                            <button className="btn border-2 border-error bg-transparent text-base-100 hover:bg-error" type='button' onClick={() => {
                                                // if (items >= 0) {
                                                remove(index)
                                                // }
                                            }
                                            }>
                                                <FontAwesomeIcon icon={faTrash} className='mr-2' />
                                                Remove Section </button>
                                        </div>

                                    </div>

                                    {/* <div className="form-control">
                                        <button type='button' onClick={() => append({ section: "", namelesson: "", linkvideo: "" })}> + </button>
                                    </div> */}
                                    {/* End Of Form Container */}
                                </div>
                            )
                        })}
                        <div className=' flex justify-end'>
                            <button className="btn btn-hover-primary bg-transparent border-2 border-primary text-base-100 my-2" type='submit' disabled={isLoading}>
                                Next Move
                                <FontAwesomeIcon icon={faArrowRight} className='ml-2' />
                            </button>
                        </div>
                    </form>
                    {/* Form Container */}
                    {/* End Of Form Container */}
                </div>
            </div>
        </Fragment>
    )
}

AddNewLesson.propTypes = {

}

export default AddNewLesson
