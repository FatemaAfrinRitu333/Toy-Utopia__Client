import React from 'react';
import {
    createBrowserRouter
} from "react-router-dom";
import Error from '../Pages/Error/Error';
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home/Home';
import Login from '../Pages/UserSign/Login/Login';
import Register from '../Pages/UserSign/Register/Register';
import ToyDetail from '../Pages/Home/ShopByCategory/ToyDetail/ToyDetail';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />,
                    
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/allToys/:id',
                element: <PrivateRoute><ToyDetail /></PrivateRoute>,
                loader: ({params}) => fetch(`https://toy-marketplace-server-theta.vercel.app/allToys/${params.id}`)
            }
        ]
    },
]);

export default router;