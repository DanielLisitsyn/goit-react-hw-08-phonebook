import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from 'modules/PrivateRoute/PrivateRoute';
import PublicRoute from 'modules/PublicRoute/PublicRoute';

const RegisterPage = lazy(() =>
  import('./components/RegisterPage/RegisterPage')
);
const LoginPage = lazy(() => import('./components/LoginPage/LoginPage'));
const Phonebook = lazy(() => import('./components/Phonebook/Phonebook'));
const NotFoundPage = lazy(() => import('./components/NotFindPage/NotFindPage'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<p>....Load page</p>}>
      <Routes>
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