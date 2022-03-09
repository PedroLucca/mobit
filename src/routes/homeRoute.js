import { Navigate } from 'react-router-dom';

const HomeRoute = () => {
    return <Navigate to={{ pathname: "/login" }} />;
};

export default HomeRoute;
