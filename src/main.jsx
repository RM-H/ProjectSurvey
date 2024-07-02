import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Mainlayout from "./layouts/Mainlayout.jsx";
import Landing from "./page/Landing.jsx";
import Questions from "./page/Questions.jsx";
import Thanks from "./page/Thanks.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Mainlayout/>,


        children: [
            {
                path: '/',
                element: <Landing/>
            },
            {
                path: '/survey',
                element: <Questions/>
            },
            {
                path: '/thanks',
                element: <Thanks/>
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
