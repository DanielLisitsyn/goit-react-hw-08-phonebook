import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from 'modules/PrivateRoute/PrivateRoute';
import PublicRoute from 'modules/PublicRoute/PublicRoute';
import { useEffect } from 'react';
import { current } from './redux/auth/auth-operations';
import { useDispatch } from 'react-redux';

const RegisterPage = lazy(() => import('./Pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('./Pages/LoginPage/LoginPage'));
const Phonebook = lazy(() => import('./Pages/Phonebook/Phonebook'));
const HomePage = lazy(() => import('./Pages/HomePage/HomePage'));
const NotFoundPage = lazy(() => import('./Pages/NotFoundPage/NotFoundPage'));

const UserRoutes = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(current());
  }, [dispatch]);
  return (
    <Suspense fallback={<p>....Load page</p>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element={<PublicRoute />}>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/contacts" element={<Phonebook />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
