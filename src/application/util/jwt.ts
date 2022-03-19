import jwt_decode from "jwt-decode";
import { IUser } from '../models/IUser';

export const jwt = {
    getUserInfo: (token: any): IUser => {
        return jwt_decode(token);
    }
}
