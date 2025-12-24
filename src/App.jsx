import React, { useEffect } from 'react'
import "tailwindcss";
import Login from './components/Auth/Login';
import EmployDashboard from './components/Auth/dashboard/EmployDashboard';
import AdminDashboard from './components/Auth/dashboard/AdminDashboard';
import { setLocalStorage } from './utils/LocalStorage';


const App = () => {
  useEffect(()=>{
  setLocalStorage();
})
  return (
 <>
 <Login/>
  
 </>
  )
}

export default App