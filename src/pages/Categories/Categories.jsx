/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CategoriesCard from '../../components/CategoriesCard/CategoriesCard';
import Navbar from '../../components/Navbar/Navbar';


const Categories = () => {
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

    console.log(categories)

    return (
        <div className='min-h-screen  bg-neutral-content'>
            <div className='w-11/12 mx-auto my-10'>
                <div className='flex justify-center'>
                    <h3 className='text-primary font-extrabold text-4xl'>All Categories</h3>
                </div>
                <div className='mt-10'>
                    <CategoriesCard />

                </div>
            </div>
        </div>
    )
}

export default Categories