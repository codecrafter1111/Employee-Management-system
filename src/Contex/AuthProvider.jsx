import React, { useState,createContext, useEffect } from 'react'
import { getLocalStorage, setLocalStorage } from '../Utlis/LocalStorage';


 export const AuthContex = createContext();

const AuthProvider = ({children}) => {
  // localStorage.clear()
  const [userData, setUserData] = useState(null)

  useEffect(()=>{
    setLocalStorage();
    const {employees} = getLocalStorage()
    setUserData(employees)
  },[])

  return (
    <div>
      <AuthContex.Provider value={[userData,setUserData]}>
        {children}
      </AuthContex.Provider>

    </div>
  )
}

export default AuthProvider