import React from 'react'

const TaskList = () => {
  return (
    <div id='taskList' className='h-[55%] overflow-x-auto py-5 w-full flex items-center justify-start gap-5 flex-now mt-10 '> 
     <div className='shrink-0 h-full w-[300px] p-5 bg-yellow-400 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h2 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h2>
            <h4>20 feb 2020</h4>
        </div>
        <h2>git push daily</h2>
     </div>
 
    </div>
  )
}

export default TaskList