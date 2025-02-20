import { IAuthContext } from "@/types/AuthContext";
import { IUser } from "@/types/User";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext<IAuthContext | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<IUser>({} as IUser);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    if (token && user) {
      setIsAuthenticated(true);
      setUser(JSON.parse(user));
    }
    setLoading(false);
  }, []);

  const login = (user: IUser) => {
    localStorage.setItem("token", "token");
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
    setIsAuthenticated(true);
    console.log("Logging in")
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    setUser({} as IUser);
  };

  const register = () => {
    console.log("Registering");
  }

  const forgotPassword = () => {
    console.log("Forgot Password");
  }

  const contextValue: IAuthContext = {
    isAuthenticated,
    loading,
    login,
    register,
    logout,
    forgotPassword,
    user,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
