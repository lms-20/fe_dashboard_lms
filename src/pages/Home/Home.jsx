/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import PropTypes from 'prop-types';

const Home = props => {
    return (
        <div>
            <h1>HOME</h1>
            <div className="p-10 card bg-base-200">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Username</span>
                    </label>
                    <input type="text" placeholder="username" className="input" />
                </div>
            </div>
            <div className="p-10 card bg-base-200">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Username</span>
                    </label>
                    <input type="text" placeholder="username" className="input" />
                </div>
            </div>
            <div className="p-10 card bg-base-200">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Username</span>
                    </label>
                    <input type="text" placeholder="username" className="input" />
                </div>
            </div>

        </div>
    )
}

Home.propTypes = {

}

export default Home;
