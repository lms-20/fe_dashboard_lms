/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react'
import {Link} from "react-router-dom"
import PropTypes from 'prop-types'

const CarouselItems = () => {
    return(
        <div className='w-full carousel-item'>
            <div className="card w-full card-compact bg-neutral drop-shadow-lg">
                <figure className=' px-4 pt-4'>
                    <img src="https://picsum.photos/id/1005/400/250" className='rounded-box'/>
                </figure> 
                <div className="card-body ">
                    <h2 className="font-bold text-base h-12 overflow-hidden break-all ">React - The Complete Guide (incl Hooks,Context,Redux,Preact)</h2> 
                    <p className='text-base-300 h-6 overflow-hidden break-all'>Mentor by : Dan Abramov</p>
                    
                    <progress className="progress progress-primary bg-base-300 mt-4" value="50" max="100"></progress> 
                    <p className='my-2 font-bold'>50% Completed</p>
                    <Link to = "" className='btn btn-hover-primary w-full'>Start Learning</Link>
                </div>
            </div>
        </div>
    )
}

CarouselItems.PropTypes = {

}

export default CarouselItems