import React from 'react'
import signupImg from "../assets/signup.png"
import Template from '../components/Template'

const Signup = ({setIsLoggedin}) => {
  return (
    <Template
      title="Join thee millions learning to code with StudyNotion for free"
      desc1="Build skills for today, tomorrow and beyond"
      desc2="Education to future-proof your career."
      image={signupImg}
      formtype="signup"
      setIsLoggedin={setIsLoggedin}
    />
  )
}

export default Signup
