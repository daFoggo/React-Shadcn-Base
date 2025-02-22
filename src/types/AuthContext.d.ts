import React from "react";
import { IUser } from "./User";
import { ILoginResponse } from "@/services/auth/type";

export interface IAuthContext {
    isAuthenticated: boolean;
    loading: boolean;
    loadingAPI: boolean;
    login: (username: string, password: string) => Promise<boolean>;
    logout: () => void;
    user: any | null;
  }
  