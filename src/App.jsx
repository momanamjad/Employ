import React, { useEffect } from 'react'
import "tailwindcss";
import Login from './components/Auth/Login';
import EmployDashboard from './components/Auth/dashboard/EmployDashboard';
import AdminDashboard from './components/Auth/dashboard/AdminDashboard';
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage';


const App = () => {
const [user,setUser]=React.useState(null)
  return (
 <>
 {!user?<Login/>:''}
 
 {/* <EmployDashboard/> */}
  {/* <AdminDashboard/> */}
 </>
  )
}

export default App