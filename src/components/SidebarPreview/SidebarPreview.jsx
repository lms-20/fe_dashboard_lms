/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */

import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight, faShoppingCart, faSchool } from '@fortawesome/free-solid-svg-icons';
import CollapsedContentPreview from '../CollapsedContentPreview/CollapsedContentPreview';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';

const SidebarPreview = (props) => {
    const params = useParams();
    const { courseId } = props;
    const token = useSelector(state => state.userData.user?.data.token);
    const [userCourses, setuserCourses] = useState([]);//this will be used to store, which courses user have
    const pivotApi = `http://rizkysr90.space:3030/mycourses`;
    const navitage = useNavigate();

    useEffect(() => {
        axios.get(pivotApi, { headers: { "Authorization": `Bearer ${token}` } })
            .then(response => {
                response?.data.data.forEach(dataCourses => {
                    setuserCourses(
                        prevstate => [...prevstate, dataCourses.course_id]
                    )
                })
            })
            .catch(error => {
                console.log(error)
            })
    }, []);

    const have = userCourses.includes(parseInt(courseId))

    const handleBuy = () => {
        const data = { course_id: parseInt(params.course_id) }
        axios.post(pivotApi, data, { headers: { "Authorization": `Bearer ${token}` } })
            .then(response => {
                if (response.data?.data.snap_url) {
                    window.open(response.data?.data.snap_url, '_blank')
                } else {
                    navitage(`/mycourses/${params.course_id}`)
                }
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <>
            <div className='bg-neutral flex-col rounded-lg p-4 '>
                {/* Header */}
                <div className='flex hidden lg:flex items-center bg-primary p-2 rounded-lg grayscale opacity-70 hover:grayscale-0 transition-all hover:opacity-100 '>
                    <FontAwesomeIcon icon={faAngleDoubleRight} className='text-4xl text-neutral-content mr-2 ' />
                    <p className='text-neutral-content font-bold text-xl w-full text-center -ml-4'>Course Content</p>
                </div>
                <CollapsedContentPreview
                    data={props?.data}
                />
                {/* Button */}
                {/* If Course Was Enrolled */}
                {
                    token && have ?
                        <Link to={`/mycourses/${courseId}`} >
                            <div className=' btn w-full bg-primary hover:bg-primary text-neutral my-2 text-lg rounded-lg font-bold grayscale opacity-70 hover:grayscale-0 transition-all hover:opacity-100'>
                                <FontAwesomeIcon icon={faSchool} className='mr-2 text-neutral' />
                                <p>Go to class</p>
                            </div>
                        </Link>
                        :
                        <button onClick={handleBuy} className=' btn w-full bg-primary hover:bg-primary text-neutral my-2 text-lg rounded-lg font-bold grayscale opacity-70 hover:grayscale-0 transition-all hover:opacity-100'>
                            <FontAwesomeIcon icon={faShoppingCart} className='mr-2 text-neutral' />
                            <p>Buy course</p>
                        </button>
                }

            </div>

        </>
    )
}

export default SidebarPreview
SidebarPreview.propTypes = {
    data: PropTypes.array
}
