/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';

import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import Card from '../../components/Card/Card';
import CarouselItems from '../../components/CarouselItems/CarouselItems';


const MyClass = props => {
    return (
        // Pages Container
        <div className=' mt-8 flex flex-col  w-11/12 mx-auto'>
            <h2 className='text-center text-xl lg:text-4xl font-extrabold text-primary'>Its your available course yet</h2>
            <div className='flex justify-center flex-wrap mt-4'>
                <Link to = "" className='btn  btn-hover-primary btn-rounded mx-2'>All Courses</Link>
                <Link to = "" className='btn  btn-hover-primary btn-rounded mx-2'>On Progress</Link>
                <Link to = "" className='btn  btn-hover-primary btn-rounded mx-2'>Finished</Link>
            </div>
            {/* Course Content Container */}
            <div className='flex mt-4'>
                {/* Card only appear in desktop view */}
                <Card/>
                
                {/* Mobile View Container */}
                <div className='w-96 mx-auto'>
                    <div className="alert flex-row lg:hidden bg-transparent px-0 py-4">
                        <div className="flex justify-start"> 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#2196f3" className="w-6 h-6 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />                          
                            </svg> 
                            <p>Swipe to see more</p>
                        </div>
                    </div>
                    {/* Carousel container and only appear in mobile view */}
                    <div className="lg:hidden carousel rounded-box"> 
                            <CarouselItems/>
        
                           
                            <div className="w-full carousel-item">
                                <img src="https://picsum.photos/id/501/256/144" className="w-full" />
                            </div> 
                            <div className="w-full carousel-item">
                                <img src="https://picsum.photos/id/502/256/144" className="w-full" />
                            </div> 
                            <div className="w-full carousel-item">
                                <img src="https://picsum.photos/id/503/256/144" className="w-full" />
                            </div> 
                            <div className="w-full carousel-item">
                                <img src="https://picsum.photos/id/504/256/144" className="w-full" />
                            </div> 
                            <div className="w-full carousel-item">
                                <img src="https://picsum.photos/id/505/256/144" className="w-full" />
                            </div> 
                            <div className="w-full carousel-item">
                                <img src="https://picsum.photos/id/506/256/144" className="w-full" />
                            </div>
                    </div>
                    {/* End of carousel */}
                </div>
                {/* End of mobile view container */}
                               
                
            </div>
            {/* End of course content */}
        </div>
        // End of pages container
    )
}

MyClass.propTypes = {

}

export default MyClass;
