
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { SyncLoader } from 'react-spinners';
import { AuthContext } from '../context/AuthProvider';

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <SyncLoader color="#36d7b7" />
        // return <p className=''>Loading...</p>
    } 
    //if user is not there navigate to home
    if(!user){
        return <Navigate to='/login' state={{from: location}} replace></Navigate>
    }
    return children;// returns it to the children if it is logged in
};


export default PrivateRoute;