import React from 'react';
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Home from './Home';
import Login from './Login';
import Profile from './Profile';
import Feed from './Feed';

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path:"/login",
            element:<Login/>
        },
        {
            path:"/",
            element:<Home/>,
            children:[
                {
                    path:"/",
                    element:<Feed/>
                },
                {
                    path:"/profile",
                    element:<Profile/>
                }
            ]
        }
        
    ])
  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body