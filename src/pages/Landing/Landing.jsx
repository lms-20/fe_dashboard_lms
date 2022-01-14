/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { Link, Outlet } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import heroImg from "../../assets/undraw_online_learning.svg";
import { logout } from '../../store/userSlice';
import { faGraduationCap, faListUl, faLightbulb, faSignal , faStore, faThumbsUp , faDoorOpen, faUserEdit, faCommentDots, faUser, faArrowRight } from '@fortawesome/free-solid-svg-icons';


const Landing = () => {
    
    const globalStateUser = useSelector(state => state.userData?.user);
    const dispatch = useDispatch();


    const handleLogout = () => {
        dispatch(logout());
    }
    return(
        <div>
            {/* Navbar */}
            <div className='bg-neutral'>
                <div className="navbar flex shadow-lg  text-primary justify-between w-11/12 mx-auto">
                        <div className="">
                            <label htmlFor="my-drawer-2" className="btn btn-square btn-ghost drawer-button lg:hidden border-none">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </label>
                            <div className='hidden lg:flex justify-center lg:items-center h-full'>
                                
                                <h1 className='text-2xl text-base-100 font-bold text-primary px-4'>E-Learning</h1>
                                <div className='flex'>
                                    <a href ="#" className='text-base-100 px-4 hover:text-primary'>Home</a>
                                    <a href = "#" className='text-base-100 px-4 hover:text-primary'>Categories</a>
                                    <a href = "#" className='text-base-100 px-4 hover:text-primary'>About Us</a>
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
                        </div>
                    </div>
                </div>
            {/* End Of Navbar */}
            {/* Hero */}
            <div className="hero bg-neutral-content">
                <div className="flex-col hero-content lg:flex-row-reverse justify-end text-neutral-content">
                    <img src={heroImg} className=" flex-grow  basis-2/4" /> 
                    <div className='basis-2/4'>
                        <h1 className="mb-5 text-6xl text-primary font-extrabold">
                            Learning Without Limits
                        </h1> 
                        <p className="mb-5 text-base-100">
                        Skills for your present (and your future).Get started with us.
                        </p> 
                        <button className="btn bg-transparent w-2/5 text-base-100 border-primary btn-hover-primary rounded-full">Register</button>
                    </div>
                </div>
            </div>
            {/* End Of Hero */}
            {/* Our Value */}
            <div className='bg-neutral-content py-10'>
                <div className='lg:w-11/12 mx-auto py-4 flex flex-col lg:flex-row lg:justify-between'>
                        <div className= 'grow-0 basis-1/4 pr-4 flex flex-col'>
                            <div className=' flex flex-row items-center lg:flex-col lg:items-start text-base-100'>
                                <FontAwesomeIcon icon = {faThumbsUp} className='text-4xl bg-primary p-2 rounded-full lg:mb-2 text-neutral-content'/>
                                <h3 className='font-bold text-base-100 pl-4 lg:pl-0'>100% Online Clasess</h3>
                            </div>
                            <p className='text-base-300 mt-2'>Learn anytime and anywhere you like with online class.</p>
                        </div>
                        <div className= 'grow-0 basis-1/4 pr-4 '>
                            <div className=' flex flex-row items-center lg:flex-col lg:items-start text-base-100'>
                                <FontAwesomeIcon icon = {faThumbsUp} className='text-4xl bg-primary p-2 rounded-full lg:mb-2 text-neutral-content'/>
                                <h3 className='font-bold text-base-100 pl-4 lg:pl-0'>Expert Mentor</h3>
                            </div>
                            <p className='text-base-300 mt-2'>Learn from professional for build your skillsets</p>
                        </div>
                        <div className= 'grow-0 basis-1/4 pr-4 '>
                            <div className=' flex flex-row items-center lg:flex-col lg:items-start text-base-100'>
                                <FontAwesomeIcon icon = {faThumbsUp} className='text-4xl bg-primary p-2 rounded-full lg:mb-2 text-neutral-content'/>
                                <h3 className='font-bold text-base-100 pl-4 lg:pl-0'>Lifetime Access</h3>
                            </div>
                            <p className='text-base-300 mt-2'>Just with single payment and you get permanent access.</p>
                        </div>
                        <div className= 'grow-0 basis-1/4 pr-4 '>
                            <div className=' flex flex-row items-center lg:flex-col lg:items-start text-base-100'>
                                <FontAwesomeIcon icon = {faThumbsUp} className='text-4xl bg-primary p-2 rounded-full lg:mb-2 text-neutral-content'/>
                                <h3 className='font-bold text-base-100 pl-4 lg:pl-0'>Completion Certificate</h3>
                            </div>
                            <p className='text-base-300 mt-2'>Prove the world that you expert at that courses.</p>
                        </div>
                </div>
            </div>
            {/* End Of Our Value */}
            {/* Categories */}
            <div className='bg-neutral-content py-10'>
                    {/* Break Section */}
                    <div className=' lg:w-11/12 mx-auto'>
                        <div className=''>
                            <div className='inline-block rounded-full py-3 px-6 bg-primary'>
                                <FontAwesomeIcon icon={faListUl} className=' align-middle text-neutral-content text-xl inline-block'></FontAwesomeIcon>
                                <p className='text-xl inline-block ml-2 align-middle font-bold'>Categories</p>
                            </div>
                           
                        </div>
                    </div>
                    {/* End Break */}
                    {/* Cateogires Items */}
                    <div className='flex lg:w-11/12 mx-auto mt-8'>
                        {/* Card Categories Container */}
                        <div className=' flex justify-between flex-wrap basis-2/5'>
                            {/* Categories Items */}
                            <div className="card mb-8 bg-neutral lg:card-side">
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
                            <div className="card mb-8 bg-neutral lg:card-side">
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
                            <div className="card mb-8 bg-neutral lg:card-side">
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
                            <div className="card mb-8  bg-neutral lg:card-side">
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
                        </div>
                        <div className=' basis-2/4 ml-10 flex flex-col justify-center'>
                            <h3 className='font-extrabold text-5xl text-primary'>Feel Free <span className='mt-3 text-base-100 block'>To Explore More</span></h3>
                            <p className='text-base-300 my-10'>Megangar. Enkortsdator. Självoptimering. Hegisk. Pugon. Iren. Nykalingar. Regt. Sönera. Biokemi. Kroselig. Miren. Ode. Kefåtoskapet. Masuligen. Hämndporr. Tin. Treseda. Desplastisk. Brony. </p>
                            <button className="btn bg-transparent w-2/5 text-base-100 border-primary btn-hover-primary rounded-full">See All Categories</button>
                        </div>
                    </div>
                    {/* End OF Categories Items */}
            </div>
            {/* End OF Categories  */}
            {/* Top Courses Container */}
            <div className='bg-neutral-content py-10'>
                <div className=' lg:w-11/12 mx-auto'>
                    <div className=''>
                            <div className='inline-block rounded-full py-3 px-6 bg-primary'>
                                <FontAwesomeIcon icon={faListUl} className=' align-middle text-neutral-content text-xl inline-block'></FontAwesomeIcon>
                                <p className='text-xl inline-block ml-2 align-middle font-bold'>Top Courses</p>
                            </div>   
                    </div>
                    <div className='flex mt-8'>
                        {/* Card */}
                        <div className= "card-compact bg-neutral drop-shadow-lg mr-4 basis-3/12 rounded-lg">
                            <figure className=' px-4 pt-4'>
                                <img src={heroImg} className='rounded-box'/>
                            </figure> 
                            <div className="card-body">
                                <div className='h-10 overflow-hidden break-all mb-2'>
                                    <h2 className="font-bold text-base-100 text-ellipsis">React - The Complete Guide (incl Hooks, React uasdkghasdkgasdkjgasdkjasgdkjasgdjkasdkjasgda</h2> 

                                </div>
                                <p className='text-base-300 h-6 overflow-hidden break-all mb-4'>Mentor by : Rizki</p>
                                <div className='flex h-6 items-center mb-2'>
                                    <div className='h-6 overflow-hidden basis-6/12 break-all'>
                                        <p className='text-base-300'>
                                            <FontAwesomeIcon icon={faLightbulb} className='mr-2'></FontAwesomeIcon>
                                            Technology
                                        </p>
                                    </div>
                                   
                                    <div className='basis-6/12 flex justify-end'>
                                        <p className='text-right text-base-300  font-bold'>
                                            <FontAwesomeIcon icon={faSignal} className='mr-2'></FontAwesomeIcon>
                                            Expert
                                        </p>
                                    </div>
                                </div>
                                <div className='flex items-center mb-2'>
                                    <div className='grow'>
                                        <p className='font-bold text-primary text-2xl'>Rp900.000</p>
                                    </div>
                                    <div className='text-sm text-base-300 flex flex-col'>
                                        <p>Lifetime Access</p>
                                        <p className='font-bold text-sm text-right'>58 Videos</p>
                                    </div>
                                </div>
                                <div>
                                    <Link to = "" className='btn bg-transparent border-2 border-primary text-base-100 btn-hover-primary w-full'>Check it</Link>
                                </div>
                            </div>
                        </div>
                        {/* End Of Cart */}
                    </div>
                </div>
            </div>
            {/* End Of Top Course Container */}
            <div className='bg-neutral'>
                <footer className="footer  text-base-100 w-11/12 mx-auto py-8">
                    <div>
                        <span className="footer-title">Services</span> 
                        <a className="link link-hover">Branding</a> 
                        <a className="link link-hover">Design</a> 
                        <a className="link link-hover">Marketing</a> 
                        <a className="link link-hover">Advertisement</a>
                    </div> 
                    <div>
                        <span className="footer-title">Company</span> 
                        <a className="link link-hover">About us</a> 
                        <a className="link link-hover">Contact</a> 
                        <a className="link link-hover">Jobs</a> 
                        <a className="link link-hover">Press kit</a>
                    </div> 
                    <div>
                        <span className="footer-title">Contact Support</span> 
                        <a className="link link-hover">elearning@company.com</a> 
                        <a className="link link-hover">Privacy policy</a> 
                        <a className="link link-hover">Cookie policy</a>
                    </div> 
                    <div>
                        <span className="footer-title">Newsletter</span> 
                        <div className="form-control w-80">
                        <label className="label">
                            <span className="label-text text-base-100">Enter your email address</span>
                        </label> 
                        <div className="relative">
                            <input type="text" placeholder="username@site.com" className="w-full pr-16 input input-bordered text-neutral-content" /> 
                            <button className="absolute top-0 right-0 rounded-l-none btn btn-primary text-neutral-content">Subscribe</button>
                        </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}

Landing.propTypes = {

}

export default Landing