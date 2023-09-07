import React from 'react';
import {
    createBrowserRouter
} from "react-router-dom";
import Home from '../components/Home';
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';
import MainLayouts from '../components/layouts/MainLayouts';
import AddRecipe from '../components/recipe/AddRecipe';
import addRecipe from './actions/addRecipe';
import loginAction from './actions/loginAction';
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
                element: <Login/>,
                action: loginAction,
            },
            {
                path : '/register',
                element: <Register/>,
                action: registerAction,
            },
            {
                path : '/add-recipe',
                element: <AddRecipe/>,
                action:  addRecipe,
            }
        ]
    },
]);