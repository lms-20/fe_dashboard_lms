/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Reviews = () => {

    function makeArray(rating) {
        let arr = []
        for (let i = 0; i < 5; i++) {
                if (rating > 0) {
                   arr.push(1) 
                } else  {
                    arr.push(0)
                }
                rating--
        }
        return arr
    } 

    const givenRating = makeArray(3);
    return(
        <>
            <div className='flex flex-col lg:flex-row flex-wrap flex-grow'>
                {/* The Card */}
                <div className="card mb-8 bg-neutral lg:card-side basis-3/12 flex-grow lg:mr-6" >
                    <div className="card-body">
                        {/* Rating */}
                        <div className='flex mb-2'>
                            {
                                givenRating.map((elm) => {
                                    if (elm === 0) {
                                       return  <FontAwesomeIcon icon = {faStar} className='text-base-300 mr-1'></FontAwesomeIcon>
                                    } else {
                                       return  <FontAwesomeIcon icon = {faStar} className='text-yellow-400 mr-1 '></FontAwesomeIcon>
                                    }
                                })
                            }
                        </div>
                        <div>
                            <p className='mb-2 text-sm'>&quot;Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate unde voluptates sapiente ipsa nesciunt laudantium cumque ad accusamus officiis inventore pariatur voluptatem reiciendis, itaque eum, neque delectus! Maiores, magni repellat?&quot;</p>
                        </div>
                        <div className='flex justify-end'>
                            <p className='font-bold text-primary'>- Author Ratings</p>
                        </div>
                        {/* End Of Rating */}
                    </div>
                </div>
                
                
            </div>
            
        
        </>
    )
}

export default Reviews