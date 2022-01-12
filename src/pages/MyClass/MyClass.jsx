/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/userSlice';

const MyClass = props => {
    const globalStateUser = useSelector(state => state.userData?.user);

    return (
        <div>
            <h1>My Class Page</h1>
            <p>branch admin add new course</p>
            <h2>hello {globalStateUser && globalStateUser?.data.email}</h2>
        </div>
    )
}

MyClass.propTypes = {

}

export default MyClass;
