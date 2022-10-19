import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Loader from "./shared/components/Loader"

import PrivateRoute from './shared/components/PrivateRoute';
import PublicRoute from './shared/components/PublicRoute';

const AuthPage = lazy(() => import('./pages/AuthPage'));
const TestPage = lazy(() => import('./pages/TestPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="test" element={<TestPage />} />

        <Route element={<PrivateRoute />}>
          {/* <Route path="test" element={<TestPage />} />
          <Route path="result" element={<ResultPage />} /> */}
        </Route>

        <Route element={<PublicRoute />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
