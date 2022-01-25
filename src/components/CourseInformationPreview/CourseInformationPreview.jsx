/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */

import React from 'react';
import { Link } from 'react-router-dom';
import Reviews from '../Reviews/Reviews';
import PricingPlans from '../../components/PricingPlans/PricingPlans';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import CollapsedContentPreview from '../CollapsedContentPreview/CollapsedContentPreview';


const CourseInformationPreview = (props) => {
    const token = useSelector(state => state.userData.user?.data.token);
    return (
        <>
            {/* Information */}
            <div className='flex flex-wrap my-4'>
                <div className=' btn bg-transparent border-primary text-base-100 rounded-full btn-hover-primary mr-4 mb-4'>345 Students</div>
                <div className=' btn bg-transparent border-primary text-base-100 rounded-full btn-hover-primary mr-4 mb-4'>120 Videos</div>
                <div className=' btn bg-transparent border-primary text-base-100 rounded-full btn-hover-primary mr-4 mb-4'>{props.data?.level}</div>
                <div className=' btn bg-transparent border-primary text-base-100 rounded-full btn-hover-primary mr-4 mb-4'>{props.data?.type}</div>
            </div>
            {/* Mentor */}
            <div className='my-4'>
                <h3 className='text-primary font-extrabold text-3xl mb-4'>Mentor</h3>
                <div className='flex'>
                    <div className="avatar">
                        <div className="rounded-box w-20 h-20 ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="http://daisyui.com/tailwind-css-component-profile-1@94w.png" />
                        </div>
                    </div>
                    <div className='-ml-4 py-2 px-10 rounded-lg inline border-2 border-primary'>
                        <p className='font-bold text-xl'>{props.data?.mentor?.name}</p>
                        <p className='text-base-300'>{props.data?.mentor?.profession}</p>
                    </div>


                </div>
            </div>
            {/* Description */}
            <div className='my-4'>
                <h3 className='text-primary font-extrabold text-3xl mb-4'>Description</h3>
                <p>{props.data?.description}</p>
            </div>
            <div className='my-4'>
                <h3 className='text-primary font-extrabold text-3xl mb-4'>What They Think ?</h3>
                <Reviews
                    data = {props.data.reviews}
                />
                <Link to="" className='btn btn-hover-primary bg-transparent text-base-100 w-full border-2 border-primary'>See more reviews</Link>
            </div>
            <PricingPlans 
                data = {props.data.price}
            />
        </>
    )

}

export default CourseInformationPreview
CourseInformationPreview.propTypes = {
    data : PropTypes.object
}


