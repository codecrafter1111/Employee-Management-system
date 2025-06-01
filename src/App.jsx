import { useContext, useEffect, useState } from 'react'
import './App.css'
import Login from './Component/Auth/Login'
import Employee from './Component/Dashboard/Employee'
import Admin from './Component/Dashboard/Admin'
import { AuthContex } from "./Contex/AuthProvider"


function App() {
  const [user, setUser] = useState(null);
  const [logInUserData, setlogInUserData] = useState(null)


  //USEING THE CONTEX   
  const [userData,setUserData] = useContext(AuthContex);


 // handling the login user
  useEffect(()=>{
  
     const loggedInUser = localStorage.getItem("loggedInUser")
     if(loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setlogInUserData(userData.data)
     }
   
  },[])


  const loginHandler = (email, password) => {

    // Check if the user is an admin
    if (email == "admin@gmail.com" && password == "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin", }))
    }
    // Check if the user is an employee
    else if (userData ) {
      const employee = userData.find((e) => email == e.email && password == e.password)
      if (employee) {
        setUser("employees");
        setlogInUserData(employee)
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "employees",data:employee }))
      }

    }
    // Invalid credentials
    else {
      alert("Invalid credentials");
    }
  };


  return (
    <>
      {!user && <Login loginHandler={loginHandler} />}
      {user === "admin" && <Admin changeUser = {setUser} />}
      {user === "employees" && <Employee changeUser = {setUser} data ={logInUserData} />}
    </>
  );
}

export default App;