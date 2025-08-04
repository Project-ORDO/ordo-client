import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import ProtectedRoute from "./ProtectedRoute";

// import Login from "@/pages/common/Login";
// import Signup from "@/pages/common/Signup";
// import Login from "@/pages/common/Login";
// import Signup from "@/pages/common/Signup";
import ForgotPassword from "@/pages/common/ForgotPassword";


import CommonLayout from "@/layout/CommonLayout";
import UserLayout from "@/layout/UserLayout";
import Home from "@/pages/user/Home";
import Profile from "@/pages/user/Profile";

import AdminLayout from "@/layout/AdminLayout";
import AdminDashboard from "@/pages/admin/AdminDashboard";
import ManageUsers from "@/pages/admin/ManageUsers";
import { CheckEmailPage } from "@/pages/user/auth/CheckEmailPage";
import { EmailVerificationFailedPage } from "@/pages/user/auth/VerificationFailedPage";
import { VerificationSuccessPage } from "@/pages/user/auth/VerificationSuccessPage";
import { VerificationExpiredPage } from "@/pages/user/auth/VerificationExpiredPage";
import NotFoundPage from '@/pages/common/404Page';
import UnAuthorized from '@/pages/common/UnAuthorized';
import { LoginForm } from "@/pages/user/auth/LoginPage";
import { SignupForm } from "@/pages/user/auth/SignupPage";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 🔓 Public Routes with Common Layout */}
        <Route element={<CommonLayout />}>
          <Route
            path="/login"
            element={
              <PublicRoute>
                <LoginForm />
              </PublicRoute>
            }
          />

          <Route
            path="/signup"
            element={
              <PublicRoute>
                <SignupForm />
              </PublicRoute>
            }
          />
          <Route
            path="/verify-email"
            element={
              <PublicRoute>
                <CheckEmailPage />
              </PublicRoute>
            }
          />
          <Route
            path="/verify-email-failed"
            element={
              <PublicRoute>
                <EmailVerificationFailedPage />
              </PublicRoute>
            }
          />
          <Route
            path="/verify-email-success"
            element={
              <PublicRoute>
                <VerificationSuccessPage />
              </PublicRoute>
            }
          />
          <Route
            path="/verify-email-expired"
            element={
              <PublicRoute>
                <VerificationExpiredPage />
              </PublicRoute>
            }
          />



          <Route
            path="/forgot-password"
            element={
              <PublicRoute>
                <ForgotPassword />
              </PublicRoute>
            }
          />
          <Route path="/profile" element={<Profile />} />
        </Route>




        {/* 👤 User Protected Routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute requiredRole="user">
              <UserLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Home />} />

        </Route>

        {/* 🛡️ Admin Protected Routes */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute requiredRole="admin">
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<AdminDashboard />} />
          <Route path="users" element={<ManageUsers />} />
        </Route>

        {/* Others */}
        <Route element={<CommonLayout />}>
          <Route path="/unauthorized" element={<UnAuthorized />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>


      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
