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
import { faTimesCircle, faTrash, faPlusCircle, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
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
    const token = useSelector(state => state.userData.user?.data.token);
    const course_id = useSelector(state => state.courseData.course_id);
    const courseAdded = useSelector(state => state.courseData.courseAdded);
    const { register, handleSubmit, formState: { errors }, reset, control } = useForm({
        defaultValues: {
            items: [{ course_id, link_ppt: "", name: "" }]
        }
    });
    const [isLoading, setIsLoading] = useState(false);
    const ApiUrl = `http://128.199.232.31:3030/chapters`;
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
                { headers: { "Authorization": `Bearer ${token}` } }
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
                                <button className='btn bg-transparent text-base-100 border-2 border-primary btn-hover-primary' type='button' onClick={() => append({ course_id, link_ppt: "", name: "" })}>
                                    <FontAwesomeIcon icon={faPlusCircle} className='mr-2' />
                                    Tambah Form</button>
                            </div>
                        </div>
                        {fields.map((field, index) => {
                            return (
                                <div className="collapse w-full border border-2 border-primary rounded-box collapse-arrow my-4" key={field.id}>
                                    <input type="checkbox" className='' />
                                    <div className="collapse-title text-xl text-base-100 font-medium">
                                        {`Section ${index + 1}`}
                                    </div>
                                    <div className="collapse-content">
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text text-lg text-base-100 font-bold">URL Slide</span>
                                            </label>
                                            <input type="text" placeholder="link_ppt" className={`${!errors.link_ppt?.type ? 'input' : 'input border-2 border-error'}  transition-all text-neutral-content text-lg focus:outline-primary focus:bg-base-100  placeholder:text-base-300 `} {...register(`items[${index}].link_ppt`, { required: true })} />
                                            <div className="label justify-start">
                                                {errors.link_ppt ? <FontAwesomeIcon icon={faTimesCircle} className='text-error mr-2' /> : ""}
                                                <span className='text-error text-sm font-bold'>
                                                    {errors.link_ppt?.type === "required" && "link_ppt required"}
                                                    {errors.link_ppt?.type === "pattern" && "Invalid link_ppt Address"}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text text-lg text-base-100 font-bold">Section Name</span>
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
                                            <button className="btn border-2 border-error bg-transparent text-base-100 hover:bg-error" type='button' onClick={() => {
                                                // if (items >= 0) {
                                                remove(index)
                                                // }
                                            }
                                            }>
                                                <FontAwesomeIcon icon={faTrash} className='mr-2' />
                                                Remove Section </button>
                                        </div>
                                        {/* <div className="form-control bg-info">
                                        <button type='button' onClick={() => append({ courseId, link_ppt: "", name: "" })}> + </button>
                                        </div> */}
                                        {/* End Of Form Container */}
                                    </div>
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

AddNewSection.propTypes = {

}

export default AddNewSection
