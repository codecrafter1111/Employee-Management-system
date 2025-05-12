import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div className='flex justify-between px-14 mt-10 gap-4 w-screen'>
        <div className='px-10 py-6 rounded-xl bg-yellow-400 w-[45%]'>
            <h2 className='text-3xl font-semibold'>{data.taskCount.newTask}</h2>
            <h3 className='text-xl font-medium'>Accepted</h3>
        </div>
        <div className='px-10 py-6 rounded-xl bg-blue-400 w-[45%]'>
            <h2 className='text-3xl font-semibold'> {data.taskCount.completed}</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='px-10 py-6 rounded-xl bg-green-400 w-[45%]'>
        <h2 className='text-3xl font-semibold'> {data.taskCount.failed}</h2>
            <h3 className='text-xl font-medium'>Completed</h3>
        </div>
        <div className='px-10 py-6 rounded-xl bg-red-400 w-[45%]'>
        <h2 className='text-3xl font-semibold'>{data.taskCount.active}</h2>
            <h3 className='text-xl font-medium'>Failed</h3>
        </div>
    </div>
    
  )
}

export default TaskListNumber