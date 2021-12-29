/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react'
import PropTypes from 'prop-types'
import NavBar from '../NavBar/NavBar'

const PermanentDrawer = props => {
    return (
        <div className="shadow bg-base-200 drawer drawer-mobile min-h-screen relative">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" /> 

            <div className="flex flex-col  drawer-content">
                {/* <label htmlFor="my-drawer-2" className="mb-4 btn btn-primary w-20 px-16 drawer-button lg:hidden ">Click</label>  */}
                
                <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content justify-end lg:">
                    <div className="flex-1 lg:hidden  ">
                        <label  htmlFor="my-drawer-2" className="btn btn-square btn-ghost drawer-button">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">           
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />               
                        </svg>
                        </label>
                    </div> 
                    {/* <div className="flex-1 hidden px-2 mx-2 lg:flex">
                        <span className="text-lg font-bold">
                        daisyUI
                        </span>
                    </div>  */}
                    <div className="flex-none">
                        <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-ghost" />
                        </div>
                    </div> 
                    <div className="flex-none">
                        <button className="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">             
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />             
                        </svg>
                        </button>
                    </div> 
                    <div className="flex-none">
                        <button className="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">     
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />                     
                        </svg>
                        </button>
                    </div> 
                    <div className="flex-none">
                        <div className="avatar">
                            <div className="rounded-full w-10 h-10 m-1">
                                <img src="https://i.pravatar.cc/500?img=32" />
                            </div>
                        </div>
                    </div>
                </div>
                <p>Hello world</p>
            </div> 
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay" /> 
            
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                <h1>E-Learning</h1>
                <li>
                    <a>Menu Item</a>
                </li> 
                <li>
                    <a>Menu Item</a>
                </li>
                </ul>
            </div>
        </div>


    )
}

PermanentDrawer.propTypes = {

}

export default PermanentDrawer
