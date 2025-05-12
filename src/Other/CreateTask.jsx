import React from 'react'

const CreateTask = () => {
    return (
        <>
        <div className='select-none pt-8 px-14 ' >

            <form action="" className='flex p-10  flex-wrap w-full items-start jsutify-between bg-zinc-800 '>
                <div className='w-[60%] flex  items-start gap-5 flex-col'>
                    <div className='flex gap-2 flex-col w-[60%]'>
                        <h3>Task Tittle</h3>
                        <input className='px-2 py-1  bg-transparent border-1 border-zinc-400 text-white' type="text" placeholder='Make a New task' />
                    </div>

                    <div className='flex gap-2 flex-col w-[60%]'>
                        <h3>Date</h3>
                        <input className='px-2 py-1  bg-transparent border-1 border-zinc-400 text-zinc-400' type="date" />
                    </div>

                    <div className='flex gap-2 flex-col w-[60%]'>
                        <h3>Asign To</h3>
                        <input className='px-2 py-1  bg-transparent border-1 border-zinc-400 text-white' type="text" placeholder='Employee name' />
                    </div>

                    <div className='flex gap-2 flex-col w-[60%]'>
                        <h3>Category</h3>
                        <input className='px-2 py-1  bg-transparent border-1 border-zinc-400 text-white' type="text" placeholder='Design Dev,etc' />
                    </div>

                </div>


                <div className='w-[40%] flex justify-start items-start flex-col gap-2 ' >
                    <h3>Decription</h3>
                    <textarea className=' w-full bg-transparent border-1 border-zinc-400 text-white' cols="30" rows="10" name="text" id=""></textarea>
                    <button className='p-2 bg-green-600 rounded w-full '>Create Task</button>
                </div>
            </form>

        </div>
        </>
    )
}

export default CreateTask