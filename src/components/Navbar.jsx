import React from 'react'
import logo from "../assets/Logo.svg"
import { Link } from "react-router-dom"
import {toast} from "react-hot-toast"
import "./Navbar.css"


const Navbar = (props) => {
    const isLoggedin = props.isLoggedin;
    const setIsloggedin = props.setIsloggedin;
    
    

    return (
        <div className='flex justify-evenly my-5 text-white items-center w-11/12 max-w[1160px] py-4 mx-auto '>
            <Link to="/">
                <img src={logo} alt="Logo" width={160} height={32} loading='lazy' />
            </Link>

            <nav>
                <ul className='flex gap-5'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">About</Link>
                    </li>
                    <li>
                        <Link to="/">Contact</Link>
                    </li>
                </ul>
            </nav>


            {/* Login - SignUp - Dashboard - Logout  */}

            <div className='flex gap-4  '> 
                { !isLoggedin &&
                    <Link to="/login">
                    <button className='btn'>
                        Login
                    </button>
                    </Link>
                }
                { !isLoggedin &&
                    <Link to="/signup">
                    <button className='btn'>
                        Sign Up
                    </button>
                    </Link>
                }
                { isLoggedin &&
                    <Link to="/">
                    <button className='btn' onClick={() => {
                        setIsloggedin(false);
                        toast.success("Logged Out");
                    }}>
                        LogOut
                    </button>
                    </Link>
                }
                { isLoggedin &&
                    <Link to="/dashboard">
                    <button className='btn'>
                        Dashboard
                    </button>
                    </Link>
                }
            </div>
        </div>
    )
}

export default Navbar
