import React from 'react'
import Header from '../others/Header'
import TaskListNo from '../others/TaskListNo'
import TaskList from '../TaskList/TaskList'

const EmployDashboard = ({props}) => {
  return (
    <div className='p-10 bg-[rgb(28,28,28)] h-screen'> 
      <Header changeUser={props.changeUser}  data={props.data}/>
      <TaskListNo data={props.data}/>
      <TaskList data={props.data}/>
    </div>
  )
}

export default EmployDashboard