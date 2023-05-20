import React from 'react';
import {
    createBrowserRouter
} from "react-router-dom";
import Error from '../Pages/Error/Error';
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home/Home';
import Login from '../Pages/UserSign/Login/Login';
import Register from '../Pages/UserSign/Register/Register';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('https://toy-marketplace-server-theta.vercel.app/allToys'),
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
        ]
    },
]);

export default router;