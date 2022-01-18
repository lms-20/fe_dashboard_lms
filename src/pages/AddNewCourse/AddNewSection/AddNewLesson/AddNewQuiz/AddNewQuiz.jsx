/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { Fragment, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useForm, useFieldArray } from 'react-hook-form';
import axios from 'axios';
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

const AddNewQuiz = props => {
    const { register, handleSubmit, formState: { errors }, reset, control } = useForm({
        defaultValues: {
            items: [{ section: "", namequiz: "" }]
        }
    });
    const [isLoading, setIsLoading] = useState(false);
    const ApiSections = `https://6141ca84357db50017b3dd36.mockapi.io/sections`;
    const ApiUrl = `https://61e62635ce3a2d0017358fa7.mockapi.io/quiz`;
    const navigate = useNavigate();
    const { fields, append, remove } = useFieldArray({
        control,
        name: "items"
    });
    const [sections, setSections] = useState([]);

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
                    // navigate('/addsection')
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
                                            <span className="label-text text-lg text-base-100 font-bold">section</span>
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
                                            <span className="label-text text-lg text-base-100 font-bold">namequiz</span>
                                        </label>
                                        <input type="text" placeholder="namequiz" className={`${!errors.namequiz?.type ? 'input' : 'input border-2 border-error'}  transition-all text-neutral-content text-lg focus:outline-primary focus:bg-base-100  placeholder:text-base-300 `} {...register(`items[${index}].namequiz`, { required: true })} />
                                        <div className="label justify-start">
                                            {errors.namequiz ? <FontAwesomeIcon icon={faTimesCircle} className='text-error mr-2' /> : ""}
                                            <span className='text-error text-sm font-bold'>
                                                {errors.namequiz?.type === "required" && "namequiz required"}
                                                {errors.namequiz?.type === "pattern" && "Invalid namequiz Address"}
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
                                        <button type='button' onClick={() => append({ section: "", namequiz: "" })}> + </button>
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

AddNewQuiz.propTypes = {

}

export default AddNewQuiz
