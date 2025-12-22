import React from 'react'
import Header from '../others/Header'
import TaskListNo from '../others/TaskListNo'
import TaskList from '../TaskList/TaskList'

const EmployDashboard = () => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'> 
      <Header/>
      <TaskListNo/>
      <TaskList/>
    </div>
  )
}

export default EmployDashboard