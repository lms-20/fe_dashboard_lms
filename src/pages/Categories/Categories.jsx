/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */

import React from 'react';
import CategoriesCard from '../../components/CategoriesCard/CategoriesCard';
import Navbar from '../../components/Navbar/Navbar';


const Categories = () => {
    return(
        <div className='min-h-screen  bg-neutral-content'>
            <div className='w-11/12 mx-auto my-10'>
                <div className='flex justify-center'>
                    <h3 className='text-primary font-extrabold text-4xl'>All Categories</h3>
                </div>
                <div className='mt-10'>
                    <CategoriesCard/>

                </div>
            </div>
        </div>
    )
} 

export default Categories