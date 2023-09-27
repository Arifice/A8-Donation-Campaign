import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import Donation from './Components/Donation/Donation.jsx';
import Statistics from './Components/Statistics/Statistics.jsx';
import ShowDetails from './Components/ShowDetails/ShowDetails.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
            path:'/',
            loader:()=>fetch('../data.json'),
            element:<Home></Home>
    
        },
        {
            path:'/home/:id',
            loader:()=>fetch('../data.json'),
            element:<ShowDetails></ShowDetails>

        },
        {            
          path: '/donation',
          loader:()=>fetch('../data.json'),
          element: <Donation></Donation>,
        },
        {
            path:'/statistics',
            element:<Statistics></Statistics>
        }
      ],
    },
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
