import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Loader from "./shared/components/Loader";

import PrivateRoute from "./shared/components/PrivateRoute";
import PublicRoute from "./shared/components/PublicRoute";

const AuthSocial = lazy(() => import("./pages/AuthSocial"));
const VerifyPage = lazy(() => import("./pages/VerifyPage"));
const UserResultsPage = lazy(() => import("./pages/UserResultsPage"));
const RePasswordPage = lazy(() => import("./pages/RePasswordPage"));
const AuthPage = lazy(() => import("./pages/AuthPage"));
const TestPage = lazy(() => import("./pages/TestPage"));
const MaterialsPage = lazy(() => import("./pages/MaterialsPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const TopResultsPage = lazy(() => import("./pages/TopResultsPage"));


const UserRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/" element={<AuthPage />} />
          <Route path="/authSocial/:token" element={<AuthSocial />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="/test" element={<TestPage />} />
          <Route path="/materials" element={<MaterialsPage />} />
        </Route>

        <Route path="/reset-password" element={<RePasswordPage />} />
        <Route path="/verify" element={<VerifyPage />} />
        <Route path="/user-results/:id" element={<UserResultsPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/top-results" element={<TopResultsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
