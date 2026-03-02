import React from "react";
import Header from "./Header";
import { useState ,useRef} from "react";
import validate from "../utils/validate";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth"; 
import { signInWithEmailAndPassword } from "firebase/auth";


const Login = () => {
  const [IsSignInform, setIsSignInform] = useState(true);
  const [result, setResult] = useState(null);

  const email=useRef(null);
  const password=useRef(null);
  const name=useRef(null);
  const handlevalidate = () => {

  const result = validate(
    IsSignInform ? null : name.current.value,
    email.current.value,
    password.current.value
  );
  if(result) return;

  if(!IsSignInform){
   createUserWithEmailAndPassword(auth, name.current.value,email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setResult(errorCode + " : " + errorMessage);
    // ..
  });

  }
  else{
    signInWithEmailAndPassword(auth, name.current.value,email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setResult(errorCode + " : " + errorMessage);
  });
  }

  setResult(result);
};
  const toggleForm = () => {
    setIsSignInform(!IsSignInform);
  };
  return (
    <div>
      <div className=" top-0 left-0 w-full">
        <Header />
      </div>
      <div>
        <form onSubmit={(e)=>e.preventDefault()} className="absolute my-44 mx-auto right-0 left-0 p-7 bg-black bg-opacity-80 w-3/12 align-center">
          <h1 className="text-white text-2xl font-bold">
            {IsSignInform ? "Sign In" : "Sign Up"}
          </h1>
          {IsSignInform ? (
            ""
          ) : (
            <input
              ref={name}
              type="text"
              placeholder="Username"
              className="p-2 my-4 w-full bg-gray-800 bg-opacity-50 border border-gray-300 rounded-md text-white"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="p-2 my-4 w-full bg-gray-800 bg-opacity-50 border border-gray-300 rounded-md text-white"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-2 my-4 w-full bg-gray-800 bg-opacity-50 border border-gray-300 rounded-md text-white"
          />
          <p className="  font-bold text-red-500">{result}</p>
          <button
            type="submit"
            className="p-2 my-4 w-full bg-red-600 text-white rounded-md"
            onClick={handlevalidate}
            
          >
            Login
          </button>
          <p className="text-gray-400">
            {IsSignInform ? "New to Netflix?" : "Already have an account?"}{" "}
            <span className="underline cursor-pointer" onClick={toggleForm}>
              {IsSignInform ? "Sign Up" : "Sign In"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
