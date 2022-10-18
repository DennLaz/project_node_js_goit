import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// import PrivateRoute from 'shared/components/PrivateRoute';
// import PublicRoute from 'shared/components/PublicRoute';

const AuthPage = lazy(() => import('./pages/AuthPage'));
// const ContactPage = lazy(() => import('./pages/ContactPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<p>...Loading Page</p>}>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />

        {/* <Route element={<PrivateRoute />}>
          <Route path="contacts" element={<ContactPage />} />
        </Route>

        <Route element={<PublicRoute />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route> */}

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
