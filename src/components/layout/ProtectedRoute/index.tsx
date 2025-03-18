import { useAuth } from "@/contexts/AuthContext";
import { Navigate, useLocation } from "react-router";
import { PageLoader } from "../../ui/page-loader";
import { navigationConfig } from "@/routes/config";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation();
  
  // Get the login path from the navigation config
  const loginPath = navigationConfig.auth.children?.login.path;

  if (loading) {
    return (
      <PageLoader />
    )
  }

  if (!isAuthenticated) {
    return <Navigate to={loginPath ?? '/'} state={{ from: location }} replace />;
  }

  return children;
}

export default ProtectedRoute;