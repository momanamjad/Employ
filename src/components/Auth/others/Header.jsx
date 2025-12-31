import React, { useState } from "react";
import { setLocalStorage } from "../../../utils/LocalStorage";

const Header = () => {
// const[userName,setUserName]=useState('')
// if(!data){
//   setUserName('Admin')
// }else{
//   setUserName(data.firstName) 
// }
const loggoutUser=()=>{
localStorage.setItem('loggedInUser','')
window.location.reload()  
} 

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">Hello <span className="text-3xl font-semibold"> userName </span></h1>
      <button onClick={loggoutUser} className="bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-sm cursor-pointer">Logout</button>
    </div>
  );
};

export default Header;
