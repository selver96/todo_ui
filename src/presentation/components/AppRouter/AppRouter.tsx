import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useTypedSelector } from '../../../application/hooks/useTypedSelector';
import { privateRouters, publicRouters } from '../../../application/route';


const AppRoutes:FC = () => {
    const { isAuth } = useTypedSelector(state => state.auth);

    return (
        isAuth
            ?
            <Routes>
                {
                    privateRouters.map(route =>
                        <Route
                            path={route.path}
                            index={route.index}
                            element={<route.element />}
                            key={route.path}
                        />
                    )

                }
            </Routes>
            :
            <Routes>
                {
                    publicRouters.map(route =>
                        <Route
                            path={route.path}
                            index={route.index}
                            element={<route.element />}
                            key={route.path}
                        />
                    )
                }
            </Routes>
    );
};

export default AppRoutes;