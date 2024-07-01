import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Mainlayout from "./layouts/Mainlayout.jsx";
import Landing from "./page/Landing.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Mainlayout/>,


        children: [
            {
                path: '/',
                element: <Landing/>
            }
            ]
    }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}>
            <Mainlayout/>
        </RouterProvider>
    </React.StrictMode>,
)
