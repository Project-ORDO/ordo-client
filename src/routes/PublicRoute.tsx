import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const PublicRoute = ({ children }: Props) => {
  const user = {
    isAuthenticated: false,
  };

  if (user.isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PublicRoute;
