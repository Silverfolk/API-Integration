import React from 'react'
import {RouterProvider , createBrowserRouter} from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import Dashboard from './DashBoard';
const Main = () => {
  const approuter=createBrowserRouter([
    {
      path:'/',
      element:<Register/>
    },
    {
        path:'/login',
        element:<Login/> 
    },{
      path:'/dashboard',
      element:<Dashboard/>
    }
  ])
  return (
    <div>
      <RouterProvider router={approuter}/>
    </div>
  )
}

export default Main