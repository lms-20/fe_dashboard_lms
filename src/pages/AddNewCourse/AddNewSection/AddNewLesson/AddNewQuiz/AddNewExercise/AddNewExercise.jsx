/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { Fragment, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useForm, useFieldArray } from 'react-hook-form';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { deleteIdCourse } from '../../../../../../store/courseSlice';
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

const AddNewExercise = props => {
    const { register, handleSubmit, formState: { errors }, reset, control } = useForm({
        defaultValues: {
            items: [{ quiz: "", soal: "", jawaban: "" }]
        }
    });
    const [isLoading, setIsLoading] = useState(false);
    const ApiSections = `https://61e62635ce3a2d0017358fa7.mockapi.io/quiz`;
    const ApiUrl = `https://61e62635ce3a2d0017358fa7.mockapi.io/exercises`;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { fields, append, remove } = useFieldArray({
        control,
        name: "items"
    });
    const [quizs, setQuizs] = useState([]);

    useEffect(() => {
        axios.get(ApiSections)
            .then(response => {
                response?.data.forEach(dataSections => {
                    setQuizs(
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
                    navigate('/myclass')
                    dispatch(deleteIdCourse());
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
                                            <span className="label-text text-lg text-base-100 font-bold">quiz</span>
                                        </label>
                                        <select id='quiz' name='quiz' className={`${!errors.quiz?.type ? 'select' : 'select border-2 border-error'}  w-full transition-all text-neutral-content text-md focus:outline-primary focus:bg-base-100  placeholder:text-base-300 `} {...register(`items[${index}].quiz`, { required: true })}>
                                            <option value="" disabled >Choose your superpower</option>
                                            {
                                                quizs.map((data, index) => {
                                                    return <option key={index} value={data.id}>{data.namequiz}</option>
                                                })
                                            }
                                        </select>
                                        <div className="label justify-start">
                                            {errors.quiz ? <FontAwesomeIcon icon={faTimesCircle} className='text-error mr-2' /> : ""}
                                            <span className='text-error text-sm font-bold'>{errors.quiz?.type === "required" && "quiz required"}</span>
                                        </div>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-lg text-base-100 font-bold">soal</span>
                                        </label>
                                        <input type="text" placeholder="soal" className={`${!errors.soal?.type ? 'input' : 'input border-2 border-error'}  transition-all text-neutral-content text-lg focus:outline-primary focus:bg-base-100  placeholder:text-base-300 `} {...register(`items[${index}].soal`, { required: true })} />
                                        <div className="label justify-start">
                                            {errors.soal ? <FontAwesomeIcon icon={faTimesCircle} className='text-error mr-2' /> : ""}
                                            <span className='text-error text-sm font-bold'>
                                                {errors.soal?.type === "required" && "soal required"}
                                                {errors.soal?.type === "pattern" && "Invalid soal Address"}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-lg text-base-100 font-bold">jawaban</span>
                                        </label>
                                        <select id='jawaban' name='jawaban' className={`${!errors.jawaban?.type ? 'select' : 'select border-2 border-error'}  w-full transition-all text-neutral-content text-md focus:outline-primary focus:bg-base-100  placeholder:text-base-300 `} {...register(`items[${index}].jawaban`, { required: true })}>
                                            <option value="A">A</option>
                                            <option value="B">B</option>
                                            <option value="C">C</option>
                                            <option value="D">D</option>
                                            <option value="E">E</option>
                                        </select>
                                        <div className="label justify-start">
                                            {errors.jawaban ? <FontAwesomeIcon icon={faTimesCircle} className='text-error mr-2' /> : ""}
                                            <span className='text-error text-sm font-bold'>{errors.jawaban?.type === "required" && "jawaban required"}</span>
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
                                        <button type='button' onClick={() => append({ quiz: "", soal: "", jawaban: "" })}> + </button>
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

AddNewExercise.propTypes = {

}

export default AddNewExercise
