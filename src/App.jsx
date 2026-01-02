import React, { useContext, useEffect, useState } from 'react'
import "tailwindcss";
import Login from './components/Auth/Login';
import EmployDashboard from './components/Auth/dashboard/EmployDashboard';
import AdminDashboard from './components/Auth/dashboard/AdminDashboard';
import { AuthContext } from './context/AuthProvider';

const App = () => {
  const [user, setUser] = useState(null)
  const [userData, setUserData] = useContext(AuthContext); // Destructure here
  const [loggedInUserData, setLoggedInUserData] = useState(null)

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')
    if (loggedInUser) {
      const userDataParsed = JSON.parse(loggedInUser)
      setUser(userDataParsed.role)
      setLoggedInUserData(userDataParsed.data)
    }
  }, [])


  const handleLogin = (email, password) => {
    if (email == 'admin@me.com' && password == '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: `admin` }))
    } else if (userData && userData.employees) { // Now safe to access
      const employee = userData.employees.find((e) => e.email == email && e.password == password)
      if (employee) {
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: `employee`, data: employee }))
      } else {
        alert('Invalid credentials');
      }
    } else {
      alert('Invalid credentials');
    }
  }

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == `admin` ? <AdminDashboard changeUser={setUser} /> : ''}
      {user == `employee` ? <EmployDashboard changeUser={setUser} data={loggedInUserData} /> : ''}
    </>
  )
}

export default App