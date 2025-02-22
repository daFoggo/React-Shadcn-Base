export interface IForgotPasswordFormProps {
  forgotPassword: (email: string) => Promise<boolean>;
  loadingAPI: boolean;
}
