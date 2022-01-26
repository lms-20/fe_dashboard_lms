/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, {useRef} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


const PricingPlans = (props) => {
    const pricingRef = useRef()
    return(
        <>
            <h3 className='text-primary font-extrabold text-3xl mb-4'>Let&apos;s Join The Class</h3>
            <div className='border-2 border-primary flex p-8 rounded-lg'>
                    <div className=' flex flex-col items-center rounded-lg  p-4 border-2 grow lg:grow-0 lg:border-primary basis-2/4'>
                        <div className="text-center">
                            <p className='text-3xl font-extrabold text-primary mb-2'>Selamanya</p>
                            <p className='font-bold text-4xl mb-8'>Rp{new Intl.NumberFormat(['ban', 'id']).format(props.data)}</p>
                            <p className='text-center mb-4'>Miliki kelas Premium secara permanen dan bangun sebuah projek nyata</p>
                        </div>
                        
                        <div className="divider bg-base-100 w-full h-0 before:bg-base-100 after:bg-base-100"></div> 
                        <div className="">
                            <div className='flex items-center my-4'>
                                <FontAwesomeIcon icon={faCheckCircle} className='text-2xl text-primary mr-3'/>
                                <p className="">Akses Kelas Selamanya</p>
                            </div>
                            <div className='flex items-center my-4'>
                                <FontAwesomeIcon icon={faCheckCircle} className='text-2xl text-primary mr-3'/>
                                <p className="">Assets  &#38; group konsultasi</p>
                            </div>
                            <div className='flex items-center my-4'>
                                <FontAwesomeIcon icon={faCheckCircle} className='text-2xl text-primary mr-3'/>
                                <p className="">Tools pendukung belajar</p>
                            </div>
                            <div className='flex items-center my-4'>
                                <FontAwesomeIcon icon={faCheckCircle} className='text-2xl text-primary mr-3'/>
                                <p className="">Sertifikat kelulusan</p>
                            </div>
                            <div className='flex items-center my-4'>
                                <FontAwesomeIcon icon={faCheckCircle} className='text-2xl text-primary mr-3'/>
                                <p className="">Free update materi</p>
                            </div>
                            <div className='flex items-center my-4'>
                                <FontAwesomeIcon icon={faCheckCircle} className='text-2xl text-primary mr-3'/>
                                <p className="">Lowongan pekerjaan</p>
                            </div>
                        </div>
                        <Link to = "" className='p-4 btn btn-border-primary bg-transparent border-2 border-primary btn-hover-primary text-base-100 btn bg-neutral w-full mt-4 '>Learn Like A Pro</Link>
                    </div>
            </div>
        
        </>
    )
}

export default PricingPlans
PricingPlans.propTypes = {
    data : PropTypes.number
}
