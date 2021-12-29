/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import PropTypes from 'prop-types';

const Form = props => {
    return (
        <div>
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

Form.propTypes = {

}

export default Form;
