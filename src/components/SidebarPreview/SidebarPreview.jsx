/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import CollapsedContentPreview from '../CollapsedContentPreview/CollapsedContentPreview';
const SidebarPreview = () => {
 return(
     <>
        <div className='bg-neutral flex-col rounded-lg p-4 '>
            {/* Header */}
            <div className='flex items-center bg-primary p-2 rounded-lg grayscale opacity-70 hover:grayscale-0 transition-all hover:opacity-100 '>
                <FontAwesomeIcon icon = {faAngleDoubleRight} className='text-4xl text-neutral-content mr-2 ' />
                <p className='text-neutral-content font-bold text-xl w-full text-center -ml-4'>Course Content</p>
            </div>
            <CollapsedContentPreview/>

           
        </div>
     
     </>
 )
}

export default SidebarPreview
