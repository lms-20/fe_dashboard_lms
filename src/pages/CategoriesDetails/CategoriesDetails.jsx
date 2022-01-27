/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */

import React from 'react'
import CardCourseFull from '../../components/CardCourseFull/CardCourseFull'
import Navbar from '../../components/Navbar/Navbar'
import PropTypes from 'prop-types';

const CategoriesDetails = (props) => {
    return(
        <div className='min-h-screen bg-neutral-content'>
            <div className='w-11/12 mx-auto my-10'>
                <div className='flex justify-center'>
                        <h3 className='text-primary font-extrabold text-4xl'>Finance Accounting</h3>
                </div>
                <div className='mt-10'>
                        <CardCourseFull
                        
                        /> 

                </div>
            </div>
            
        </div>
    )
}

export default CategoriesDetails
