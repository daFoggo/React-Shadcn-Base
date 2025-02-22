import { toast } from "@/hooks/use-toast";
import { IAuthContext } from "@/types/AuthContext";
import { IUser } from "@/types/User";
import { DICEBEAR_API } from "@/utils/endpoints";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext<IAuthContext | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<IUser>({} as IUser);
  const [loading, setLoading] = useState(true);
  const [loadingAPI, setLoadingAPI] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    if (token && user) {
      setIsAuthenticated(true);
      setUser(JSON.parse(user));
    }
    setLoading(false);
  }, []);

  const login = async (username: string, password: string) => {
    setLoadingAPI(true);
    try {
      // const { data } = await authService.login(username, password);
      console.log(username, password); // only for sample purpose ( remove it in production )
      const data = {
        success: true,
        payload: {
          accessToken: "token",
          user: {
            name: username,
            role: "Admin",
          },
        }
      }

      if (data.success) {
        const userWithAvatar = {
          ...data.payload.user,
          image: `${DICEBEAR_API}/${data.payload.user.name}`
        };
        localStorage.setItem("token", data.payload.accessToken);
        localStorage.setItem("user", JSON.stringify(userWithAvatar));
        setUser(userWithAvatar);
        setIsAuthenticated(true);
        toast({
          title: "Login Successfully",
        });
        return true;
      }
      return false;
    } catch (error) {
      console.log(error);
      toast({
        title: "Login Failed",
        variant: "destructive",
      });
      return false;
    } finally {
      setLoadingAPI(false);
    }
  };

  const register = async (email: string, username: string, password: string) => {
    setLoadingAPI(true);
    try {
      console.log(email, username, password); // only for sample purpose ( remove it in production )
      const data = {
        success: true,
        payload: {
          accessToken: "token",
          user: {
            name: username,
            role: "Admin",
          },
        }
      }

      if (data.success) {
        toast({
          title: "Register Successfully",
        });
        return true;
      }
      return false;
    } catch (error) {
      console.log(error);
      toast({
        title: "Register Failed",
        variant: "destructive",
      });
      return false;
    } finally {
      setLoadingAPI(false);
    }
  }

  const forgotPassword = async (email: string) => {
    setLoadingAPI(true);
    try {
      console.log(email); // only for sample purpose ( remove it in production )
      const data = {
        success: true,
        payload: {
          message: "Email sent successfully",
        }
      }

      if (data.success) {
        toast({
          title: data.payload.message,
        });
        return true;
      }
      return false;
    } catch (error) {
      console.log(error);
      toast({
        title: "Forgot Password Failed",
        variant: "destructive",
      });
      return false;
    } finally {
      setLoadingAPI(false);
    }
  }

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    setUser({} as IUser);
  };

  const contextValue: IAuthContext = {
    isAuthenticated,
    loading,
    loadingAPI,
    login,
    register,
    forgotPassword,
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
