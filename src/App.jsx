import React, {  useContext, useEffect } from 'react'
import "tailwindcss";
import Login from './components/Auth/Login';
import EmployDashboard from './components/Auth/dashboard/EmployDashboard';
import AdminDashboard from './components/Auth/dashboard/AdminDashboard';
import { AuthContext } from './context/AuthProvider';


const App = () => {
const [user,setUser]=React.useState(null)
 const  authData=useContext(AuthContext)

 useEffect(()=>{
  if(authData&&authData.admin){
   const loggedInUser=localStorage.getItem('loggedInUser')
    if(loggedInUser){
      setUser(loggedInUser.role)
    }

  }
 },[authData])
 

const handleLogin=(email,password)=>{
  if (email=='admin@me.com' && password=='123') {
    setUser('admin')
    localStorage.setItem('loggedInUser',JSON.stringify({role:`admin`}))
  }  else if(authData&&authData.employees.find((e)=>e.email==email && e.password==password)){
    setUser('employee')
    localStorage.setItem('loggedInUser',JSON.stringify({role:`employee`}))


  }else{
     alert('invalid credentials');
  }}

  return (
 <>
 {!user?<Login handleLogin={handleLogin}/>:''}
{user==`admin`?<AdminDashboard/>:''}
{user==`employee`?<EmployDashboard/>:''}
 </>
  )

}

export default App