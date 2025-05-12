import React from 'react'
import Navbar from '../Home/Navbar'
import CreateTask from '../../Other/CreateTask'
import AllTask from '../../Other/AllTask'

const Admin = ({data}) => {
    return (
        <div className='select-none w-full  h-screen '>
            <Navbar/>
            <CreateTask/>
            <AllTask/>
        </div>

    )
}

export default Admin