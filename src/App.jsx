import React, { useEffect } from 'react'
import "tailwindcss";
import Login from './components/Auth/Login';
import EmployDashboard from './components/Auth/dashboard/EmployDashboard';
import AdminDashboard from './components/Auth/dashboard/AdminDashboard';
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage';


const App = () => {
const [user,setUser]=React.useState(null)
const handleLogin=(email,password)=>{
  if (email=='admin@me.cm' && password=='123') {
    console.log('admin logged in');
    setUser('admin')
  }else{
    alert("invalid credentials")
  } }
  return (
 <>
 {!user?<Login handleLogin={handleLogin}/>:''}

 {/* <EmployDashboard/> */}
  {/* <AdminDashboard/> */}
 </>
  )
}

export default App