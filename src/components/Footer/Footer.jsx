/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react'

const Footer = () => {
    return(
        <div className='bg-neutral'>
            <footer className="footer  text-base-100 w-11/12 mx-auto py-8">
                <div>
                    <span className="footer-title">Services</span> 
                    <a className="link link-hover">Branding</a> 
                    <a className="link link-hover">Design</a> 
                    <a className="link link-hover">Marketing</a> 
                    <a className="link link-hover">Advertisement</a>
                </div> 
                <div>
                    <span className="footer-title">Company</span> 
                    <a className="link link-hover">About us</a> 
                    <a className="link link-hover">Contact</a> 
                    <a className="link link-hover">Jobs</a> 
                    <a className="link link-hover">Press kit</a>
                </div> 
                <div>
                    <span className="footer-title">Contact Support</span> 
                    <a className="link link-hover">elearning@company.com</a> 
                    <a className="link link-hover">Privacy policy</a> 
                    <a className="link link-hover">Cookie policy</a>
                </div> 
                <div>
                    <span className="footer-title">Newsletter</span> 
                    <div className="form-control w-80">
                    <label className="label">
                        <span className="label-text text-base-100">Enter your email address</span>
                    </label> 
                    <div className="relative">
                        <input type="text" placeholder="username@site.com" className="w-full pr-16 input input-bordered text-neutral-content" /> 
                        <button className="absolute top-0 right-0 rounded-l-none btn btn-primary text-neutral-content">Subscribe</button>
                    </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer