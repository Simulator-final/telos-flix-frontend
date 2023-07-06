import { useNavigate, useParams,Outlet } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import VideoPlayer from '../videoPlayer';

const ProtectedRoutes = ({children}) => {
  const { isLoggedIn } = useContext(AuthContext);
  return isLoggedIn ? children : <Navigate to='/' exact />
};

export default ProtectedRoutes;
