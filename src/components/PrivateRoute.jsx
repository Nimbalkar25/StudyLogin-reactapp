import React from 'react'
import { Navigate } from 'react-router-dom';


const PrivateRoute = ({isLoggedin , children}) => {
if(isLoggedin){
    return children;
}else{
   return <Navigate to="/login" />  // Here we cannot use navigate() it is used in fuction Important
}
}

export default PrivateRoute
