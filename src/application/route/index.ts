import React from 'react';
import Home from '../../presentation/pages/Home';
import Registration from '../../presentation/pages/Registration';


export interface IRouter{
    path: string;
    element: React.ComponentType;
    index?: boolean;
}

export enum RouteNames {
    HOME = '/',
    LOGIN = '/login',
    REGISTRATION = '/registration',
}

export const publicRouters: IRouter[] = [
    {path: RouteNames.REGISTRATION, index: true, element: Registration },
    
]

export const privateRouters: IRouter[] = [
    {path: RouteNames.HOME, index: true, element: Home },
]