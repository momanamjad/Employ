import React from 'react'
import "tailwindcss";
import Login from './components/Auth/Login';
import EmployDashboard from './components/Auth/dashboard/EmployDashboard';
import AdminDashboard from './components/Auth/dashboard/AdminDashboard';
const App = () => {
  return (
 <>
 {/* <Login/> */}
 {/* <EmployDashboard/> */}
  <AdminDashboard/>
 </>
  )
}

export default App