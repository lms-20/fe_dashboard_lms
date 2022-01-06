/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React,{useEffect, useState} from 'react'
import axios from 'axios';
import propTypes from 'prop-types';
import {Link} from 'react-router-dom'
const UserSettings = () => {
    const apiUrl = "https://61d3c74ab4c10c001712ba8e.mockapi.io/users"
    const [isFormDisabled,setIsFormDisabled] = useState(true);
    const [userResponse,setUserResponse] = useState({});
    const [userEdited,setUserEdited] =useState({});
    const [isLoading,setIsLoading] = useState(false);
    const [isError,setIsError] = useState(false)
    const retrieveUser = async () => {
        const response = await axios.get(apiUrl);
        return response.data
    }

    useEffect(() => {
        const getUser = async () => {
            try {
                setIsLoading(true)
                const userData = await retrieveUser();
                if (userData) {
                    setIsLoading(false);
                    setUserResponse(userData[0])
                    setUserEdited(userData[0])
                }
            } catch {
                setIsLoading(false)
                setIsError(true)
            }
        }
       getUser()
    },[])

    return(
        
        <div className='mt-8 flex flex-col  w-11/12 mx-auto'>

                {isLoading === true ? "Loading bro" : isError === true ? "Error bro" : 
                     // User Information Container 
                    <div className=' w-full mx-0 lg:w-3/5 lg:mx-auto bg-neutral rounded-md p-4'>
                         {/*Content Container  */}
                        <div className='rounded-lg border-2 border-primary p-4'>
                            {/* Card Container */}
                            <div className='flex rounded-lg transition-all w-full hover:shadow-md hover:shadow-primary hover:-translate-y-1 '>
                                {/* Profile Image */}
                                <div className='hidden lg:flex justify-center'>
                                    <div className="avatar ">
                                        <div className="rounded-lg w-40 h-40">
                                            <img src= {userEdited.avatar} />
                                        </div>
                                    </div>
                                </div>
                                {/* Info */}
                                <div className='flex grow flex-col px-4 basis-2/4'>
                                    <div className=' basis-6/12 grow flex flex-col items-center justify-center'>
                                        <p className='font-bold text-2xl'>{userEdited.name}</p>
                                        <p className=''>{userEdited.occupation}</p>
                                    </div>
                                    <div className='w-full mb-5'>
                                        <Link to = "" className='btn btn-hover-primary w-full self-end bg-transparent border-primary'>Change Password</Link>
                                    </div>
                                </div>
                            </div>
                            {/* End Of Card Container */}
                            
                            {/* Form Container */}
                            <form>
                                <div className="form-control text-base-100 my-4">
                                    <label className="label">
                                        <span className="label-text text-inherit font-bold">Name</span>
                                    </label> 
                                    <input disabled = {isFormDisabled} type="text" value = {userEdited.name} placeholder="Fullname"  className="input transition-all focus:outline-primary text-neutral-content text-lg placeholder:text-base-300 disabled:text-base-100 disabled:bg-primary-focus disabled:border-none" />
                                </div>
                                <div className="form-control text-base-100 my-4">
                                    <label className="label">
                                        <span className="label-text text-inherit font-bold">Email</span>
                                    </label> 
                                    <input  disabled = {isFormDisabled} type="email" value = {userEdited.email} placeholder="Email" className="input transition-all focus:outline-primary text-neutral-content text-lg placeholder:text-base-300 disabled:text-base-100 disabled:bg-primary-focus disabled:border-none" />
                                </div>
                                <div className="form-control text-base-100 my-4">
                                    <label className="label">
                                        <span className="label-text text-inherit font-bold">Age</span>
                                    </label> 
                                    <input  disabled = {isFormDisabled} type="number" value = {userEdited.age} placeholder="Email"  className="input transition-all focus:outline-primary text-neutral-content text-lg placeholder:text-base-300 disabled:text-base-100 disabled:bg-primary-focus disabled:border-none" />
                                </div>
                                <div className="form-control text-base-100 my-4">
                                    <label className="label">
                                        <span className="label-text text-inherit font-bold">Phone</span>
                                    </label> 
                                    <input  disabled = {isFormDisabled} type="phone" value = {userEdited.phone} placeholder="Email"  className="input transition-all focus:outline-primary text-neutral-content text-lg placeholder:text-base-300 disabled:text-base-100 disabled:bg-primary-focus disabled:border-none" />
                                </div>
                                <div className='mt-8 flex justify-end'>
                                    <div className={`${isFormDisabled === true ? "hidden":""} btn hover:bg-warning mx-4 border-warning`} onClick={() => setIsFormDisabled((current) => !current)}>Cancel</div>
                                    <div className='btn btn-hover-primary bg-transparent border-primary' onClick={() => setIsFormDisabled((current) => !current)}>{`${isFormDisabled === true ? "Edit Data" : "Save Changes"}`}</div>
                                </div>

                            </form>
                            {/* End of form container */}
                        </div>
                        {/*End Of Content Container */}
                    </div>  
                    // End of user information container
                        
                }
        </div>
    )
}

UserSettings.propTypes = {

}

export default UserSettings