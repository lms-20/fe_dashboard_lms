/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from "react";

const Quiz = () => {
    return(
         // Quiz Container
         <div className=''>
            <div className=' w-full '>
                <div className='w-full p-4 bg-neutral rounded-lg mb-3'>
                    <p className='font-sm text-base-300 mb-1'>Quiz Question 1 of 3</p>
                    <p className='font-bold'>Pertanyaan 1</p>
                </div>
                    
                <div className="p-1 card my-2 btn-hover-primary text-base-100 hover:text-neutral">
                    <div className="form-control">
                        <label className="cursor-pointer label ">
                        <span className="label-text text-inherit">{`A. Jawabannya`}</span> 
                        <input type="radio"  className="radio" />
                        </label>
                    </div>
                </div>
            </div>
        </div>
     // End Of Quiz Container
    )
}

export default Quiz