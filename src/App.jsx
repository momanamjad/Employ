import React, { useContext, useEffect } from 'react'
import "tailwindcss";
import Login from './components/Auth/Login';
import EmployDashboard from './components/Auth/dashboard/EmployDashboard';
import AdminDashboard from './components/Auth/dashboard/AdminDashboard';
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage';
import { AuthContext } from './context/AuthProvider';


const App = () => {
const [user,setUser]=React.useState(null)

const handleLogin=(email,password)=>{
  if (email=='admin@me.com' && password=='123') {
    setUser('admin')
  }  else if(email=='user@me.com' && password=='123'){
    setUser('employee')
  }else{
     alert('invalid credentials');
  }}
const data=useContext(AuthContext)

  return (
 <>
 {!user?<Login handleLogin={handleLogin}/>:''}
{user==`admin`?<AdminDashboard/>:''}
{user==`employee`?<EmployDashboard/>:''}
 </>
  )
}

export default App