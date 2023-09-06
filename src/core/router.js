import React from 'react';
import {
    createBrowserRouter
} from "react-router-dom";
import Home from '../components/Home';
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';
import MainLayouts from '../components/layouts/MainLayouts';
import registerAction from './actions/registerAction';

export const router = createBrowserRouter([
    {
        path: '/',
        exact: true,
        element: <MainLayouts/>,
        children: [
            {
                index : true,
                element: <Home/>
            },
            {
                path : '/login',
                element: <Login/>
            },
            {
                path : '/register',
                element: <Register/>,
                action: registerAction,
            }
        ]
    },
]);