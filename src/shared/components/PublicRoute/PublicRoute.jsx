import { Navigate, Outlet } from "react-router-dom";

import useAuth from "../../hooks/useAuth";

const PublicRoute = () => {
    const isLogin = useAuth();
     

    if (isLogin) {
        return <Navigate to="/test" />
    }

    return <Outlet />
}

export default PublicRoute;