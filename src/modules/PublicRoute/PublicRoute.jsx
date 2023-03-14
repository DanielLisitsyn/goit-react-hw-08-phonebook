import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import { getAuth } from 'redux/auth/auth-selectors';

const PublicRoute = () => {
  const { isLogin } = useSelector(getAuth);
  if (isLogin) {
    return <Navigate to="/contacts" />;
  }
  return <Outlet />;
};
export default PublicRoute;
