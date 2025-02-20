export interface IAuthContext {
    isAuthenticated: boolean;
    login: () => void;
    register: () => void;
    logout: () => void;
    user: any | null;
  }
  