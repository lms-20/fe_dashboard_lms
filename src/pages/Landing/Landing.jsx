/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Link } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import heroImg from "../../assets/undraw_online_learning.svg";
import { faListUl, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../../components/Navbar/Navbar';
import CategoriesCard from '../../components/CategoriesCard/CategoriesCard';
import CardCourseFull from '../../components/CardCourseFull/CardCourseFull';


const Landing = () => {
    return(
        <div className='bg-neutral-content'>
            {/* Navbar */}
              <Navbar/>
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
                        <Link to = "/register" className="btn bg-transparent w-2/5 text-base-100 border-primary btn-hover-primary rounded-full">Register</Link>
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
                        {/* Categories Items */}
                        <CategoriesCard/>
                        {/* End OF Categories Items */}
                        <div className=' basis-2/4 ml-10 flex flex-col justify-center flex-grow'>
                            <h3 className='font-extrabold text-5xl text-primary'>Feel Free <span className='mt-3 text-base-100 block'>To Explore More</span></h3>
                            <p className='text-base-300 my-10'>Megangar. Enkortsdator. Självoptimering. Hegisk. Pugon. Iren. Nykalingar. Regt. Sönera. Biokemi. Kroselig. Miren. Ode. Kefåtoskapet. Masuligen. Hämndporr. Tin. Treseda. Desplastisk. Brony. </p>
                            <Link to ="/allcategories" className="btn bg-transparent w-2/5 text-base-100 border-primary btn-hover-primary rounded-full">See All Categories</Link>
                        </div>
                    </div>
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
                    {/* Card */}
                    <CardCourseFull/>
                    {/* End Of Cart */}
                    <div className='flex justify-center mt-10 '>
                        <Link to = "" className='bg-transparent text-base-100 btn btn-hover-primary border-2 border-primary'>See All Courses</Link>
                    </div>
                </div>
            </div>
            {/* End Of Top Course Container */}
            {/* FAQ Container */}
            <div className='bg-neutral-content py-10'>
                <div className='lg:w-11/12 mx-auto flex flex-col items-center'>
                    <div className='mb-10'>
                        <h3 className='text-primary font-extrabold text-4xl'>Frequently Asked Questions</h3>
                    </div>
                    {/* Collapse */}
                    <div className="collapse w-3/5 mx-auto text-base-100 mb-4 rounded-box bg-neutral collapse-arrow">
                        <input type="checkbox" /> 
                        <div className="collapse-title font-bold">
                           Apa itu E-Learning?
                        </div> 
                        <div className="collapse-content text-base-300"> 
                            <p>Sistem pembelajaran elektronik atau e-pembelajaran dapat didefinisikan sebagai sebuah bentuk teknologi informasi yang diterapkan di bidang pendidikan berupa situs web yang dapat diakses di mana saja
                            </p>
                        </div>
                    </div>
                    <div className="collapse w-3/5 mx-auto text-base-100  rounded-box bg-neutral collapse-arrow">
                        <input type="checkbox" /> 
                        <div className="collapse-title font-bold">
                           Apakah
                        </div> 
                        <div className="collapse-content text-base-300"> 
                            <p>Sistem pembelajaran elektronik atau e-pembelajaran dapat didefinisikan sebagai sebuah bentuk teknologi informasi yang diterapkan di bidang pendidikan berupa situs web yang dapat diakses di mana saja
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Of FAQ Container */}
            {/* Footer */}
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