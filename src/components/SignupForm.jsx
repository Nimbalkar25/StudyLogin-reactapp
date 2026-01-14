import React, { useState } from 'react'
import { LuEye, LuEyeOff } from "react-icons/lu";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const SignupForm = ({ setIsLoggedin }) => {
  const navigate = useNavigate();
  const [role, setRole] = useState("Student");
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", createPassword: "", confirmPassword: ""
  })


  function changeHandler(event) {
    setFormData(
      (prevState) => {
        return {
          ...prevState,
          [event.target.name]: event.target.value,
        }
      }
    )
  }

  function submitHandler(event) {
    event.preventDefault();
    if (formData.createPassword != formData.confirmPassword) {
      toast.error("Password does not match!");
      return;
    }
    setIsLoggedin(true);
    const finalData = {
      ...formData,
      role
    }
    toast.success("Account Created successfully");
    navigate("/dashboard")
    console.log(finalData)
  }


  return (
    <div className='flex flex-col mt-3 justify-start w-full'>
      <div className='flex  rounded-3xl bg-gray-900 shadow-[inset_0_-1px_0px_0_gray] w-[50%] py-1 px-2 text-md font-semibold  justify-between items-center'>
        <span onClick={() => { setRole("Student") }} className={`px-3 py-1.5 text-black  ${role === "Student" ? "bg-black text-gray-200 rounded-3xl " : "bg-transparent text-gray-500"}`}>Student</span>
        <span onClick={() => setRole("Instructor")} className={`px-3 py-1.5 text-black ${role === "Instructor" ? "bg-black text-gray-200 rounded-3xl  " : "bg-transparent text-gray-500"}`} >Instructor</span>
      </div>

      <div>
        <form onSubmit={submitHandler}>

          {/* First Name and Last Name  */}
          <div className='w-full flex justify-start gap-2.5'>
            <label className='flex flex-col gap-1 mt-3 w-[46.5%] '>
              <p className='text-gray-100'>First Name <sup className='text-red-500'>*</sup></p>
              <input
                required
                type='text'
                name='firstName'
                placeholder='Enter first Name'
                value={formData.firstName}
                onChange={changeHandler}
                className='bg-gray-900 p-2 rounded-[0.4rem] text-gray-100  shadow-[inset_0_-1px_0px_0_gray] outline-0 ml-0.5'

              />
            </label>

            <label className='flex flex-col gap-1 mt-3 w-[46.5%] '>
              <p className='text-gray-100'>Last Name <sup className='text-red-500'>*</sup></p>
              <input
                required
                type='text'
                name='lastName'
                placeholder='Enter last Name'
                value={formData.lastName}
                onChange={changeHandler}
                className='bg-gray-900 p-2 rounded-[0.4rem] text-gray-100  shadow-[inset_0_-1px_0px_0_gray]  outline-0 ml-0.5'

              />
            </label>
          </div>

          {/* Email address  */}
          <div>
            <label className='flex flex-col gap-1 mt-3'>
              <p className='text-gray-100'>Email Address <sup className='text-red-500'>*</sup></p>

              <input
                required
                type='email'
                name='email'
                placeholder='Enter email address'
                value={formData.email}
                className='bg-gray-900 p-2 rounded-[0.4rem] text-gray-100  shadow-[inset_0_-1px_0px_0_gray]  outline-0 ml-0.5'
                onChange={changeHandler}
              />
            </label>
          </div>


          {/* Create and Confirm Password  */}
          <div className='w-full flex justify-start gap-2.5'>
            <label className='flex flex-col gap-1 mt-3 w-[48.5%]'>
              <p className='text-gray-100'>Create Password <sup className='text-red-500'>*</sup></p>
              
              <div className='relative'>
                <input
                required
                placeholder='Enter password'
                type={show1 ? ('text') : ('password')}
                name='createPassword'
                value={formData.createPasword}
                onChange={changeHandler}
                className='bg-gray-900 p-2 rounded-[0.4rem] text-gray-100  shadow-[inset_0_-1px_0px_0_gray]  outline-0 ml-0.5'

              />
              <button  className='absolute right-4 top-2.5 text-white' onClick={() => setShow1(!show1)}>{show1 ? <LuEye /> : <LuEyeOff />}</button>
              </div>
            </label>

            <label className='flex flex-col gap-1 mt-3 w-[48.5%]'>
              <p className='text-gray-100'>Confirm Password <sup className='text-red-500'>*</sup></p>
              <div className='relative'>
                <input
                required
                placeholder='Confirm password'
                type={show2 ? ('text') : ('password')}
                name='confirmPassword'
                value={formData.confirmPassword}
                onChange={changeHandler}
                className='bg-gray-900 p-2 rounded-[0.4rem] text-gray-100  shadow-[inset_0_-1px_0px_0_gray]  outline-0 ml-0.5'

              />
              <span className='absolute right-4 top-2.5 text-white' onClick={() => setShow2(!show2)}>{show2 ? <LuEye /> : <LuEyeOff />}</span>
              </div>
            </label>
          </div>

          <div className='flex justify-center mt-10 w-full'>
            <button className='bg-yellow-300 w-full px-1 py-1.5 rounded-md cursor-pointer'>Create Account</button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default SignupForm
