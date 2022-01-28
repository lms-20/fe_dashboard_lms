/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const Reviews = (props) => {
    function makeArray(rating) {
        let arr = []
        for (let i = 0; i < 5; i++) {
            if (rating > 0) {
                arr.push(1)
            } else {
                arr.push(0)
            }
            rating--
        }
        return arr
    }

    // const givenRating = makeArray(props.data === undefined ?? 0 : props.rating);
    return (
        <>
            <div className='flex flex-col lg:flex-row flex-wrap flex-grow'>
                {/* The Card */}
                {
                    props.data?.map((elm) => {
                        return (
                            <div key = {elm.id} className="card mb-8 bg-neutral lg:card-side basis-3/12 flex-grow lg:mr-6" >
                                <div className="card-body">
                                    {/* Rating */}
                                    <div className='flex mb-2'>
                                        {
                                            makeArray(elm.rating)?.map((elm, idx) => {
                                                if (elm === 0) {
                                                    return <FontAwesomeIcon key={idx} icon={faStar} className='text-base-300 mr-1'></FontAwesomeIcon>
                                                } else {
                                                    return <FontAwesomeIcon key={idx} icon={faStar} className='text-yellow-400 mr-1 '></FontAwesomeIcon>
                                                }
                                            })
                                        }
                                    </div>
                                    <div>
                                        <p className='mb-2 text-sm'>&quot;{elm.note}&quot;</p>
                                    </div>
                                    <div className='flex justify-end'>
                                        <p className='font-bold text-primary'>- Author Ratings</p>
                                    </div>
                                    {/* End Of Rating */}
                                </div>
                            </div>
                        )
                    })
                }
                    
                
        
            </div>


        </>
    )
}

export default Reviews
Reviews.propTypes = {
    data : PropTypes.array
}