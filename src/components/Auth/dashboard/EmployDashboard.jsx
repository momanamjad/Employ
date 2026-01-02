// filepath: c:\Users\DELL\Desktop\employ\src\components\Auth\dashboard\EmployDashboard.jsx
import React from 'react'
import Header from '../others/Header'
import TaskListNo from '../others/TaskListNo'
import TaskList from '../TaskList/TaskList'

const EmployDashboard = ({ changeUser, data }) => {
  return (
    <div className='p-10 bg-[rgb(28,28,28)] h-screen'> 
      <Header changeUser={changeUser} data={data} />
      <TaskListNo data={data} />
      <TaskList data={data} />
    </div>
  )
}

export default EmployDashboard