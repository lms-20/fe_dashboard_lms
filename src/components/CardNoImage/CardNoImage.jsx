/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { setLinkVideo } from '../../store/courseSlice';

const CardNoImage = (props) => {
    const { dataLessons } = props;
    const dispatch = useDispatch();

    return (
        <div className="p-2 card-bordered rounded-lg mt-4 grayscale opacity-70 hover:grayscale-0 transition-all hover:opacity-100">
            <div className="form-control">
                <div className="cursor-pointer p-2 flex items-center justify-start">
                    <FontAwesomeIcon icon={faPlayCircle} className='text-xl mr-4'></FontAwesomeIcon>
                    {/* To Do,Onclick function on this span element,so if the element is clicked it will go to video url */}
                    <span onClick={() => {
                        dispatch(setLinkVideo(dataLessons.video))
                        // console.log()
                    }} className="label-text text-primary font-medium">{dataLessons.name}</span>
                    <input type="checkbox" className="checkbox border-primary ml-auto" />
                </div>
            </div>
        </div>
    )
}

export default CardNoImage
CardNoImage.propTypes = {
    IsQuizTime: PropTypes.func
};