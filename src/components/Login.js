import React from 'react'
import Header from './Header'
import { useState } from 'react'


const Login = () => {
  const [IsSignInform, setIsSignInform] = useState(true);
  const toggleForm = () => {
    setIsSignInform(!IsSignInform)
  };
  return (
    <div>

    <div className=" top-0 left-0 w-full">
      <Header/>
    </div>
    <div>
      <form className="absolute my-44 mx-auto right-0 left-0 p-7 bg-black bg-opacity-80 w-3/12 align-center">
        <h1 className="text-white text-2xl font-bold">{IsSignInform ? "Sign In" : "Sign Up"}</h1>
        {IsSignInform ? "" : <input type="text" placeholder="Username" className="p-2 my-4 bg-gray-800 bg-opacity-50 w-full border border-gray-300 rounded-md" />}
        <input type="text" placeholder="Email Address" className="p-2 my-4 w-full bg-gray-800 bg-opacity-50 border border-gray-300 rounded-md" />
        <input type="password" placeholder="Password" className="p-2 my-4 w-full bg-gray-800 bg-opacity-50 border border-gray-300 rounded-md" />
        <button type="submit" className="p-2 my-4 w-full bg-red-600 text-white rounded-md">Login</button>
        <p className="text-gray-400">{IsSignInform ? "New to Netflix?" : "Already have an account?"} <span className="underline cursor-pointer" onClick={toggleForm}>{IsSignInform ? "Sign Up" : "Sign In"}</span></p>
      </form>

    </div>
    </div>
  )
}

export default Login;