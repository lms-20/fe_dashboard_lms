/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import axios from 'axios';
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
//REACT SPINNERS
import ClipLoader from "react-spinners/ClipLoader"
import { useSelector } from 'react-redux';

const RequestCounselling = () => {
    const token = useSelector(state => state.userData.user?.data.token);
    const params = useParams();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }, watch, reset } = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const domain = `https://6141ca84357db50017b3dd36.mockapi.io`;
    const ApiUrl = `${domain}/users`;
    const [userCourses, setuserCourses] = useState([]);//this will be used to store, which courses user have
    const pivotApi = `http://rizkysr90.space:3030/mycourses`;
    const style = {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: "9999"
    };

    const onSubmit = async (data) => {
        setIsLoading(true);
        console.log(data)
        axios.post(
            ApiUrl,
            data,
            { headers: { 'Content-Type': 'application/json' } }
        )
            .then(response => {
                setIsLoading(false);
                MySwal.fire({
                    icon: 'success',
                    title: 'Succes',
                    showConfirmButton: false,
                    timer: 2000
                })
                reset();
            })
            .catch(error => {
                setIsLoading(false);
            });
    }

    useEffect(() => {
        const haveTemp = []
        axios.get(pivotApi, { headers: { "Authorization": `Bearer ${token}` } })
            .then(response => {
                response?.data.data.forEach(dataCourses => {
                    haveTemp.push(dataCourses.course_id)
                })
                setuserCourses(haveTemp)
            })
            .catch(error => {
                console.log(error)
            })
    }, []);

    useEffect(() => {
        if (userCourses.length > 0) {
            const have = userCourses.includes(parseInt(params.course_id))
            if (!have) {
                navigate(`/course/${params.course_id}`)
            }
        }
    }, [userCourses]);

    return (
        /* Pages Container */
        <>

            <div style={style}>
                <ClipLoader color="#ffffff" loading={isLoading} size={150} />
            </div>
            <div className='min-h-screen bg-neutral-content relative'>
                <div className='absolute top-4 left-4'>
                    <div className='flex items-center cursor-pointer' onClick={() => navigate("/")}>
                        <div className='flex h-8 w-8 items-center justify-center rounded-full bg-primary'>
                            <FontAwesomeIcon icon={faArrowLeft} className='text-neutral text-xl ' />
                        </div>
                        <div className=''>
                            <p className='text-primary text-sm ml-2'>Back to course</p>
                        </div>
                    </div>
                </div>
                <div className="min-h-screen flex justify-center items-center">
                    {/* Form Container */}
                    <form className="w-full lg:w-2/4 mx-auto" onSubmit={handleSubmit(onSubmit)}>
                        <div className="card-body">
                            {/* Border Form Container */}
                            <div className="p-10 card">
                                <div className='flex flex-col items-center text-base-300 mb-2'>
                                    <h2 className='text-xl lg:text-4xl font-extrabold text-primary text-center'>Are You Need Help?</h2>
                                    <p className='text-sm mt-1 text-center'>Please tell us your problem while you are learning</p>
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg text-base-100 font-bold">Section Name</span>
                                </label>
                                <input type="text" id='section' name='section' placeholder="The name of section what you overwhelmed" className={`${!errors.section?.type ? 'input' : 'input border-2 border-error'}  transition-all text-neutral-content text-lg focus:outline-primary focus:bg-base-100  placeholder:text-base-300 `}  {...register("section", { required: true })} />
                                <div className="label justify-start">
                                    {errors.section ? <FontAwesomeIcon icon={faTimesCircle} className='text-error mr-2' /> : ""}
                                    <span className='text-error text-sm font-bold'>
                                        {errors.section?.type === "required" && "Section name is required"}
                                    </span>
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg text-base-100 font-bold">Description</span>
                                </label>
                                <textarea id="description" placeholder="Please,give our team short description about what you want" className="textarea h-24 textarea-bordered textarea-primary transition-all text-neutral-content text-lg focus:outline-primary focus:bg-base-100  placeholder:text-base-300 " {...register("description", { required: true })} />
                                <div className="label justify-start">
                                    {errors.description ? <FontAwesomeIcon icon={faTimesCircle} className='text-error mr-2' /> : ""}
                                    <span className='text-error text-sm font-bold'>
                                        {errors.description?.type === "required" && "Description is required"}
                                    </span>
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg text-base-100 font-bold">Goals</span>
                                </label>
                                <textarea id="goal" placeholder="Please,describe your goals " className="textarea h-24 textarea-bordered textarea-primary transition-all text-neutral-content text-lg focus:outline-primary focus:bg-base-100  placeholder:text-base-300 "{...register("goal", { required: true })} />
                                <div className="label justify-start">
                                    {errors.goal ? <FontAwesomeIcon icon={faTimesCircle} className='text-error mr-2' /> : ""}
                                    <span className='text-error text-sm font-bold'>
                                        {errors.goal?.type === "required" && "The goal is required"}
                                    </span>
                                </div>
                            </div>
                            <div className="form-control flex flex-col items-center  mt-8">
                                <button className="btn w-full bg-transparent border-2 border-primary btn-hover-primary text-base-100" type='submit' >Send Your Problem</button>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </>
    )

}

export default RequestCounselling