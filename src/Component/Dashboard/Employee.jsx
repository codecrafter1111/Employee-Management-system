import React from 'react'
import Navbar from '../Home/Navbar'
import TaskListNumber from '../../Other/TaskListNumber'
import TaskLIst from '../Tasklist/TaskLIst'

const Employee = ({data}) => {
 
  return (
    <div className='bg-zinc-800 h-screen select-none w-full' >
        <Navbar data = {data}/>
        <TaskListNumber data = {data}/>
        <TaskLIst data = {data}/>
    </div>
  )
}

export default Employee