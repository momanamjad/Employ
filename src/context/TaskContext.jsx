import React, { Children } from 'react'

const TaskContext = ({children}) => {
  return (
    <div> 
      {children}
    </div>
  )
}

export default TaskContext