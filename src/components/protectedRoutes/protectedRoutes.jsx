import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const ProtectedRoutes = () => {
  const { id } = useParams();
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      alert('Acesso negado!');
      navigate(`/video/${id}`);
    }
  }, [isLoggedIn]);

  return <Outlet />;
};

export default ProtectedRoutes;
