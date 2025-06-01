import React, { useContext, useState } from 'react'
import { AuthContex } from '../Contex/AuthProvider'

const CreateTask = () => {

    const [userData,setUserData] = useContext(AuthContex)

    const [tittle, setTittle] = useState('')
    const [date, setDate] = useState('')
    const [asign, setAsign] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')

    const [newTask, setNewTask] = useState({})

    const SubmitHandler = (e) => {
    e.preventDefault();
    setNewTask({tittle,date,category,description,active:false,newTask:true,failed:false,comoleted:false})

    const data = userData
    

    data.forEach((elem) => {
        if(asign == elem.firstName){
           elem.tasks.push(newTask)
           elem.taskCount.newTask = elem.taskCount.newTask+1
        }
    });
    setUserData(userData)
        console.log(data)

    
    setAsign("")
    setCategory("")
    setDate("")
    setTittle("")
    setDescription("")
}

    

    return (
        <>
            <div className='select-none pt-8 px-14 ' >

                <form onSubmit={(e)=>{
                    SubmitHandler(e)
                }}
                    className='flex p-10  flex-wrap w-full items-start jsutify-between bg-zinc-800 '>

                    <div className='w-[60%] flex  items-start gap-5 flex-col'>
                        <div className='flex gap-2 flex-col w-[60%]'>
                            <h3>Task Tittle</h3>
                            <input
                                value={tittle}
                                onChange={(e) => {
                                    setTittle(e.target.value)
                                }}
                                className='px-2 py-1  bg-transparent border-1 border-zinc-400 text-white' type="text" placeholder='Make a New task' />
                        </div>

                        <div className='flex gap-2 flex-col w-[60%]'>
                            <h3>Date</h3>
                            <input
                                value={date}
                                onChange={(e) => {
                                    setDate(e.target.value)
                                }}
                                className='px-2 py-1  bg-transparent border-1 border-zinc-400 text-zinc-400' type="date" />
                        </div>

                        <div className='flex gap-2 flex-col w-[60%]'>
                            <h3>Asign To</h3>
                            <input
                                value={asign}
                                onChange={(e) => {
                                    setAsign(e.target.value)
                                }}
                                className='px-2 py-1  bg-transparent border-1 border-zinc-400 text-white' type="text" placeholder='Employee name' />
                        </div>

                        <div className='flex gap-2 flex-col w-[60%]'>
                            <h3>Category</h3>
                            <input
                                value={category}
                                onChange={(e) => {
                                    setCategory(e.target.value)
                                }}
                                className='px-2 py-1  bg-transparent border-1 border-zinc-400 text-white' type="text" placeholder='Design Dev,etc' />
                        </div>

                    </div>


                    <div className='w-[40%] flex justify-start items-start flex-col gap-2 ' >
                        <h3>Decription</h3>
                        <textarea
                            value={description}
                            onChange={(e) => {
                                setDescription(e.target.value)
                            }}
                            className=' w-full bg-transparent border-1 border-zinc-400 text-white' cols="30" rows="10" name="text" id=""></textarea>
                        <button className='p-2 hover:bg-green-600 bg-green-500 rounded w-full '>Create Task</button>
                    </div>
                </form>

            </div>
        </>
    )
}

export default CreateTask