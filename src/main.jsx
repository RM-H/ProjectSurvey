import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Mainlayout from "./layouts/Mainlayout.jsx";
import Landing from "./page/Landing.jsx";
import Questions from "./page/Questions.jsx";
import Thanks from "./page/Thanks.jsx";
import Results_admin from "./page/Results_admin.jsx";

const router = createBrowserRouter([
    {
        path: "/survey",
        element: <Mainlayout/>,


        children: [
            {
                path: '/survey/:token',
                element: <Landing/>
            },
            {
                path: '/survey/survey',
                element: <Questions/>
            },
            {
                path: '/survey/thanks',
                element: <Thanks/>
            }
        ]
    },
    {
        path: '/survey/admin/:token',
        element: <Results_admin/>
    }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}>
            <Mainlayout/>
        </RouterProvider>
    </React.StrictMode>,
)
