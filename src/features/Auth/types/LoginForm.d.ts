import { ILoginResponse } from "@/services/auth/type";

export interface ILoginFormProps {
    login: (username: string, password: string) => Promise<boolean>;
    loadingAPI: boolean;
}
