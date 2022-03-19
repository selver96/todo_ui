import { AuthActionEnum, SetUserAction, SetAuthAction, SetIsLoadingAction, SetErrorAction } from './types';
import { IUser } from '../../../models/IUser';
import { AppDispatch } from '../../index';
import AuthService from '../../../../infrastructure/service/AuthService';
import { jwt } from '../../../util/jwt';
import { RegistrationUser } from '../../../models/models';


export const AuthActionCreators = {
    setUser: (user: IUser): SetUserAction => ({ type: AuthActionEnum.SET_USER, payload: user }),
    setIsAuth: (auth: boolean): SetAuthAction => ({ type: AuthActionEnum.SET_AUTH, payload: auth }),
    setIsLoading: (payload: boolean): SetIsLoadingAction => ({ type: AuthActionEnum.SET_IS_LOADING, payload: payload }),
    setError: (payload: string): SetErrorAction => ({ type: AuthActionEnum.SET_ERROR, payload: payload }),
    login: (username: string, password: string) => async (dispatch: AppDispatch) => {
        try {
            localStorage.removeItem("access_token");
            dispatch(AuthActionCreators.setIsLoading(true));
            AuthService.login(username, password).then((res) => {
                localStorage.setItem("access_token", res.data.access);
                dispatch(AuthActionCreators.setUser(jwt.getUserInfo(res.data.access)));
                dispatch(AuthActionCreators.setIsAuth(true));
            });
            dispatch(AuthActionCreators.setIsLoading(false));
        } catch (e) {
            dispatch(AuthActionCreators.setError(''))
        }
    },
    registration: (user: RegistrationUser) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AuthActionCreators.setIsLoading(true));
            AuthService.registration(user).then((res) => {
                console.log(res)
            });
            dispatch(AuthActionCreators.setIsLoading(false));
        } catch (e) {
            dispatch(AuthActionCreators.setError(''))
        }
    },
    isAuth: () => async (dispatch: AppDispatch) => {
        try {
            AuthService.isAuth().then((res) => {
                if (res.data.isAuth) {
                    dispatch(AuthActionCreators.setUser(jwt.getUserInfo(localStorage.getItem('access_token'))));
                    dispatch(AuthActionCreators.setIsAuth(true));
                }
            }).catch((e) => {
                console.log(e)
            })

        } catch (e) {

        }
    },
    logout: () => async (dispatch: AppDispatch) => {
        try {
            AuthService.logout().then((res) => {
                dispatch(AuthActionCreators.setIsAuth(false));
                localStorage.removeItem("access_token");
            }).catch((e) => {
                console.log(e)
            })

        } catch (e) {

        }
    },


};