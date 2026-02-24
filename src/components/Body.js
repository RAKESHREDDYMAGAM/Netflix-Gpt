import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Login from './Login'
import Browse from './Browse'
import { RouterProvider as ReactRouterProvider } from 'react-router-dom'
import Header from './Header'


const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: <Browse />
        }
        
    ])
  return (
    <div className="body">
      
      <div>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/37372b0c-16ef-4614-9c66-f0464ffe4136/web/IN-en-20260216-TRIFECTA-perspective_74aa38a5-f527-417e-a604-a039567a350b_large.jpg" alt="Netflix Background"
       className="w-full left-0 top-0  absolute" />
      </div>
      <ReactRouterProvider router={appRouter}/>
    
    </div>
  )
}

export default Body