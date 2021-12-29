/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import PropTypes from 'prop-types';
import NavBar from '../../components/NavBar/NavBar';
import PermanentDrawer from '../../components/PermanentDrawer/PermanentDrawer';
import styles from './Layout.module.css'

const Layout = props => {
  

    return (
        <div>
            <PermanentDrawer/>
            {/* <div>
                <NavBar/>
            </div> */}
        </div>
    )
}

Layout.propTypes = {

}

export default Layout
