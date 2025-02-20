export interface IAuthContext {
    isAuthenticated: boolean;
    login: () => void;
    register: () => void;
    logout: () => void;
    forgotPassword: () => void;
    user: any | null;
  }
  