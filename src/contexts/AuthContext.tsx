import { IAuthContext } from "@/types/AuthContext";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext<IAuthContext | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<any>(null);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
      //  fetch user data
    }
  }, []);

  const login = () => {
    localStorage.setItem("token", "token");
    setIsAuthenticated(true);
    console.log("Logging in")
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setUser(null);
  };

  const register = () => {
    console.log("Registering");
  }

  const contextValue: IAuthContext = {
    isAuthenticated,
    login,
    register,
    logout,
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
