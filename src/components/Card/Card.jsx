/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

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
                <p className='text-base-300 h-6 overflow-hidden break-all'>Mentor by : {course.mentor.name}</p>

                {globalStateUser?.data.role === 'admin'
                    ?
                    <div>
                        <Link to="" className='btn btn-hover-primary w-full bg-transparent border-2 border-primary text-base-100'>Edit Course</Link>
                        <Link to="" className='btn btn-hover-primary w-full bg-transparent border-2 border-primary text-base-100'>Delete Course</Link>
                    </div>
                    :
                    <div>
                        <progress className="progress progress-primary bg-base-300 mt-1" value={10} max="100"></progress>
                        <p className='my-2 font-bold'>{10}% Completed</p>
                        <Link to={`/mycourses/${course.id}`} className='btn btn-hover-primary w-full bg-transparent border-2 border-primary text-base-100'>Start Learning</Link>
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