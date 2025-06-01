import React, { useContext } from 'react'
import Navbar from '../Home/Navbar'
import CreateTask from '../../Other/CreateTask'
import AllTask from '../../Other/AllTask'
import { AuthContex } from '../../Contex/AuthProvider'


const Admin = (props) => {
    const data = useContext(AuthContex)
    return (
        <div className='select-none w-full  h-screen '>
            <Navbar changeUser={props.changeUser} data={data}/>
            <CreateTask/>
            <AllTask data = {data}/>
        </div>

    )
}

export default Admin