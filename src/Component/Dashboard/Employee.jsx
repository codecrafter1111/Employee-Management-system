import React,{useContext} from 'react'
import Navbar from '../Home/Navbar'
import TaskListNumber from '../../Other/TaskListNumber'
import TaskLIst from '../Tasklist/TaskLIst'
import { AuthContex } from '../../Contex/AuthProvider'


const Employee = (props) => {
 const data = useContext(AuthContex)
 
  return (
    <div className='bg-zinc-800 h-screen select-none w-full' >
        <Navbar changeUser={props.changeUser} data = {data}/>
        <TaskListNumber data = {props.data}/>
        <TaskLIst data = {props.data}/>
    </div>
  )
}

export default Employee