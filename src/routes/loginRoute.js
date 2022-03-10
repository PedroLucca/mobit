import { Navigate, Outlet } from 'react-router-dom';

import { isAuthenticated } from "../services/auth";

const LoginRoute = () => {
    return isAuthenticated() ? <Navigate to={{ pathname: "/listar" }}/> :  <Outlet />;
};

export default LoginRoute;
