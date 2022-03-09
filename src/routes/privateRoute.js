import { Navigate, Outlet } from 'react-router-dom';

import { isAuthenticated } from "../services/auth";

const PrivateRoute = () => {
    return isAuthenticated() ? <Outlet /> :  <Navigate to={{ pathname: "/login" }} />;
};

export default PrivateRoute;
