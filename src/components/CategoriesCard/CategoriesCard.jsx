/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import axios from "axios";


const CategoriesCard = () => {
    const ApiSections = `https://61e62635ce3a2d0017358fa7.mockapi.io/category`;
    const [categories, setCategories] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        axios.get(ApiSections)
            .then(response => {
                response?.data.forEach(dataSections => {
                    setCategories(
                        prevstate => [...prevstate, dataSections]
                    )
                })
            })
            .catch(error => {
                console.log(error)
            })
    }, []);

    return (

        <div className=' flex flex-wrap justify-center flex-grow basis-2/5'>
            {categories.slice(0, 4).map((elm, idx) => {
                return (
                    <div className="card mb-8 bg-neutral lg:card-side basis-5/12 flex-grow mr-6 cursor-pointer" key={idx} onClick={() => navigate(`/categories/${elm.id}`)}>
                        <div className="card-body">
                            <div>
                                <div className='inline-block bg-primary px-3 py-2 rounded-lg'>
                                    <FontAwesomeIcon icon={faLightbulb} className=' text-2xl  inline-block align-middle'></FontAwesomeIcon>
                                </div>
                            </div>
                            <p className='font-bold text-base-100 mt-4'>{elm.name}</p>
                            <div className='flex text-primary items-center justify-between mt-1'>
                                <p>{elm.courses.length} Courses</p>
                                <FontAwesomeIcon icon={faArrowRight} className='text-lg ' />
                            </div>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}

export default CategoriesCard