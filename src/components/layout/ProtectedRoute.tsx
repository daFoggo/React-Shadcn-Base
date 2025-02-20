import { useAuth } from "@/contexts/AuthContext";
import { Navigate, useLocation } from "react-router";
import PageLoader from "../common/PageLoader";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <PageLoader />
    )
  }

  if (!isAuthenticated) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  return children;
}

export default ProtectedRoute;