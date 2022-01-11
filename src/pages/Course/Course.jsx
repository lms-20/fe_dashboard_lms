/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Course = () => {

    //Alamat
    // <Route path="/mycourses/:my_course_id" element={<PermanentDrawer />} />

    let params = useParams();
    return(
        <div className='bg-error min-h-screen'>
            {/* Navbar */}
            <div className='bg-neutral px-8 py-4'>
                <div className='flex items-center grayscale opacity-70 hover:grayscale-0 transition-all hover:opacity-100 cursor-pointer text-primary'>
                    <div className='flex h-8 w-8 items-center justify-center rounded-full bg-current'>
                            <FontAwesomeIcon icon = {faArrowLeft} className='text-neutral text-xl '/>
                    </div>
                    <div className=''>
                        <p className='text-current text-sm ml-2'>Back to home</p>
                    </div>
                </div>
            </div>
            {/* Container For The Content */}
            <div className=' mx-auto bg-neutral-content px-8 min-h-screen'>
               
                
            </div>
        </div>
    )
}

export default Course