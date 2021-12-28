/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import PropTypes from 'prop-types';
import NavBar from '../../components/NavBar/NavBar';
import PermanentDrawer from '../../components/PermanentDrawer/PermanentDrawer';
import Styles from './Layout.module.css'

const Layout = props => {
    const { container } = Styles;

    return (
        <div className={container}>
            <NavBar />
            <PermanentDrawer />
        </div>
    )
}

Layout.propTypes = {

}

export default Layout
