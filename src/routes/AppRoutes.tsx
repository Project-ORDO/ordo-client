import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import ProtectedRoute from "./ProtectedRoute";

import Login from "@/pages/common/Login";
import Signup from "@/pages/common/Signup";
import ForgotPassword from "@/pages/common/ForgotPassword";


import CommonLayout from "@/layout/CommonLayout";
import UserLayout from "@/layout/UserLayout";
import Home from "@/pages/user/Home";
import Profile from "@/pages/user/Profile";

import AdminLayout from "@/layout/AdminLayout";
import AdminDashboard from "@/pages/admin/AdminDashboard";
import ManageUsers from "@/pages/admin/ManageUsers";

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
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <PublicRoute>
                <Signup />
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
          <Route path="profile" element={<Profile />} />
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
        <Route path="/unauthorized" element={<div>Access Denied</div>} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
