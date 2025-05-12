import React from 'react'

const Accept = ({data}) => {
  return (
    <div className='mb-6 relative flex-shrink-0 p-6 h-full w-[24%] rounded-xl bg-zinc-600'>
                <div className='border-b-2 pb-4 flex justify-between items-center'>
                    <h3 className='text-sm text-white bg-yellow-500 px-3 py-1.5 rounded'>{data.category}</h3>
                    <h4 className='font-medium text-sm'>{data.date}</h4>
                </div>
                <h2 className=' mt-6 text-2xl font-semibold'>{data.tittle}</h2>
                <p className='text-sm mt-2'>{data.description}</p>
                <div className='absolute bottom-9  flex gap-5 justify-around  mt-14 '>
                    <button className=' cursor-pointer text-center py-2.5 rounded-md px-4 text-[13px] bg-green-500'>Mark as  Completed</button>
                    <button className='cursor-pointer text-center py-2.5 px-4 rounded-md text-[13px] bg-red-500'>Mark as  failed</button>
                </div>
            </div>
  )
}

export default Accept