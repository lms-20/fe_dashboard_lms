/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { Fragment, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useForm, useFieldArray } from 'react-hook-form';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setFalseSectionAdded } from '../../../store/courseSlice';
// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle, faTrash,faPlusCircle, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
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

const AddNewSection = props => {
    const courseId = useSelector(state => state.courseData.courseId);
    const courseAdded = useSelector(state => state.courseData.courseAdded);
    const { register, handleSubmit, formState: { errors }, reset, control } = useForm({
        defaultValues: {
            items: [{ courseId, linkslide: "", namesection: "" }]
        }
    });
    const [isLoading, setIsLoading] = useState(false);
    const ApiUrl = `https://6141ca84357db50017b3dd36.mockapi.io/sections`;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { fields, append, remove } = useFieldArray({
        control,
        name: "items"
    });

    useEffect(() => {
        if (!courseAdded || courseAdded === false) {
            navigate('/addcourse')
        }
    }, []);

    const onSubmit = async (data) => {
        // console.log(data.items)
        data.items.forEach(element => {
            console.log(element)
            setIsLoading(true);
            axios.post(
                ApiUrl,
                element,
                { headers: { 'Content-Type': 'application/json' } }
            )
                .then(response => {
                    setIsLoading(false);
                    dispatch(setFalseSectionAdded(true))
                    navigate('/addlesson')
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
                                    Add Section
                                </h2>
                            </div>
                            <div className='ml-auto'>
                                <button className='btn bg-transparent text-base-100 border-2 border-primary btn-hover-primary' type='button' onClick={() => append({ courseId, linkslide: "", namesection: "" })}>
                                    <FontAwesomeIcon icon = {faPlusCircle} className='mr-2'/>
                                    Tambah Form</button>
                            </div>
                        </div>
                        {fields.map((field, index) => {
                            return (
                                <div className="collapse w-full border border-2 border-primary rounded-box collapse-arrow my-4" key = {field.id}>
                                    <input type="checkbox" className=''/> 
                                    <div className="collapse-title text-xl text-base-100 font-medium">
                                        {`Section ${index+1}`}
                                    </div> 
                                    <div className="collapse-content"> 
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text text-lg text-base-100 font-bold">URL Slide</span>
                                            </label>
                                            <input type="text" placeholder="linkslide" className={`${!errors.linkslide?.type ? 'input' : 'input border-2 border-error'}  transition-all text-neutral-content text-lg focus:outline-primary focus:bg-base-100  placeholder:text-base-300 `} {...register(`items[${index}].linkslide`, { required: true })} />
                                            <div className="label justify-start">
                                                {errors.linkslide ? <FontAwesomeIcon icon={faTimesCircle} className='text-error mr-2' /> : ""}
                                                <span className='text-error text-sm font-bold'>
                                                    {errors.linkslide?.type === "required" && "linkslide required"}
                                                    {errors.linkslide?.type === "pattern" && "Invalid linkslide Address"}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text text-lg text-base-100 font-bold">Section Name</span>
                                            </label>
                                            <input type="text" placeholder="namesection" className={`${!errors.namesection?.type ? 'input' : 'input border-2 border-error'}  transition-all text-neutral-content text-lg focus:outline-primary focus:bg-base-100  placeholder:text-base-300 `} {...register(`items[${index}].namesection`, { required: true })} />
                                            <div className="label justify-start">
                                                {errors.namesection ? <FontAwesomeIcon icon={faTimesCircle} className='text-error mr-2' /> : ""}
                                                <span className='text-error text-sm font-bold'>
                                                    {errors.namesection?.type === "required" && "namesection required"}
                                                    {errors.namesection?.type === "pattern" && "Invalid namesection Address"}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="form-control">
                                            <button  className = "btn border-2 border-error bg-transparent text-base-100 hover:bg-error" type='button' onClick={() => {
                                                // if (items >= 0) {
                                                remove(index)
                                                // }
                                            }
                                            }> 
                                            <FontAwesomeIcon icon = {faTrash} className='mr-2' />
                                            Remove Section </button>
                                        </div>
                                        {/* <div className="form-control bg-info">
                                        <button type='button' onClick={() => append({ courseId, linkslide: "", namesection: "" })}> + </button>
                                        </div> */}
                                        {/* End Of Form Container */}
                                    </div>
                                </div>
                            )
                        })}
                        <div className=' flex justify-end'>
                            <button className = "btn btn-hover-primary bg-transparent border-2 border-primary text-base-100 my-2" type='submit' disabled={isLoading}>
                                Next Move
                                <FontAwesomeIcon icon = {faArrowRight} className='ml-2'/>
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

AddNewSection.propTypes = {

}

export default AddNewSection
