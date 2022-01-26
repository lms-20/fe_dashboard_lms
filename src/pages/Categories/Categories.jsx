/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CardCategory from '../../components/CardCategory/CardCategory';
import CategoriesCard from '../../components/CategoriesCard/CategoriesCard';
import Navbar from '../../components/Navbar/Navbar';


const Categories = () => {
    const ApiSections = `http://8701-182-2-68-139.ngrok.io/categories`;
    const [categories, setCategories] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        axios.get(ApiSections)
            .then(response => {
                response?.data.data.forEach(dataSections => {
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
        <div className='min-h-screen  bg-neutral-content'>
            <div className='w-11/12 mx-auto my-10'>
                <div className='flex justify-center'>
                    <h3 className='text-primary font-extrabold text-4xl'>All Categories</h3>
                </div>
                <div className='mt-10'>
                    <div className=' flex flex-wrap justify-center flex-grow basis-2/5'>
                        {
                            categories.map((elm, idx) => {
                                return <CardCategory key={idx} id={elm.id} name={elm.name} courses={elm.courses} />
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories