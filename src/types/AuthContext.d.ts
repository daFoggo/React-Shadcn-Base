export interface IAuthContext {
  isAuthenticated: boolean;
  loading: boolean;
  loadingAPI: boolean;
  login: (username: string, password: string) => Promise<boolean>;
  register: (
    email: string,
    username: string,
    password: string
  ) => Promise<boolean>;
  forgotPassword: (email: string) => Promise<boolean>;
  logout: () => void;
  user: any | null;
}
