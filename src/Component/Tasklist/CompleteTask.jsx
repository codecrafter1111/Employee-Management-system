import React from 'react'

const CompleteTask = ({data}) => {
    return (
         <div className='mb-6 relative flex-shrink-0 p-6 h-full w-[24%] rounded-xl bg-zinc-600'>
                <div className='border-b-2 pb-4 flex justify-between items-center'>
                    <h3 className='text-sm text-white bg-green-500 px-3 py-1.5 rounded'>{data.category}</h3>
                    <h4 className='font-medium text-sm'>{data.date}</h4>
                </div>
                <h2 className=' mt-6 text-2xl font-semibold'>{data.tittle}</h2>
                <p className='text-sm mt-2'>{data.description}</p>
                <div className=' absolute bottom-9  '>
                    <button className='w-full cursor-pointer text-center py-2  px-28 rounded-md  text-[15px] bg-green-500'>Completed</button>
                
                </div>
            </div>
    )
}

export default CompleteTask