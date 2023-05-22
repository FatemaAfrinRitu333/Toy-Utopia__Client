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
import AllToyDetail from '../Pages/AllToys/AllToyDetail/AllToyDetail';
import UpdateMyToy from '../Pages/MyToys/UpdateMyToy/UpdateMyToy';
import Blog from '../Pages/Blog/Blog';

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
                loader: ({params}) => fetch(`https://toy-utopia-server-production.up.railway.app/toyDetail/${params.id}`)
            },
            {
                path: '/allToys',
                element: <AllToys />, 
            },
            {
                path: '/seller-added-toy-details/:id',
                element: <PrivateRoute><AllToyDetail /></PrivateRoute>,
                loader: ({params}) => fetch(`https://toy-utopia-server-production.up.railway.app/allToys/${params.id}`)
            },
            {
                path: '/myToys',
                element: <MyToys /> 
            },
            {
                path: '/updateMyToys/:id',
                element: <UpdateMyToy />,
                loader: ({params}) => fetch(`https://toy-utopia-server-production.up.railway.app/myToys/${params.id}`)
            },
            {
                path: '/addToy',
                element: <AddToy /> 
            },
            {
                path: '/blog',
                element: <Blog /> 
            },
        ]
    },
]);

export default router;