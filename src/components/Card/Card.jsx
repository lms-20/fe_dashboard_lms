/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash,faEdit } from '@fortawesome/free-solid-svg-icons';

const Card = (props) => {
    const globalStateUser = useSelector(state => state.userData?.user);
    const course = props.course;

    return (
        <div className={`card ${props.width === "full" ? "w-full" : "w-72"} card-compact bg-neutral drop-shadow-lg m-3`}>
            <figure className=' px-4 pt-4'>
                <img src={course.thumbnail} className='rounded-box' />
            </figure>
            <div className="card-body ">
                <h2 className="font-bold text-base h-12 overflow-hidden break-all ">{course.name}</h2>
                <p className='text-base-300 h-6 overflow-hidden break-all'>Mentor by : {course.mentor}</p>

                {globalStateUser?.data.role === 1
                    ?
                    <div>
                        <Link to="" className='btn w-full bg-transparent border-2 border-error hover:bg-error text-base-100 my-2'>
                            <FontAwesomeIcon icon={faEdit} className='mr-2'/>
                            Edit Course
                        </Link>
                        <Link to="" className='btn btn-hover-primary w-full bg-transparent border-2 border-primary text-base-100 my-2'>
                             <FontAwesomeIcon icon={faTrash} className='mr-2'/>
                            Delete Course</Link>
                    </div>
                    :
                    <div>
                        <progress className="progress progress-primary bg-base-300 mt-1" value={course.progress} max="100"></progress>
                        <p className='my-2 font-bold'>{course.progress}% Completed</p>
                        <Link to="" className='btn btn-hover-primary w-full bg-transparent border-2 border-primary text-base-100'>Start Learning</Link>
                    </div>
                }
            </div>
        </div>
    )
}

Card.propTypes = {
    course: propTypes.object,
    width: propTypes.string,
}

export default Card