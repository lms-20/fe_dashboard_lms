/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react'
import { Link,Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

const Drawer = () => {
    return(
        <div className=" shadow bg-neutral drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle"/>
            <div className="flex flex-col drawer-content">
                <div className='bg-neutral-content'>
                    <Navbar/>
                    <Outlet/>
                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay" /> 
                <div className="p-4 overflow-y-auto menu w-80 bg-neutral flex flex-col">
                            <Link to ="/landing" className='text-base-100 px-4  btn-hover-primary btn'>Home</Link>
                            <Link to = "/allcategories" className='text-base-100 px-4 btn-hover-primary btn'>Categories</Link>
                            <a href = "#" className='text-base-100 px-4 btn-hover-primary btn'>About Us</a>
                </div>
            </div>
        </div>
    )
}

export default Drawer