export interface IRegisterFormProps {
  register: (
    email: string,
    username: string,
    password: string
  ) => Promise<boolean>;
  loadingAPI: boolean;
}
