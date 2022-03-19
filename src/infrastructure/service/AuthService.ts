import { AuthResponse, RegistrationUser } from '../../application/models/models';
import $api from "../api";

export default class AutService {

    static async login(username: string, password: string) {
        const data = {
            email: username,
            password: password
        }
        return await $api.post('auth/login', data);
    }
    static async registration(body: RegistrationUser) {
        return await $api.post('auth/register', body);
    }

    static async isAuth() {
        return await $api.get('auth/is-auth');
    }

    static async logout() {
        return await $api.get('auth/logout');
    }

}