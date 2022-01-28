/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */

import React, { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { faGraduationCap, faListUl, faLightbulb, faSignal, faStore, faThumbsUp, faDoorOpen, faUserEdit, faCommentDots, faUser, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { logout } from '../../store/userSlice';


const Navbar = () => {
    const globalStateUser = useSelector(state => state.userData?.user);
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout());
    }
    return (
        <div className=' w-full bg-neutral'>
            <div className="navbar flex shadow-lg  text-primary justify-between w-full lg:w-11/12 mx-auto">
                <div className="">
                    <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost drawer-button lg:hidden border-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </label>
                    <div className='hidden lg:flex justify-center lg:items-center h-full'>

                        <h1 className='text-2xl text-base-100 font-bold text-primary px-4'>E-Learning</h1>
                        <div className='flex'>
                            <Link to="/landing" className='text-base-100 px-4 hover:text-primary'>Home</Link>
                            <Link to="/allcategories" className='text-base-100 px-4 hover:text-primary'>Categories</Link>
                            <a href="#" className='text-base-100 px-4 hover:text-primary'>About Us</a>
                        </div>
                    </div>
                </div>
                <div className='flex items-center'>
                    {/* Search Form */}
                    <div className="">
                        <div className="form-control">
                            <input type="text" placeholder="Search Course Name" className=" pr-10 transition-all w-52 focus:w-72 border-2 border-primary input input-ghost rounded-full text-base-100 focus:text-base-100" />
                        </div>
                    </div>
                    {/*  Button Search */}
                    <div className="-ml-12 ">
                        <button className="btn-square border-none  btn btn-ghost bg-transparent">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block text-primary w-6 h-6 stroke-current">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </div>
                    {/* Avatar + Dropdown*/}
                    <div className="ml-2">
                        {globalStateUser?.data.token
                            ?
                            <div className="m-1 dropdown dropdown-end ">
                                <div className='rounded-full w-12 text-primary h-12 flex items-center justify-center hover:border-2 border-current' tabIndex="0">
                                    <FontAwesomeIcon icon={faUser} className='text-2xl text-current' />
                                </div>
                                {/* <img src="https://i.pravatar.cc/500?img=32" tabIndex="0" className='rounded-full w-12 h-12 ' /> */}
                                <ul tabIndex="0" className="text-base-100 p-2 shadow menu dropdown-content bg-neutral rounded-box w-52 mt-2">
                                    <li>
                                        <Link to='/myclass' className='btn-hover-primary'><FontAwesomeIcon icon={faUserEdit} className='mr-2' />My Class</Link>
                                    </li>
                                    <li>
                                        <a className='btn-hover-primary' onClick={handleLogout}><FontAwesomeIcon icon={faDoorOpen} className='mr-2' />Logout</a>
                                    </li>
                                </ul>
                            </div>
                            :
                            <Link className='btn btn-primary text-neutral-content hover:bg-base-100 mx-3' to='/login'>Login</Link>
                        }
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Navbar