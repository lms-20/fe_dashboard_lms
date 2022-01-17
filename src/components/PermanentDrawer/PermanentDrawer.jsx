/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react'
import PropTypes from 'prop-types'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { Link, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { faGraduationCap, faStore, faDoorOpen, faUserEdit, faCommentDots, faUser } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/userSlice';

const PermanentDrawer = props => {
    const globalStateUser = useSelector(state => state.userData?.user);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    }

    return (
        <div className="shadow bg-neutral-content drawer drawer-mobile min-h-screen relative text-base-100">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="flex flex-col drawer-content">
                {/* Navbar */}
                <div className="navbar flex mb-2 shadow-lg bg-neutral-content text-primary justify-between lg:w-11/12 lg:mx-auto">
                    <div className="">
                        <label htmlFor="my-drawer-2" className="btn btn-square btn-ghost drawer-button lg:hidden border-none">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </label>
                        <div className='hidden lg:flex lg:flex-col justify-center'>
                            <p className='text-lg text-base-100 font-bold '>Welcome, {globalStateUser?.data.name}</p>
                            <p className='text-sm text-base-300'>You’re doing a great job,keep it up!</p>
                        </div>
                    
                    </div>
                    <div className='flex items:center'>
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
                            {/* Dropdown */}
                            <div className="m-1 dropdown dropdown-end ">
                                <div className='rounded-full w-12 text-primary h-12 flex items-center justify-center hover:border-2 border-current' tabIndex="0">
                                    <FontAwesomeIcon icon={faUser} className='text-2xl text-current' />
                                </div>
                                {/* <img src="https://i.pravatar.cc/500?img=32" tabIndex="0" className='rounded-full w-12 h-12 ' /> */}
                                <ul tabIndex="0" className="text-base-100 p-2 shadow menu dropdown-content bg-neutral rounded-box w-52 mt-2">
                                    <li>
                                        <Link to='/settings' className='btn-hover-primary'><FontAwesomeIcon icon={faUserEdit} className='mr-2' />Settings</Link>
                                    </li>
                                    <li>
                                        <a className='btn-hover-primary' onClick={handleLogout}><FontAwesomeIcon icon={faDoorOpen} className='mr-2' />Logout</a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                        {/* End Of Navbar */}
                    </div>
                </div>
                {/* Your upcoming content should be below */}
                <Outlet />
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay" />
                <ul className="menu p-4 overflow-y-auto w-80 bg-neutral  text-base-100 ">
                    <h1 className=' font-extrabold text-3xl text-primary mb-10 pl-6'>E-Learning</h1>
                    <li className='mb-2'>
                        <Link to="/myclass" className='text-xl btn-hover-primary' style={{ padding: "1.2rem 1.25rem" }}>
                            <FontAwesomeIcon icon={faGraduationCap} className='mr-4' />
                            {globalStateUser?.data.role === 1
                                ?
                                'Class'
                                :
                                'My Class'
                            }
                        </Link>
                    </li>
                    <li className='mb-2'>
                        <Link to="/transactions" className='text-xl btn-hover-primary' style={{ padding: "1.2rem 1.25rem" }}>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="clock-rotate-left" className="svg-inline--fa fa-clock-rotate-left mr-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor" d="M256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C201.7 512 151.2 495 109.7 466.1C95.2 455.1 91.64 436 101.8 421.5C111.9 407 131.8 403.5 146.3 413.6C177.4 435.3 215.2 448 256 448C362 448 448 362 448 256C448 149.1 362 64 256 64C202.1 64 155 85.46 120.2 120.2L151 151C166.1 166.1 155.4 192 134.1 192H24C10.75 192 0 181.3 0 168V57.94C0 36.56 25.85 25.85 40.97 40.97L74.98 74.98C121.3 28.69 185.3 0 255.1 0L256 0zM256 128C269.3 128 280 138.7 280 152V246.1L344.1 311C354.3 320.4 354.3 335.6 344.1 344.1C335.6 354.3 320.4 354.3 311 344.1L239 272.1C234.5 268.5 232 262.4 232 256V152C232 138.7 242.7 128 256 128V128z">
                                </path>
                            </svg>
                            Transactions
                        </Link>
                    </li>
                    <li className='mb-2'>
                        <Link to="/" className='text-xl btn-hover-primary' style={{ padding: "1.2rem 1.25rem" }}>
                            <FontAwesomeIcon icon={faStore} className='mr-4' />
                            Catalog
                        </Link>
                    </li>
                    {globalStateUser?.data.role === 1
                        ?
                        <li className='mb-2'>
                            <Link to="/feedback/reqCourse" className='text-xl btn-hover-primary' style={{ padding: "1.2rem 1.25rem" }}>
                                <FontAwesomeIcon icon={faCommentDots} className='mr-4' />
                                Feedback
                            </Link>
                        </li>
                        :
                        null
                    }
                    <li className='mb-2'>
                        <Link to="/settings" className='text-xl btn-hover-primary' style={{ padding: "1.2rem 1.25rem" }}>
                            <FontAwesomeIcon icon={faUserEdit} className='mr-4' />
                            Settings
                        </Link>
                    </li>
                    
                   
                </ul>
            </div>
        </div>
    )
}

PermanentDrawer.propTypes = {

}

export default PermanentDrawer