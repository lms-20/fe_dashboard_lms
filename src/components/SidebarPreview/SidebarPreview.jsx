/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight, faShoppingCart, faSchool } from '@fortawesome/free-solid-svg-icons';
import CollapsedContentPreview from '../CollapsedContentPreview/CollapsedContentPreview';
import { useSelector } from 'react-redux';

const SidebarPreview = () => {
    const token = useSelector(state => state.userData.user?.data.token);

    return (
        <>
            <div className='bg-neutral flex-col rounded-lg p-4 '>
                {/* Header */}
                <div className='flex hidden lg:flex items-center bg-primary p-2 rounded-lg grayscale opacity-70 hover:grayscale-0 transition-all hover:opacity-100 '>
                    <FontAwesomeIcon icon={faAngleDoubleRight} className='text-4xl text-neutral-content mr-2 ' />
                    <p className='text-neutral-content font-bold text-xl w-full text-center -ml-4'>Course Content</p>
                </div>
                <CollapsedContentPreview />
                {/* Button */}
                <Link to="" className=' btn w-full bg-primary hover:bg-primary text-neutral my-2 text-lg rounded-lg font-bold grayscale opacity-70 hover:grayscale-0 transition-all hover:opacity-100'>
                    <FontAwesomeIcon icon={faShoppingCart} className='mr-2 text-neutral' />
                    <p>Buy course</p>
                </Link>
                {/* If Course Was Enrolled */}
                {
                    token
                    &&
                    <div className=' btn w-full bg-primary hover:bg-primary text-neutral my-2 text-lg rounded-lg font-bold grayscale opacity-70 hover:grayscale-0 transition-all hover:opacity-100'>
                        <FontAwesomeIcon icon={faSchool} className='mr-2 text-neutral' />
                        <p>Go to class</p>
                    </div>
                }

            </div>

        </>
    )
}

export default SidebarPreview
