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
import AllToys from '../Pages/AllToys/AllToys';
import MyToys from '../Pages/MyToys/MyToys';
import AddToy from '../Pages/AddToy/AddToy';

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
                path: '/toyDetail/:id',
                element: <PrivateRoute><ToyDetail /></PrivateRoute>,
                loader: ({params}) => fetch(`https://toy-marketplace-server-theta.vercel.app/toyDetail/${params.id}`)
            },
            {
                path: '/allToys',
                element: <AllToys />, 
            },
            {
                path: '/myToys',
                element: <MyToys /> 
            },
            {
                path: '/addToy',
                element: <AddToy /> 
            },
        ]
    },
]);

export default router;