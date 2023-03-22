import { useSelector } from 'react-redux';
import { getAuth } from 'redux/auth/auth-selectors';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoute = () => {
  const auth = useSelector(getAuth);
  const { isLogin, token } = auth;
  console.log(isLogin);
  if (!isLogin && !token) {
    return <Navigate to="/login" />;
  }
  if (!isLogin && token) {
    return <p>Loading...</p>;
  }

  return <Outlet />;
};
export default PrivateRoute;
