/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const MyClass = props => {
    const globalStateUser = useSelector(state => state.user);

    return (
        <div>
            <h1>My Class Page</h1>
            <h2>hello {globalStateUser && globalStateUser.data.email}</h2>
        </div>
    )
}

MyClass.propTypes = {

}

export default MyClass;
