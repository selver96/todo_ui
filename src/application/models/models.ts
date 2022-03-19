export interface AuthResponse{
    refresh_token: string;
    access_token: string;
}

export interface RegistrationUser{
    surname: string;
    name: string;
    username: string;
    email: string;
    password: string;
}