import React from 'react'
import {Navigate, useLocation} from "react-router-dom"

const ProtectedRoute = ({children}) => {
    let st = true;
    let location = useLocation();

    if(!st) {
        return <Navigate to="/admin/login" state={{ from: location}} replace />
    }
 return children

};

export default ProtectedRoute;