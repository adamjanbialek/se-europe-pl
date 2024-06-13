import { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { AuthContext } from '../../App';

export const PrivateRoute = () => {
    const { user } = useContext(AuthContext);
    console.log(`status: ${user.isAuthenticated}`);
    return user.isAuthenticated ? <Outlet/> : <Navigate to="/" />;
};
