// filepath: c:\Users\DELL\Desktop\employ\src\components\Auth\dashboard\EmployDashboard.jsx
import React, { useContext } from 'react'
import Header from '../others/Header'
import TaskListNo from '../others/TaskListNo'
import TaskList from '../TaskList/TaskList'
import { AuthContext } from '../../../context/AuthProvider'

const EmployDashboard = ({ changeUser, data }) => {
  const [userData, setUserData] = useContext(AuthContext)

  // Add guard clause for missing data
  if (!data) {
    return (
      <div className='p-10 bg-[rgb(28,28,28)] h-screen text-white'>
        <p>Error: Employee data not found. Please log in again.</p>
        <button onClick={() => changeUser(null)} className='mt-4 bg-red-600 text-white px-4 py-2 rounded'>Go Back to Login</button>
      </div>
    )
  }

  const updateTask = (taskIndex, updates) => {
    const updatedEmployees = userData.employees.map(employee => {
      if (employee.email === data.email) {
        const updatedTasks = employee.tasks.map((task, idx) => 
          idx === taskIndex ? { ...task, ...updates } : task
        )
        const updatedEmployee = { ...employee, tasks: updatedTasks }
 
        const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))
        localStorage.setItem('loggedInUser', JSON.stringify({ ...loggedInUser, data: updatedEmployee }))
        return updatedEmployee
      }
      return employee
    })
    setUserData({ employees: updatedEmployees })
    localStorage.setItem('employees', JSON.stringify(updatedEmployees))
  }

  return (
    <div className='p-10 bg-[rgb(28,28,28)] h-screen'> 
      <Header changeUser={changeUser} data={data} />
      <TaskListNo data={data} />
      <TaskList data={data} updateTask={updateTask} />
    </div>
  )
}

export default EmployDashboard