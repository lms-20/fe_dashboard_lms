/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faLightbulb, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";


const CategoriesCard = () => {
    let x = [1,2,3,4];
    let navigate = useNavigate();
    const handleClick = () => {
        navigate("/categories/1");
    }
    return(
        
        <div className=' flex flex-wrap flex-grow basis-2/5'>
            {x.map((elm,idx) => {
                return(
                    <div className="card mb-8 bg-neutral lg:card-side mr-6 cursor-pointer" key ={idx} onClick={handleClick}>
                        <div className="card-body">
                            <div>
                                <div className='inline-block bg-primary px-3 py-2 rounded-lg'>
                                    <FontAwesomeIcon icon={faLightbulb} className=' text-2xl  inline-block align-middle'></FontAwesomeIcon>
                                </div>
                            </div>
                            <p className='font-bold text-base-100 mt-4'>Finance Accounting</p> 
                            <div className='flex text-primary items-center justify-between mt-1'>
                                <p>11 Courses</p>
                                <FontAwesomeIcon icon={faArrowRight} className='text-lg '/>
                            </div>
                        </div>
                    </div>
                )
            })}
            
        </div>
    )
}

export default CategoriesCard