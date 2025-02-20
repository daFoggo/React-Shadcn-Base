import React from "react";
import { IUser } from "./User";

export interface IAuthContext {
    isAuthenticated: boolean;
    login: (user: IUser) => void;
    register: () => void;
    logout: () => void;
    forgotPassword: () => void;
    user: any | null;
  }
  