import React from 'react'
import SignupForm from '../components/SignupForm'
import LoginForm from '../components/LoginForm'
import frameImage from "../assets/frame.png"
import google from "../assets/google.png"

const Template = ({title,image,desc1,desc2,formtype,setIsLoggedin}) => {
  return (
    <div className='flex  justify-between max-w-290  w-[63%] mx-auto  gap-8 p-2.5 '>

        <div className='flex flex-col gap-2.5 w-[40%] justify-center'>
            <h1 className='text-2xl text-gray-200 font-bold'>
                {title}
            </h1>

            <p className='flex flex-col  '>
                <span className='text-gray-500 font-semibold'>{desc1}</span>
                <span className='text-cyan-600 italic'>{desc2}</span>
            </p>

                {formtype === "signup" ?
            (<SignupForm setIsLoggedin={setIsLoggedin}/>) :
            (<LoginForm setIsLoggedin={setIsLoggedin}/>)
            }




            <div className='flex w-full items-center text-gray-800 my-2 gap-x-2'>
                <div className='h-px w-full bg-gray-800'></div>
                <div className=' ' >OR</div>
                <div className='h-px w-full bg-gray-800'></div>
            </div>

            <button className='border border-gray-800 flex justify-center items-center gap-2 py-1.5 rounded-md cursor-pointer'><img src={google} alt='' className='w-4 h-4'></img><p className='text-gray-400'>Sign in with Google</p></button>
        </div>

        <div className='relative'>
            <img
            src={frameImage}
            alt='Pattern'
            width={558}
            height={504}
            loading='lazy'
            className='rounded-sm w-88 h-80'
            
            />

            <img
            src={image}
            alt='Student Image'
            width={558}
            height={490}
            loading='lazy'
            className='absolute -top-3 right-3 rounded-sm w-88 h-80'
            />
        </div>
        
    </div>
  )
}

export default Template
