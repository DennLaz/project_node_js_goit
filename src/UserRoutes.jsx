import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Loader from "./shared/components/Loader";

import PrivateRoute from "./shared/components/PrivateRoute";
import PublicRoute from "./shared/components/PublicRoute";

const AuthSocial = lazy(() => import("./pages/AuthSocial"));
const AuthPage = lazy(() => import("./pages/AuthPage"));
const TestPage = lazy(() => import("./pages/TestPage"));
const MaterialsPage = lazy(() => import("./pages/MaterialsPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

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
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="*" element={<NotFoundPage />} />
        
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
