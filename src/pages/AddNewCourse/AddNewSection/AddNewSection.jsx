/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import { useForm, useFieldArray } from 'react-hook-form';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
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
    const courseId = useSelector(state => state.courseData.courseId);
    const { register, handleSubmit, formState: { errors }, reset, control } = useForm({
        defaultValues: {
            items: [{ courseId, linkslide: "", namesection: "" }]
        }
    });
    const [isLoading, setIsLoading] = useState(false);
    const ApiUrl = `https://6141ca84357db50017b3dd36.mockapi.io/sections`;
    const dispatch = useDispatch();
    const { fields, append, remove } = useFieldArray({
        control,
        name: "items"
    });
    // const [inputFields, setInputFields] = useState([
    //     { section: '', name: '' }
    // ]);
    // console.log(courseId)
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
                    // dispatch(storeIdCourse(response.data.id))
                    // MySwal.fire({
                    //     icon: 'success',
                    //     title: 'Succes register account!',
                    //     showConfirmButton: false,
                    //     timer: 2000
                    // })
                    // reset();
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
                        {fields.map((field, index) => {
                            return (
                                <div className="card-body" key={field.id}>
                                    {/* Border Form Container */}
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-lg text-base-100 font-bold">linkslide</span>
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
                                            <span className="label-text text-lg text-base-100 font-bold">namesection</span>
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
                                        <button type='button' onClick={() => {
                                            // if (items >= 0) {
                                            remove(index)
                                            // }
                                        }
                                        }> - </button>
                                    </div>
                                    <div className="form-control">
                                        <button type='button' onClick={() => append({ courseId, linkslide: "", namesection: "" })}> + </button>
                                    </div>
                                    {/* End Of Form Container */}
                                </div>
                            )
                        })}
                        <button type='submit' disabled={isLoading}>Next Move</button>
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
