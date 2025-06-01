import React ,{useState}from 'react'

const Navbar = (props) => {

  // const [userName, setUserName] = useState('')
  // if(!data){
  //   setUserName("admin")
  // }else{
  //   setUserName(data.firstName)
  // }

  const logOutUser = ()=>{
    localStorage.setItem("loggedInUser", '')
    props.changeUser('')
    // window.location.reload()
  }
  return (
    <div className=' text-white py-4 bg-zinc-900 px-10 flex items-center justify-between'>
      <h1 className='text-xl'>Hello <br /> <span className='text-2xl font-semibold text-cyan-500'>{props.data.firstName}🤚🏼</span> </h1>
        <button onClick={logOutUser} className='bg-red-500 hover:bg-red-400 cursor-pointer hover:text-black transition-all text-white px-5 py-2 rounded-sm text-sm font-medium'>Log Out</button>
    </div>
  )
}

export default Navbar