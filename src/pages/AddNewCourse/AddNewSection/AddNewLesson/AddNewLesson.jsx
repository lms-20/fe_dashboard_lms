/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { Fragment, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useForm, useFieldArray } from 'react-hook-form';
import axios from 'axios';
// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle, faTrash, faPlusCircle,faArrowRight } from '@fortawesome/free-solid-svg-icons';
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
            items: [{ section: "", namelesson: "", linkvideo: "" }]
        }
    });
    const [isLoading, setIsLoading] = useState(false);
    const ApiSections = `https://6141ca84357db50017b3dd36.mockapi.io/sections`;
    const ApiUrl = `https://6141ca84357db50017b3dd36.mockapi.io/lessons`;
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
                response?.data.forEach(dataSections => {
                    setSections(
                        prevstate => [...prevstate, dataSections]
                    )
                })
            })
            .catch(error => {
                console.log(error)
            })
    }, []);

    // console.log(sections)

    const onSubmit = async (data) => {
        // console.log(data.items)
        data.items.forEach(element => {
            setIsLoading(true);
            axios.post(
                ApiUrl,
                element,
                { headers: { 'Content-Type': 'application/json' } }
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
                                <button className='btn bg-transparent text-base-100 border-2 border-primary btn-hover-primary' type='button' onClick={() => append({ section: "", namelesson: "", linkvideo: "" })}>
                                    <FontAwesomeIcon icon = {faPlusCircle} className='mr-2'/>
                                    Tambah Form</button>
                            </div>
                        </div>
                        {fields.map((field, index) => {
                            return (
                                <div className="collapse w-full border border-2 border-primary rounded-box collapse-arrow my-4" key = {field.id}>
                                    <input type="checkbox" className=''/> 
                                    <div className="collapse-title text-xl text-base-100 font-medium">
                                        {`Lessons ${index+1}`}
                                    </div> 
                                    <div className="collapse-content"> 
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text text-lg text-base-100 font-bold">Section </span>
                                            </label>
                                            <select id='section' name='section' className={`${!errors.section?.type ? 'select' : 'select border-2 border-error'}  w-full transition-all text-neutral-content text-md focus:outline-primary focus:bg-base-100  placeholder:text-base-300 `} {...register(`items[${index}].section`, { required: true })}>
                                                <option value="" disabled >Choose your superpower</option>
                                                {
                                                    sections.map((data, index) => {
                                                        return <option key={index} value={data.id}>{data.namesection}</option>
                                                    })
                                                }
                                            </select>
                                            <div className="label justify-start">
                                                {errors.section ? <FontAwesomeIcon icon={faTimesCircle} className='text-error mr-2' /> : ""}
                                                <span className='text-error text-sm font-bold'>{errors.section?.type === "required" && "section required"}</span>
                                            </div>
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text text-lg text-base-100 font-bold">Name</span>
                                            </label>
                                            <input type="text" placeholder="namelesson" className={`${!errors.namelesson?.type ? 'input' : 'input border-2 border-error'}  transition-all text-neutral-content text-lg focus:outline-primary focus:bg-base-100  placeholder:text-base-300 `} {...register(`items[${index}].namelesson`, { required: true })} />
                                            <div className="label justify-start">
                                                {errors.namelesson ? <FontAwesomeIcon icon={faTimesCircle} className='text-error mr-2' /> : ""}
                                                <span className='text-error text-sm font-bold'>
                                                    {errors.namelesson?.type === "required" && "namelesson required"}
                                                    {errors.namelesson?.type === "pattern" && "Invalid namelesson Address"}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text text-lg text-base-100 font-bold">URL Video</span>
                                            </label>
                                            <input type="text" placeholder="linkvideo" className={`${!errors.linkvideo?.type ? 'input' : 'input border-2 border-error'}  transition-all text-neutral-content text-lg focus:outline-primary focus:bg-base-100  placeholder:text-base-300 `} {...register(`items[${index}].linkvideo`, { required: true })} />
                                            <div className="label justify-start">
                                                {errors.linkvideo ? <FontAwesomeIcon icon={faTimesCircle} className='text-error mr-2' /> : ""}
                                                <span className='text-error text-sm font-bold'>
                                                    {errors.linkvideo?.type === "required" && "linkvideo required"}
                                                    {errors.linkvideo?.type === "pattern" && "Invalid linkvideo Address"}
                                                </span>
                                            </div>
                                        </div>
                                        
                                        <div className="form-control">
                                            <button className = "btn border-2 border-error bg-transparent text-base-100 hover:bg-error" type='button' onClick={() => {
                                                // if (items >= 0) {
                                                remove(index)
                                                // }
                                            }
                                            }>
                                            <FontAwesomeIcon icon = {faTrash} className='mr-2' />
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

AddNewLesson.propTypes = {

}

export default AddNewLesson
