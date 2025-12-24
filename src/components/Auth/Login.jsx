import React from "react";
import { useState } from "react";
import handleLogin from "../../App.jsx";

const Login = ({handleLogin}) => {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email,password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div
        className="relative p-16 rounded-xl 
                  border border-emerald-400/40 
                  bg-white/5 backdrop-blur-xl
                  shadow-[0_0_40px_rgba(16,185,129,0.25)]"
      >
        <form
          className="flex flex-col items-center gap-6"
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Enter your email"
            className="w-72 px-6 py-3 rounded-full  
                   bg-transparent text-white
                   border border-emerald-400/60
                   placeholder-gray-400
                   outline-none
                   transition-all duration-300
                   focus:border-emerald-400
                   focus:shadow-[0_0_15px_rgba(16,185,129,0.6)]"
          />

          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Enter password"
            className="w-72 px-6 py-3 rounded-full 
                   bg-transparent text-white
                   border border-emerald-400/60
                   placeholder-gray-400
                   outline-none
                   transition-all duration-300
                   focus:border-emerald-400
                   focus:shadow-[0_0_15px_rgba(16,185,129,0.6)]"
          />

          <button
            type="submit"
            className="mt-2 px-10 py-2 rounded-full 
                   bg-emerald-500 text-white font-medium
                   transition-all duration-300
                   hover:bg-emerald-600
                   hover:shadow-[0_0_25px_rgba(16,185,129,0.8)]
                   active:scale-95 cursor-pointer"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
