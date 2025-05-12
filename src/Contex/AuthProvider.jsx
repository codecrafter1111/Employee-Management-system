import React, { useState,createContext, useEffect } from 'react'
import { getLocalStorage, setLocalStorage } from '../Utlis/LocalStorage';


 export const AuthContex = createContext();

const AuthProvider = ({children}) => {
  // localStorage.clear()
  const [userData, setUserData] = useState(null)

  useEffect(()=>{
    setLocalStorage();
    const {employees,admin} = getLocalStorage()
    setUserData({employees,admin})
  },[])

  return (
    <div>
      <AuthContex.Provider value={userData}>
        {children}
      </AuthContex.Provider>

    </div>
  )
}

export default AuthProvider