import React, { useContext } from 'react'
import { AuthContex } from '../Contex/AuthProvider'

const AllTask = ({ data }) => {

const [userData,setUserData] = useContext(AuthContex)

    return (
        <div className='px-14 py-6  '>
            <div className='bg-zinc-800 flex gap-6 flex-col px-8 py-5 '>

                 <div className=' flex justify-between  px-6 py-2 bg-red-400 rounded-md '>
                    <h2 className=' text-lg font-medium w-1/5 '>Employee Name</h2>
                    <h5 className=' text-lg font-medium w-1/5'>New Task</h5>
                    <h3 className=' text-lg font-medium w-1/5 '>Active Task </h3>
                    <h5 className=' text-lg font-medium w-1/5'>Completed</h5>
                    <h5 className=' text-lg font-medium w-1/5'>Failed</h5>
                </div>

                <div className='  flex gap-3 flex-col '>
                     {userData.map((elem,idx) => {
                    return <div key={idx} className=' flex  justify-between px-6 py-2 bg-zinc-600 rounded-md '>
                    <h2 className=' text-lg font-medium w-1/5 text-white'>{elem.firstName}</h2>
                    <h5 className=' text-lg font-medium w-1/5 text-blue-400'>{elem.taskCount.newTask}</h5>
                    <h3 className=' text-lg font-medium w-1/5 text-yellow-500'>{elem.taskCount.active} </h3>
                    <h5 className=' text-lg font-medium w-1/5 text-green-500'>{elem.taskCount.completed}</h5>
                    <h5 className=' text-lg font-medium w-1/5 text-red-400'>{elem.taskCount.failed}</h5>
                </div>
                })}
                </div>
               
            </div>
         </div> 
    )
}

export default AllTask