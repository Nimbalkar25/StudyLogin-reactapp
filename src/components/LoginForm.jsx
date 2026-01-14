import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { LuEye, LuEyeOff } from "react-icons/lu";
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = ({setIsLoggedin}) => {
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    function changeHandler(event) {

        setFormData((prevData) => {
            return {
                ...prevData,
                [event.target.name]: event.target.value,
            }
        })
    }

    function submitHandler(event){
        event.preventDefault();
        setIsLoggedin(true);
        toast.success("Logged in Successfully");
        navigate("/dashboard")

    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <label className='flex flex-col gap-1'>
                    <p className='text-gray-200'>Email address<sup className='text-red-500'>*</sup></p>

                    <input
                        required
                        type='email'
                        name='email'
                        value={formData.email}
                        onChange={changeHandler}
                        placeholder='Enter email address'
                        className='bg-gray-900 p-2 rounded-[0.4rem] text-gray-100  shadow-[inset_0_-1px_0px_0_gray] w-93 outline-0'
                    />

                </label>

                <label className='flex flex-col gap-1 mt-3 '>
                    <p className='text-gray-100'>Password <sup className='text-red-500'>*</sup></p>
                    
                       <div className='relative'>
                         <input
                            required
                            name='password'
                            type={show ? ('text') : ('password')}
                            value={formData.password}
                            onChange={changeHandler}
                            placeholder='Enter Password'
                            className='bg-gray-900 p-2 rounded-[0.4rem] text-gray-100  shadow-[inset_0_-1px_0px_0_gray] w-93 outline-0 '

                        />
                        <span className='text-gray-200 text-[1.2rem] absolute right-3 top-2' onClick={() => setShow(!show)}>{show ? <LuEye /> : <LuEyeOff />}</span>

                        <Link to="3" className='text-cyan-600 text-[0.8rem] absolute right-0 top-10'>
                        Forget Passowrd
                        </Link>
                       </div>

                </label>

                <div className='flex justify-center mt-9 w-93'>
                    <button className='bg-yellow-300 w-full px-1 py-1.5 rounded-md cursor-pointer'>Sign In</button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm
