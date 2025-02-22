export interface ILoginResponse {
    success: boolean;
    payload: {
        accessToken: string;
        user: {
            name: string,
            role: string
        },
        expiresIn: number;
    }
}