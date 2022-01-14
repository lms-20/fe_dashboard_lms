/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react'
import propTypes from 'prop-types'
import {Link} from 'react-router-dom'

const Card = (props) => {
    const course = props.course;
    return(
        <div className={`card ${props.width === "full" ? "w-full" : "w-72"} card-compact bg-neutral drop-shadow-lg m-3`}>
            <figure className=' px-4 pt-4'>
                <img src={course.thumbnail} className='rounded-box'/>
            </figure> 
            <div className="card-body ">
                <h2 className="font-bold text-base h-12 overflow-hidden break-all ">{course.name}</h2> 
                <p className='text-base-300 h-6 overflow-hidden break-all'>Mentor by : {course.mentor}</p>
                
                <progress className="progress progress-primary bg-base-300 mt-1" value={course.progress} max="100"></progress> 
                <p className='my-2 font-bold'>{course.progress}% Completed</p>
                <Link to = "" className='btn btn-hover-primary w-full'>Start Learning</Link>
            </div>
        </div>
    )
}

Card.propTypes = {
    course : propTypes.object,
    width : propTypes.string,
}

export default Card