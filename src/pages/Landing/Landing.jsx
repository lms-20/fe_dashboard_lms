/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import heroImg from "../../assets/undraw_online_learning.svg";
import { faListUl, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../../components/Navbar/Navbar';
import CategoriesCard from '../../components/CategoriesCard/CategoriesCard';
import CardCourseFull from '../../components/CardCourseFull/CardCourseFull';
import Footer from '../../components/Footer/Footer';
import axios from 'axios';
import CardCategory from '../../components/CardCategory/CardCategory';
import FetchLandingCourses from '../../components/FetchLandingCourses/FetchLandingCourses';


const Landing = () => {
    const ApiSections = `http://rizkysr90.space:3030/categories`;
    // const domain = 'http://5b28-140-213-168-132.ngrok.io'
    // const ApiSections = `${domain}/categories`;
    // const ApiSections = 'http://d58c-140-213-161-53.ngrok.io/categories';
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
        <>
            {/* Hero */}
            <div className="hero bg-neutral-content">
                <div className="flex-col hero-content lg:flex-row-reverse justify-end text-neutral-content pt-10">
                    <img src={heroImg} className=" hidden lg:block flex-grow  basis-2/4" />
                    <div className='basis-2/4 flex-col lg:block items-center text-center lg:text-left'>
                        <h1 className="mb-5  text-5xl lg:text-6xl text-primary font-extrabold">
                            Learning Without Limits
                        </h1>
                        <p className="mb-5 text-base-100">
                            Skills for your present (and your future).Get started with us.
                        </p>
                        <Link to="/register" className="btn bg-transparent w-full lg:w-2/5 text-base-100 border-primary btn-hover-primary rounded-full">Register</Link>
                    </div>
                </div>
            </div>
            {/* End Of Hero */}
            {/* Our Value */}
            <div className='bg-neutral-content py-10'>
                <div className='w-11/12 mx-auto py-4 flex flex-col lg:flex-row lg:justify-between '>
                    <div className='grow-0 basis-1/4 py-4 lg:py-0  lg:py-0 lg:pr-4 flex flex-col'>
                        <div className=' flex flex-row items-center lg:flex-col lg:items-start text-base-100'>
                            <FontAwesomeIcon icon={faThumbsUp} className='text-4xl bg-primary p-2 rounded-full lg:mb-2 text-neutral-content' />
                            <h3 className='font-bold text-base-100 pl-4 lg:pl-0'>100% Online Clasess</h3>
                        </div>
                        <p className='text-base-300 mt-2'>Learn anytime and anywhere you like with online class.</p>
                    </div>
                    <div className='grow-0 py-4 lg:py-0  basis-1/4 pr-4 '>
                        <div className=' flex flex-row items-center lg:flex-col lg:items-start text-base-100'>
                            <FontAwesomeIcon icon={faThumbsUp} className='text-4xl bg-primary p-2 rounded-full lg:mb-2 text-neutral-content' />
                            <h3 className='font-bold text-base-100 pl-4 lg:pl-0'>Expert Mentor</h3>
                        </div>
                        <p className='text-base-300 mt-2'>Learn from professional for build your skillsets</p>
                    </div>
                    <div className='grow-0 py-4 lg:py-0  basis-1/4 pr-4 '>
                        <div className=' flex flex-row items-center lg:flex-col lg:items-start text-base-100'>
                            <FontAwesomeIcon icon={faThumbsUp} className='text-4xl bg-primary p-2 rounded-full lg:mb-2 text-neutral-content' />
                            <h3 className='font-bold text-base-100 pl-4 lg:pl-0'>Lifetime Access</h3>
                        </div>
                        <p className='text-base-300 mt-2'>Just with single payment and you get permanent access.</p>
                    </div>
                    <div className='grow-0 py-4 lg:py-0  basis-1/4 pr-4 '>
                        <div className=' flex flex-row items-center lg:flex-col lg:items-start text-base-100'>
                            <FontAwesomeIcon icon={faThumbsUp} className='text-4xl bg-primary p-2 rounded-full lg:mb-2 text-neutral-content' />
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
                <div className='w-11/12 mx-auto'>
                    <div className=''>
                        <div className='inline-block rounded-full py-3 px-6 bg-primary'>
                            <FontAwesomeIcon icon={faListUl} className=' align-middle text-neutral-content text-xl inline-block'></FontAwesomeIcon>
                            <p className='text-xl inline-block ml-2 align-middle font-bold'>Categories</p>
                        </div>

                    </div>
                </div>
                {/* End Break */}
                {/* Cateogires Items */}
                <div className='flex flex-col-reverse lg:flex-row w-11/12 mx-auto mt-8'>
                    {/* Categories Items */}
                    <div className='lg:hidden'>
                        <Link to="/allcategories" className="btn w-full bg-transparent text-base-100 border-primary btn-hover-primary rounded-full">See All Categories</Link>
                    </div>
                    <div className=' flex flex-wrap basis-2/5'>
                        {
                            categories.slice(0, 4).map((elm, idx) => {
                                return <CardCategory key={idx} id={elm.id} name={elm.name} courses={elm.courses} />
                            })
                        }
                    </div>

                    {/* End OF Categories Items */}
                    <div className=' basis-2/4 mb-10 lg:mb-0 lg:ml-10 flex flex-col  justify-center flex-grow'>
                        <h3 className='font-extrabold text-5xl text-primary'>Feel Free <span className='mt-3 text-base-100 block'>To Explore More</span></h3>
                        <p className='text-base-300 my-10 hidden lg:block'>Emang bisa ketagihan belajar? Di E-Learning, belajar itu berarti menelusuri hal baru, sambil memecahkan teka-teki ilmu tiap harinya. Ini yang bikin penasaran dan lama-lama jadi ketagihan belajar. </p>
                        <Link to="/allcategories" className=" hidden lg:flex btn w-2/5 bg-transparent text-base-100 border-primary btn-hover-primary rounded-full">See All Categories</Link>

                    </div>
                </div>
            </div>
            {/* End OF Categories  */}
            {/* Top Courses Container */}
            <div className='bg-neutral-content py-4 lg:py-10'>
                <div className=' w-11/12 mx-auto'>
                    <div className=''>
                        <div className='inline-block rounded-full py-3 px-6 bg-primary'>
                            <FontAwesomeIcon icon={faListUl} className=' align-middle text-neutral-content text-xl inline-block'></FontAwesomeIcon>
                            <p className='text-xl inline-block ml-2 align-middle font-bold'>Courses</p>
                        </div>
                    </div>
                    {/* Card */}
                    <FetchLandingCourses />
                    {/* End Of Cart */}
                    <div className='flex justify-center mt-8 '>
                        <Link to="/allcourses" className='bg-transparent w-full lg:w-2/5 rounded-full text-base-100 btn btn-hover-primary border-2 border-primary'>See All Courses</Link>
                    </div>
                </div>
            </div>
            {/* End Of Top Course Container */}
            {/* FAQ Container */}
            <div className='bg-neutral-content py-10'>
                <div className='w-11/12 mx-auto flex flex-col items-center'>
                    <div className='mb-10'>
                        <h3 className='text-primary font-extrabold text-5xl text-center'>Frequently Asked Questions</h3>
                    </div>
                    {/* Collapse */}
                    <div className="collapse w-full lg:w-3/5 mx-auto text-base-100 mb-4 rounded-box bg-neutral collapse-arrow">
                        <input type="checkbox" />
                        <div className="collapse-title font-bold">
                            Apa itu E-Learning?
                        </div>
                        <div className="collapse-content text-base-300">
                            <p>Sistem pembelajaran elektronik atau e-pembelajaran dapat didefinisikan sebagai sebuah bentuk teknologi informasi yang diterapkan di bidang pendidikan berupa situs web yang dapat diakses di mana saja
                            </p>
                        </div>
                    </div>
                    <div className="collapse w-full lg:w-3/5 mx-auto text-base-100 mb-4 rounded-box bg-neutral collapse-arrow">
                        <input type="checkbox" />
                        <div className="collapse-title font-bold">
                            Apakah Semua Kursusnya Itu Gratis ?
                        </div>
                        <div className="collapse-content text-base-300">
                            <p> E-Learning tersedia materi yang gratis ataupun yang berbayar
                            </p>
                        </div>
                    </div>
                    <div className="collapse w-full lg:w-3/5 mx-auto text-base-100 mb-4 rounded-box bg-neutral collapse-arrow">
                        <input type="checkbox" />
                        <div className="collapse-title font-bold">
                            Bagaimana Cara Mengkuti Kursus?
                        </div>
                        <div className="collapse-content text-base-300">
                            <p> Cukup dengan membayar 1x seumur hidup untuk kelas premium,dan cukup dengan join kelas untuk kelas gratis
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Of FAQ Container */}
            {/* Footer */}
            <Footer />
        </>

    )
}

Landing.propTypes = {

}

export default Landing